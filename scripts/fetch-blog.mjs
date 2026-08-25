// Build-time blog snapshot.
//
// Runs before `vite build` (see the "prebuild" script). Pulls the published
// Google Sheet and writes src/data/blogSnapshot.json, which the app imports
// directly. Two things depend on this:
//
//   1. The prerenderer captures real post text into dist/blog/<slug>/index.html
//      instead of an empty shell — previously every post was invisible to
//      crawlers because the sheet was only ever fetched in the browser.
//   2. scripts/generate-sitemap.mjs reads the snapshot for the live slug list,
//      and prerender.mjs takes its route list from that sitemap.
//
// The snapshot is committed so `npm run dev` and offline builds work. If the
// sheet is unreachable we keep the committed copy and warn rather than failing
// the deploy; we only hard-fail when there is no snapshot at all.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { fetchPostsFromSheet } from './lib/blog-sheet.mjs';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const snapshotPath = path.join(rootDir, 'src', 'data', 'blogSnapshot.json');
const configPath = path.join(rootDir, 'src', 'config', 'blogSheet.ts');

function readSheetUrl() {
  const source = fs.readFileSync(configPath, 'utf8');
  const match = source.match(/BLOG_SHEET_CSV_URL\s*=\s*\n?\s*'([^']+)'/);
  if (!match) {
    throw new Error(`Could not find BLOG_SHEET_CSV_URL in ${configPath}`);
  }
  return match[1];
}

function validate(posts) {
  const problems = [];
  const seen = new Set();

  for (const post of posts) {
    if (seen.has(post.slug)) problems.push(`duplicate slug "${post.slug}"`);
    seen.add(post.slug);

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug)) {
      problems.push(`slug "${post.slug}" is not URL-safe (lowercase words joined by hyphens)`);
    }
    if (!post.dateISO) problems.push(`"${post.slug}" has an unparseable date: "${post.date}"`);
    if (!post.excerpt) problems.push(`"${post.slug}" has no excerpt (used as its meta description)`);
    if (!post.coverImage) problems.push(`"${post.slug}" has no coverImage (used as its og:image)`);
  }

  return problems;
}

async function main() {
  let posts;

  try {
    posts = await fetchPostsFromSheet(readSheetUrl());
    if (posts.length === 0) throw new Error('sheet returned no usable rows');
  } catch (err) {
    if (fs.existsSync(snapshotPath)) {
      const existing = JSON.parse(fs.readFileSync(snapshotPath, 'utf8'));
      console.warn(`[blog] WARNING: could not reach the blog sheet (${err.message}).`);
      console.warn(`[blog] Reusing the committed snapshot: ${existing.length} post(s). New rows will NOT be published by this build.`);
      return;
    }
    console.error(`[blog] failed: ${err.message}`);
    console.error('[blog] No committed snapshot to fall back on — cannot build.');
    process.exit(1);
  }

  const problems = validate(posts);
  if (problems.length > 0) {
    console.warn('[blog] content warnings:');
    for (const problem of problems) console.warn(`[blog]   - ${problem}`);
  }

  fs.writeFileSync(snapshotPath, `${JSON.stringify(posts, null, 2)}\n`);

  console.log(`[blog] snapshot written: ${posts.length} post(s) -> ${path.relative(rootDir, snapshotPath)}`);
  for (const post of posts) {
    console.log(`[blog]   ${post.dateISO ?? '????-??-??'}  /blog/${post.slug}  (${post.wordCount} words)`);
  }
}

main().catch((err) => {
  console.error('[blog] failed:', err);
  process.exit(1);
});
