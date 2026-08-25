// Google-Sheet blog CMS reader, shared by the build scripts.
//
// This is the ONLY place the sheet is parsed. `scripts/fetch-blog.mjs` runs it
// at build time and writes src/data/blogSnapshot.json, which is what the app
// bundles and what the prerenderer therefore captures into static HTML. The
// browser never talks to docs.google.com, so the prerendered markup and what a
// real visitor sees are always byte-identical (they used to diverge, which is
// why no blog post was ever indexed).
//
// Sheet format is documented in src/config/blogSheet.ts.

const MAX_IMAGES = 20;

export function parseCSV(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  let i = 0;

  while (i < text.length) {
    const char = text[i];

    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i++;
        continue;
      }
      field += char;
      i++;
      continue;
    }

    if (char === '"') {
      inQuotes = true;
      i++;
      continue;
    }
    if (char === ',') {
      row.push(field);
      field = '';
      i++;
      continue;
    }
    if (char === '\r') {
      i++;
      continue;
    }
    if (char === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
      i++;
      continue;
    }
    field += char;
    i++;
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows;
}

export function rowsToObjects(rows) {
  const [header, ...body] = rows;
  if (!header) return [];

  return body
    .filter((r) => r.some((cell) => cell.trim() !== ''))
    .map((r) => {
      const obj = {};
      header.forEach((h, idx) => {
        obj[h.trim()] = (r[idx] ?? '').trim();
      });
      return obj;
    });
}

// public/blog-images/ holds .webp only; sheet cells may still name .jpg/.png.
function resolveBlogImage(filename) {
  if (!filename) return '';
  if (filename.startsWith('http')) return filename;
  const normalized = filename.replace(/^\/+/, '').replace(/\.(jpe?g|png)$/i, '.webp');
  return `/blog-images/${normalized}`;
}

// Sheet dates are human strings ("July 4, 2026"). Schema.org datePublished and
// sitemap <lastmod> both need ISO-8601, so derive it once here rather than
// re-parsing a display string in three different places at runtime.
export function toISODate(value) {
  if (!value) return null;
  const parsed = new Date(`${value} UTC`);
  if (Number.isNaN(parsed.getTime())) return null;
  return parsed.toISOString().slice(0, 10);
}

// Rough word count of the prose, used for BlogPosting.wordCount. Strips the
// {{image:n}} placement markers and any inline HTML the sheet allows.
function countWords(content) {
  return content
    .replace(/\{\{image:[\d,]+\}\}/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
}

export function toBlogPost(obj) {
  const post = {
    slug: obj.slug,
    title: obj.title,
    category: obj.category,
    author: obj.author,
    date: obj.date,
    dateISO: toISODate(obj.date),
    readTime: obj.readTime,
    excerpt: obj.excerpt,
    coverImage: resolveBlogImage(obj.coverImage),
    content: obj.content,
    wordCount: countWords(obj.content ?? ''),
  };

  for (let n = 1; n <= MAX_IMAGES; n++) {
    const cell = obj[`image${n}`];
    if (cell) post[`image${n}`] = resolveBlogImage(cell);
  }

  return post;
}

export async function fetchPostsFromSheet(csvUrl) {
  if (!csvUrl || !csvUrl.startsWith('http')) {
    throw new Error('BLOG_SHEET_CSV_URL is not configured');
  }

  const res = await fetch(csvUrl, { cache: 'no-store', redirect: 'follow' });
  if (!res.ok) {
    throw new Error(`Blog sheet fetch failed: HTTP ${res.status}`);
  }

  const posts = rowsToObjects(parseCSV(await res.text()))
    .map(toBlogPost)
    .filter((p) => p.slug && p.title && p.content);

  // Newest first, so /blogs features the most recent post and the sitemap
  // reads in a sensible order. Undated rows sink to the bottom.
  posts.sort((a, b) => (b.dateISO ?? '').localeCompare(a.dateISO ?? ''));

  return posts;
}
