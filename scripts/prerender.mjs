// Post-build static prerendering.
//
// vite build ships a client-only shell (`dist/index.html` = `<div id="root">`
// + a script tag) — every real <img> and all text only exist once JS runs.
// Google's crawler can execute JS, but it's slower/less reliable for this
// than a page that already has real content in the raw HTML, which is why
// no thumbnail image was showing up for this site in search results.
//
// This script visits every real route in a headless browser after the build,
// captures the fully-rendered HTML, and writes it to dist/<route>/index.html
// so GitHub Pages serves real content+images without needing to run any JS.
// The site stays a plain client-side app otherwise — main.tsx hydrates the
// prerendered markup instead of replacing it, so real visitors see no change.
//
// Navigation happens against the real production origin (read from
// public/CNAME) with every same-origin request intercepted and served from
// the local dist/ build — not a localhost server — so that code reading
// window.location (e.g. SEOHead.tsx's og:url/og:image tags) captures the
// real production URL instead of a throwaway local address.
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(rootDir, 'dist');

const PRODUCTION_ORIGIN = `https://${fs.readFileSync(path.join(rootDir, 'public', 'CNAME'), 'utf8').trim()}`;

const BLOCKED_HOST_PATTERN =
  /google-analytics\.com|googletagmanager\.com|analytics\.google\.com|docs\.google\.com/;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
};

function getRoutesFromSitemap() {
  const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const locs = [...xml.matchAll(/<loc>(https?:\/\/[^<]+)<\/loc>/g)].map((m) => m[1]);
  if (locs.length === 0) {
    throw new Error(`No <loc> entries found in ${sitemapPath}`);
  }
  return locs.map((loc) => {
    const { pathname } = new URL(loc);
    return pathname === '' ? '/' : pathname;
  });
}

function outputFileForRoute(route) {
  const cleanRoute = route === '/' ? '' : route.replace(/\/$/, '');
  return path.join(distDir, cleanRoute, 'index.html');
}

// Serves dist/ to the page without any real localhost server: every request
// to the production origin is intercepted and fulfilled from disk, so
// window.location matches production exactly. Non-matching, non-blocked
// requests (e.g. Google Fonts) continue to the real network unmodified.
async function installRouter(page, shellHtml) {
  await page.route('**/*', (route) => {
    const url = route.request().url();

    if (BLOCKED_HOST_PATTERN.test(url)) {
      return route.abort();
    }

    const parsed = new URL(url);
    if (parsed.origin !== PRODUCTION_ORIGIN) {
      return route.continue();
    }

    const candidate = path.join(distDir, decodeURIComponent(parsed.pathname));
    if (candidate.startsWith(distDir) && fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      const ext = path.extname(candidate).toLowerCase();
      return route.fulfill({
        status: 200,
        contentType: MIME_TYPES[ext] || 'application/octet-stream',
        body: fs.readFileSync(candidate),
      });
    }

    // No file on disk for this path -> it's a client-side route; serve the
    // SPA shell so React Router can render it, exactly like the GitHub
    // Pages 404->index.html fallback trick.
    return route.fulfill({ status: 200, contentType: 'text/html; charset=utf-8', body: shellHtml });
  });
}

async function prerenderRoute(browser, shellHtml, route) {
  const context = await browser.newContext();
  const page = await context.newPage();
  await installRouter(page, shellHtml);

  await page.goto(`${PRODUCTION_ORIGIN}${route}`, { waitUntil: 'networkidle' });
  await page.waitForSelector('main', { timeout: 10_000 });
  // Above-the-fold mount transitions (Layout's fade-in, hero, images) are
  // timer-driven (0.3-0.5s), not network-driven — settle before capturing so
  // the snapshot shows fully-opaque "at rest" content, not a mid-fade frame.
  await page.waitForTimeout(700);

  const rawHtml = await page.content();
  await context.close();

  // Blocking the network request above stops the *build* from sending a
  // fake analytics hit, but react-ga4 still inserts a live
  // <script src=".../gtag/js?id=...">  element into the DOM the moment
  // initGA() runs (it doesn't wait for the request to succeed). Left in the
  // shipped HTML, that tag would make every real visitor load gtag.js
  // before React/main.tsx's own deliberately-deferred initGA() ever runs,
  // and then initGA() would initialize GA4 a second time on top of it —
  // undermining the requestIdleCallback deferral and risking duplicate
  // page_view hits corrupting real analytics data. Strip it here.
  const html = rawHtml.replace(
    /<script[^>]*\bsrc="[^"]*(?:googletagmanager\.com|google-analytics\.com|analytics\.google\.com)[^"]*"[^>]*>\s*<\/script>/gi,
    ''
  );
  return html;
}

async function main() {
  if (!fs.existsSync(distDir)) {
    throw new Error(`dist/ not found at ${distDir} — run "vite build" first.`);
  }

  const shellHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
  // Preserve the lightweight, unprerendered JS-shell as the GitHub Pages
  // SPA-fallback 404 page — must happen before any route overwrites index.html.
  fs.writeFileSync(path.join(distDir, '404.html'), shellHtml);

  const routes = getRoutesFromSitemap();
  const browser = await chromium.launch();
  const results = [];

  try {
    for (const route of routes) {
      const html = await prerenderRoute(browser, shellHtml, route);

      if (!html.includes('<main')) {
        throw new Error(`Prerender check failed for ${route}: no <main> element in captured HTML.`);
      }
      if (html.length < 2000) {
        throw new Error(`Prerender check failed for ${route}: captured HTML looks too small (${html.length} bytes).`);
      }
      if (!html.includes('<img')) {
        console.warn(`[prerender] warning: ${route} has no <img> tags — expected for text-only pages, but double check.`);
      }

      const outFile = outputFileForRoute(route);
      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(outFile, html);

      results.push({ route, bytes: html.length, hasImg: html.includes('<img') });
      console.log(`[prerender] ${route} -> ${path.relative(rootDir, outFile)} (${html.length} bytes)`);
    }
  } finally {
    await browser.close();
  }

  console.log(`[prerender] done: ${results.length} routes prerendered.`);
}

main().catch((err) => {
  console.error('[prerender] failed:', err);
  process.exit(1);
});
