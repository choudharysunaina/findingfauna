// Post-build SEO assertions over the prerendered HTML in dist/.
//
// Run after a build (`npm run check:seo`). These are the invariants that broke
// silently before: duplicate <title>/canonical tags from static+Helmet overlap,
// descriptions overflowing because a boilerplate sentence was appended to every
// one, two pages sharing the same title, and placeholder values shipping in
// JSON-LD. Cheap to check, and a build that violates them is not deployable.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(rootDir, 'dist');

const MAX_DESCRIPTION = 160;
const MAX_TITLE = 65;

function findPages(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return findPages(full);
    return entry.name === 'index.html' ? [full] : [];
  });
}

function all(html, re) {
  return [...html.matchAll(re)].map((m) => m[1]);
}

function countOf(html, needle) {
  return html.split(needle).length - 1;
}

function main() {
  if (!fs.existsSync(distDir)) {
    console.error('[check-seo] dist/ not found — run "npm run build" first.');
    process.exit(1);
  }

  const pages = findPages(distDir);
  const problems = [];
  const titles = new Map();
  const descriptions = new Map();

  for (const file of pages) {
    const html = fs.readFileSync(file, 'utf8');
    const rel = path.relative(distDir, path.dirname(file)).split(path.sep).join('/');
    const route = `/${rel}`;
    const fail = (msg) => problems.push(`${route}: ${msg}`);

    const pageTitles = all(html, /<title[^>]*>([^<]*)<\/title>/g);
    const pageDescriptions = all(html, /<meta name="description" content="([^"]*)"/g);
    const canonicals = all(html, /<link rel="canonical" href="([^"]*)"/g);

    if (pageTitles.length !== 1) fail(`${pageTitles.length} <title> tags (expected 1)`);
    if (pageDescriptions.length !== 1) fail(`${pageDescriptions.length} descriptions (expected 1)`);
    if (canonicals.length !== 1) fail(`${canonicals.length} canonical links (expected 1)`);

    const [title] = pageTitles;
    const [description] = pageDescriptions;

    if (title) {
      if (titles.has(title)) fail(`title duplicates ${titles.get(title)} — "${title}"`);
      else titles.set(title, route);
      if (title.length > MAX_TITLE) fail(`title is ${title.length} chars (max ${MAX_TITLE})`);
    }

    if (description) {
      if (descriptions.has(description)) {
        fail(`description duplicates ${descriptions.get(description)}`);
      } else {
        descriptions.set(description, route);
      }
      if (description.length > MAX_DESCRIPTION) {
        fail(`description is ${description.length} chars (max ${MAX_DESCRIPTION})`);
      }
    }

    if (html.includes('XXXXXXXXXX')) fail('placeholder phone number in output');
    if (html.includes('<meta name="keywords"')) fail('meta keywords tag still present');
    if (html.includes('images.unsplash.com')) fail('external Unsplash image referenced');

    for (const marker of ['name="viewport"', 'rel="manifest"', 'rel="apple-touch-icon"']) {
      const n = countOf(html, marker);
      if (n > 1) fail(`${marker} appears ${n} times (static shell + Helmet overlap)`);
    }

    const images = html.match(/<img\b[^>]*>/g) ?? [];
    const missingAlt = images.filter((tag) => !/\salt=/.test(tag)).length;
    if (missingAlt > 0) fail(`${missingAlt} <img> without an alt attribute`);

    // Intrinsic dimensions let the browser reserve space before the image
    // loads. Without them every image on the page contributes to layout shift.
    const missingSize = images.filter(
      (tag) => !/\swidth=/.test(tag) || !/\sheight=/.test(tag)
    );
    if (missingSize.length > 0) {
      const srcs = missingSize
        .map((tag) => tag.match(/src="([^"]*)"/)?.[1] ?? '?')
        .slice(0, 3)
        .join(', ');
      fail(`${missingSize.length} <img> without width/height (e.g. ${srcs})`);
    }

    const ids = all(html, /\sid="([^"]+)"/g);
    const duplicateIds = ids.filter((id, i) => ids.indexOf(id) !== i);
    if (duplicateIds.length > 0) fail(`duplicate element ids: ${[...new Set(duplicateIds)].join(', ')}`);

    // Every JSON-LD block must parse — a malformed one is silently ignored by
    // Google, so it would otherwise look like the markup simply had no effect.
    for (const block of all(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        JSON.parse(block);
      } catch (err) {
        fail(`unparseable JSON-LD block (${err.message})`);
      }
    }
  }

  console.log(`[check-seo] ${pages.length} pages checked`);
  console.log(`[check-seo] ${titles.size} unique titles, ${descriptions.size} unique descriptions`);

  if (problems.length > 0) {
    console.error(`\n[check-seo] ${problems.length} problem(s):`);
    for (const problem of problems) console.error(`  - ${problem}`);
    process.exit(1);
  }

  console.log('[check-seo] all assertions passed');
}

main();
