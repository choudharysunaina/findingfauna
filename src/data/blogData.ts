// Shape of one row of the blog sheet, after scripts/fetch-blog.mjs has
// normalised it into src/data/blogSnapshot.json. Post content itself lives in
// the sheet (see src/config/blogSheet.ts) — there is deliberately no hard-coded
// post list here any more: the three placeholder posts that used to live in
// this file outlived their sheet rows and left three URLs in the sitemap that
// redirected to /blogs, which crawlers read as soft-404s.
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: string;
  /** Human-readable date exactly as typed in the sheet, e.g. "July 4, 2026". */
  date: string;
  /** YYYY-MM-DD derived from `date` at build time; null if it could not be parsed. */
  dateISO: string | null;
  readTime: string;
  /** Approximate prose word count, for BlogPosting.wordCount. */
  wordCount: number;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  image7?: string;
  image8?: string;
  image9?: string;
  image10?: string;
  image11?: string;
  image12?: string;
  image13?: string;
  image14?: string;
  image15?: string;
  image16?: string;
  image17?: string;
  image18?: string;
  image19?: string;
  image20?: string;
}
