import { useEffect, useState } from 'react';
import { BlogPost, blogData as fallbackPosts } from '../data/blogData';
import { BLOG_SHEET_CSV_URL } from '../config/blogSheet';

function parseCSV(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
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

function rowsToObjects(rows: string[][]): Record<string, string>[] {
  const [header, ...body] = rows;
  if (!header) return [];

  return body
    .filter((r) => r.some((cell) => cell.trim() !== ''))
    .map((r) => {
      const obj: Record<string, string> = {};
      header.forEach((h, idx) => {
        obj[h.trim()] = (r[idx] ?? '').trim();
      });
      return obj;
    });
}

function resolveBlogImage(filename: string): string {
  if (!filename) return '';
  if (filename.startsWith('http')) return filename;
  const base = import.meta.env.BASE_URL || '/';
  // files in public/blog-images/ are stored as .webp; sheet cells may still say .jpg/.png
  const normalized = filename.replace(/^\/+/, '').replace(/\.(jpe?g|png)$/i, '.webp');
  return `${base}blog-images/${normalized}`;
}

function toBlogPost(obj: Record<string, string>): BlogPost {
  return {
    slug: obj.slug,
    title: obj.title,
    category: obj.category,
    author: obj.author,
    date: obj.date,
    readTime: obj.readTime,
    excerpt: obj.excerpt,
    coverImage: resolveBlogImage(obj.coverImage),
    content: obj.content,
    image1: obj.image1 ? resolveBlogImage(obj.image1) : undefined,
    image2: obj.image2 ? resolveBlogImage(obj.image2) : undefined,
    image3: obj.image3 ? resolveBlogImage(obj.image3) : undefined,
    image4: obj.image4 ? resolveBlogImage(obj.image4) : undefined,
    image5: obj.image5 ? resolveBlogImage(obj.image5) : undefined,
    image6: obj.image6 ? resolveBlogImage(obj.image6) : undefined,
    image7: obj.image7 ? resolveBlogImage(obj.image7) : undefined,
    image8: obj.image8 ? resolveBlogImage(obj.image8) : undefined,
    image9: obj.image9 ? resolveBlogImage(obj.image9) : undefined,
    image10: obj.image10 ? resolveBlogImage(obj.image10) : undefined,
    image11: obj.image11 ? resolveBlogImage(obj.image11) : undefined,
    image12: obj.image12 ? resolveBlogImage(obj.image12) : undefined,
    image13: obj.image13 ? resolveBlogImage(obj.image13) : undefined,
    image14: obj.image14 ? resolveBlogImage(obj.image14) : undefined,
    image15: obj.image15 ? resolveBlogImage(obj.image15) : undefined,
    image16: obj.image16 ? resolveBlogImage(obj.image16) : undefined,
    image17: obj.image17 ? resolveBlogImage(obj.image17) : undefined,
    image18: obj.image18 ? resolveBlogImage(obj.image18) : undefined,
    image19: obj.image19 ? resolveBlogImage(obj.image19) : undefined,
    image20: obj.image20 ? resolveBlogImage(obj.image20) : undefined,
  };
}

async function loadPosts(): Promise<BlogPost[]> {
  try {
    if (!BLOG_SHEET_CSV_URL.startsWith('http')) {
      throw new Error('Blog sheet URL not configured');
    }
    const res = await fetch(BLOG_SHEET_CSV_URL, { cache: 'no-store' });
    if (!res.ok) throw new Error(`Failed to fetch blog sheet: ${res.status}`);
    const text = await res.text();
    const posts = rowsToObjects(parseCSV(text))
      .map(toBlogPost)
      .filter((p) => p.slug && p.title);
    return posts.length > 0 ? posts : fallbackPosts;
  } catch (err) {
    console.warn('Falling back to local blog data:', err);
    return fallbackPosts;
  }
}

const CACHE_KEY = 'ff_blog_posts_cache_v1';

function readCache(): BlogPost[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeCache(posts: BlogPost[]) {
  try {
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(posts));
  } catch {
    // storage unavailable or full — safe to skip caching
  }
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>(() => readCache() ?? fallbackPosts);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    let active = true;
    loadPosts().then((fresh) => {
      if (active) {
        setPosts(fresh);
        writeCache(fresh);
        setHasFetched(true);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  return { posts, hasFetched };
}

export interface ContentBlock {
  type: 'paragraph' | 'image';
  text?: string;
  srcs?: string[];
}

export function parseContentBlocks(post: BlogPost): ContentBlock[] {
  const imageMap: Record<string, string | undefined> = {
    '1': post.image1,
    '2': post.image2,
    '3': post.image3,
    '4': post.image4,
    '5': post.image5,
    '6': post.image6,
    '7': post.image7,
    '8': post.image8,
    '9': post.image9,
    '10': post.image10,
  };

  return post.content
    .split(/\n\s*\n/)
    .map((c) => c.trim())
    .filter(Boolean)
    .reduce<ContentBlock[]>((blocks, chunk) => {
      const match = chunk.match(/^\{\{image:(\d{1,2}(?:,\d{1,2}){0,9})\}\}$/);
      if (match) {
        const srcs = match[1]
          .split(',')
          .map((n) => imageMap[n])
          .filter((src): src is string => Boolean(src));
        if (srcs.length > 0) blocks.push({ type: 'image', srcs });
        return blocks;
      }
      blocks.push({ type: 'paragraph', text: chunk });
      return blocks;
    }, []);
}
