// Generates public/sitemap.xml from the app's real route set.
//
// Runs before `vite build` (see the "prebuild" script), after fetch-blog.mjs.
// The sitemap is not just for crawlers here: scripts/prerender.mjs takes its
// route list straight from <loc> entries, so anything missing from this file
// is also missing from the static build. It used to be hand-maintained, which
// is how it ended up advertising three deleted blog slugs while none of the
// five real posts were listed at all.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
const snapshotPath = path.join(rootDir, 'src', 'data', 'blogSnapshot.json');
const packageDataPath = path.join(rootDir, 'src', 'data', 'packageData.ts');

const SITE_URL = `https://${fs.readFileSync(path.join(rootDir, 'public', 'CNAME'), 'utf8').trim()}`;

// Every non-dynamic route in src/App.tsx that should be indexed. Keep in sync
// when adding a route — a missing entry means the page is never prerendered.
// (/404 is deliberately absent: it is noindex.)
const STATIC_ROUTES = [
  '/',
  '/kuno-national-park',
  // Planning guides — keep in sync with src/data/guides.ts.
  '/kuno-safari-booking',
  '/kuno-safari-price',
  '/kuno-safari-zones',
  '/best-time-to-visit-kuno',
  '/how-to-reach-kuno',
  '/where-to-stay-near-kuno',
  '/packages',
  '/beyond-safari',
  '/blogs',
  '/about',
  '/contact',
  '/terms-and-conditions',
  '/privacy-policy',
];

// Top-level entries of `export const packageData` are indented by four spaces;
// their nested accommodation options are indented deeper, so anchoring on the
// indent keeps `homestay`/`resort` out of the URL list. The slice is bounded at
// the next top-level export too — without that, ids from any later export in
// the file leak in and get published as package URLs that redirect away.
function readPackageIds() {
  const source = fs.readFileSync(packageDataPath, 'utf8');
  const start = source.indexOf('export const packageData');
  if (start === -1) {
    throw new Error(`Could not find "export const packageData" in ${packageDataPath}.`);
  }
  const after = source.slice(start + 1);
  const nextExport = after.indexOf('\nexport ');
  const body = nextExport === -1 ? after : after.slice(0, nextExport);

  const ids = [...body.matchAll(/^ {4}id: '([^']+)',$/gm)].map((m) => m[1]);
  if (ids.length === 0) {
    throw new Error(
      `No package ids found in ${packageDataPath}. If its formatting changed, update the matcher in generate-sitemap.mjs.`
    );
  }
  return ids;
}

function readBlogPosts() {
  if (!fs.existsSync(snapshotPath)) {
    throw new Error(`${snapshotPath} not found — run scripts/fetch-blog.mjs first.`);
  }
  return JSON.parse(fs.readFileSync(snapshotPath, 'utf8'));
}

/** Mirrors slugifyHeading() in src/utils/blogPosts.ts. */
function slugify(text) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** One entry per distinct post category, dated by its most recent post. */
function blogCategorySlugs(posts) {
  const bySlug = new Map();
  for (const post of posts) {
    const name = (post.category ?? '').trim();
    if (!name) continue;
    const slug = slugify(name);
    const existing = bySlug.get(slug);
    const lastmod = post.dateISO ?? null;
    if (!existing || (lastmod && lastmod > existing.lastmod)) {
      bySlug.set(slug, { slug, lastmod: lastmod ?? existing?.lastmod ?? null });
    }
  }
  return [...bySlug.values()];
}

function urlEntry({ loc, lastmod }) {
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []),
    '  </url>',
  ].join('\n');
}

function main() {
  // A fixed build date rather than "now": the same commit rebuilt twice should
  // not claim the whole site changed, which is how <lastmod> loses its meaning.
  const buildDate = (process.env.SITEMAP_BUILD_DATE || new Date().toISOString().slice(0, 10));

  const posts = readBlogPosts();
  const packageIds = readPackageIds();

  const entries = [
    ...STATIC_ROUTES.map((route) => ({
      loc: route === '/' ? `${SITE_URL}/` : `${SITE_URL}${route}`,
      lastmod: buildDate,
    })),
    ...packageIds.map((id) => ({ loc: `${SITE_URL}/package/${id}`, lastmod: buildDate })),
    ...posts.map((post) => ({
      loc: `${SITE_URL}/blog/${post.slug}`,
      lastmod: post.dateISO ?? buildDate,
    })),
    // Category archives. Slugs must match slugifyHeading() in
    // src/utils/blogPosts.ts, which builds the same list for the app.
    ...blogCategorySlugs(posts).map(({ slug, lastmod }) => ({
      loc: `${SITE_URL}/blog/category/${slug}`,
      lastmod: lastmod ?? buildDate,
    })),
  ];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries.map(urlEntry),
    '</urlset>',
    '',
  ].join('\n');

  fs.writeFileSync(sitemapPath, xml);

  console.log(
    `[sitemap] ${entries.length} URLs -> ${path.relative(rootDir, sitemapPath)} ` +
      `(${STATIC_ROUTES.length} static, ${packageIds.length} packages, ${posts.length} posts)`
  );
}

main();
