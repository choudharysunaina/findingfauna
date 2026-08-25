import blogSnapshot from '../data/blogSnapshot.json';
import { BlogPost } from '../data/blogData';

// Posts come from the build-time snapshot of the Google Sheet
// (scripts/fetch-blog.mjs), not from a fetch in the browser. That matters for
// SEO: the prerenderer captures whatever the app renders, so a runtime fetch
// meant every /blog/* page shipped as an empty shell. Reading the bundled
// snapshot means the static HTML, the prerendered snapshot and what a visitor
// sees are all the same thing.
//
// Publishing a new post is: add the sheet row, then let a build run (a push to
// main, the daily scheduled rebuild, or a manual "Run workflow").
export const blogPosts = blogSnapshot as BlogPost[];

export function getPostBySlug(slug: string | undefined): BlogPost | undefined {
  if (!slug) return undefined;
  return blogPosts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): BlogPost[] {
  const current = getPostBySlug(slug);
  const others = blogPosts.filter((p) => p.slug !== slug);
  if (!current) return others.slice(0, limit);

  // Same category first — keeps "More Stories" topically relevant, which is
  // also a better internal-linking signal than an arbitrary slice.
  const sameCategory = others.filter((p) => p.category === current.category);
  const rest = others.filter((p) => p.category !== current.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export interface BlogCategory {
  name: string;
  slug: string;
  count: number;
}

/**
 * Distinct post categories, derived from the sheet's `category` column. The
 * field was already rendered as a badge on every card; these turn it into a set
 * of archive URLs (/blog/category/:slug) so each topic has its own landing page.
 */
export const blogCategories: BlogCategory[] = Object.values(
  blogPosts.reduce<Record<string, BlogCategory>>((acc, post) => {
    const name = post.category?.trim();
    if (!name) return acc;
    const slug = slugifyHeading(name);
    acc[slug] = { name, slug, count: (acc[slug]?.count ?? 0) + 1 };
    return acc;
  }, {})
).sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

export const getCategoryBySlug = (slug: string | undefined) =>
  slug ? blogCategories.find((c) => c.slug === slug) : undefined;

export const postsInCategory = (name: string) =>
  blogPosts.filter((post) => post.category?.trim() === name);

export interface ContentBlock {
  type: 'paragraph' | 'image' | 'heading';
  text?: string;
  level?: 2 | 3;
  srcs?: string[];
  /** Slug of the heading text, used as the anchor id and for the table of contents. */
  id?: string;
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// The sheet has no heading column, so posts were authored with bold-only
// paragraphs acting as headings. Rendered as <p><b>, they gave every post an
// outline of exactly one <h1> and nothing else. Promote them to real headings:
//
//   "<b>Big Cats of Kuno National Park</b>"  -> <h2>  (section)
//   "1. <b>Devkho Temple</b>"                -> <h2>  (numbered listicle section)
//   "🐆 <b>African Cheetah</b>"              -> <h3>  (emoji-prefixed = nested)
//   "## Any heading"                         -> <h2>  (explicit, for new posts)
//
function asHeading(chunk: string): { level: 2 | 3; text: string } | null {
  const explicit = chunk.match(/^(#{2,3})\s+(.+)$/);
  if (explicit) {
    return { level: explicit[1].length === 2 ? 2 : 3, text: explicit[2].trim() };
  }

  const bold = chunk.match(/^(\S*?)\s*<b>([\s\S]+)<\/b>$/i);
  if (!bold) return null;

  const [, prefix, inner] = bold;
  const text = inner.trim();
  // Reject anything with further markup inside — that is a real paragraph that
  // merely happens to start and end bold.
  if (!text || /<[^>]+>/.test(text)) return null;

  if (prefix === '') return { level: 2, text };
  // "1." / "2)" — a numbered list of top-level sections, as in nearby-places.
  if (/^\d{1,2}[.)]$/.test(prefix)) return { level: 2, text };
  // Anything else non-alphanumeric is decorative (an emoji), marking a
  // subsection of the section above it.
  if (/^[^\p{L}\p{N}]+$/u.test(prefix)) return { level: 3, text };
  return null;
}

export function parseContentBlocks(post: BlogPost): ContentBlock[] {
  const imageMap: Record<string, string | undefined> = {};
  for (let n = 1; n <= 20; n++) {
    imageMap[String(n)] = post[`image${n}` as keyof BlogPost] as string | undefined;
  }

  // Some posts repeat a heading (safari-zones names "Tiktoli Gate" twice).
  // Duplicate ids are invalid HTML and break in-page anchors, so number the
  // repeats: tiktoli-gate, tiktoli-gate-2, ...
  const idCounts = new Map<string, number>();
  const uniqueId = (base: string) => {
    const seen = (idCounts.get(base) ?? 0) + 1;
    idCounts.set(base, seen);
    return seen === 1 ? base : `${base}-${seen}`;
  };

  return post.content
    .split(/\n\s*\n/)
    .map((c) => c.trim())
    .filter(Boolean)
    .reduce<ContentBlock[]>((blocks, chunk) => {
      const imageMatch = chunk.match(/^\{\{image:(\d{1,2}(?:,\d{1,2}){0,9})\}\}$/);
      if (imageMatch) {
        const srcs = imageMatch[1]
          .split(',')
          .map((n) => imageMap[n])
          .filter((src): src is string => Boolean(src));
        if (srcs.length > 0) blocks.push({ type: 'image', srcs });
        return blocks;
      }

      const heading = asHeading(chunk);
      if (heading) {
        blocks.push({
          type: 'heading',
          level: heading.level,
          text: heading.text,
          id: uniqueId(slugifyHeading(heading.text)),
        });
        return blocks;
      }

      blocks.push({ type: 'paragraph', text: chunk });
      return blocks;
    }, []);
}

/** Top-level (h2) headings of a post, for an in-article table of contents. */
export function getTableOfContents(post: BlogPost): { id: string; text: string }[] {
  return parseContentBlocks(post)
    .filter((b): b is ContentBlock & { id: string; text: string } =>
      b.type === 'heading' && b.level === 2 && Boolean(b.id) && Boolean(b.text)
    )
    .map(({ id, text }) => ({ id, text }));
}
