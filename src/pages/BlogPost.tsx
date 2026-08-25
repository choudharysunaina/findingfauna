import { motion } from 'framer-motion';
import { useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import {
  getPostBySlug,
  getRelatedPosts,
  parseContentBlocks,
  getTableOfContents,
  slugifyHeading,
} from '../utils/blogPosts';
import { generateBlogPostingSchema, generateBreadcrumbSchema } from '../utils/seoUtils';
import TrackedSection from '../components/tracking/TrackedSection';
import TrackedLink from '../components/tracking/TrackedLink';
import { SITE_URL } from '../config/site';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug);

  // Posts are bundled at build time, so a missing slug is genuinely missing —
  // there is no loading state to wait through any more.
  if (!post) {
    return <Navigate to="/blogs" replace />;
  }

  const morePosts = getRelatedPosts(post.slug);
  const contentBlocks = parseContentBlocks(post);
  const toc = getTableOfContents(post);
  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const breadcrumbs = [
    { name: 'Home', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blogs` },
    { name: post.title, url: canonical },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonical={canonical}
        ogImage={post.coverImage}
        ogImageAlt={post.title}
        ogType="article"
        publishedTime={post.dateISO}
        author={post.author}
        structuredData={[
          generateBlogPostingSchema(post, canonical),
          generateBreadcrumbSchema(breadcrumbs),
        ]}
      />

      {/* Hero */}
      <TrackedSection category="blog_post" label="hero" className="relative h-[50vh] min-h-[360px] flex items-end">
        <img
          fetchPriority="high"
          decoding="async"
          width={1600}
          height={800}
          src={post.coverImage}
          alt={`${post.title} — Kuno National Park`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="container relative z-10 pb-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4"
          >
            {/* Links into the category archive rather than being inert text. */}
            <TrackedLink
              category="blog_post"
              label={`category_${slugifyHeading(post.category)}`}
              to={`/blog/category/${slugifyHeading(post.category)}`}
              className="inline-block rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white transition-colors hover:bg-primary-700"
            >
              {post.category}
            </TrackedLink>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-3xl"
          >
            {post.title}
          </motion.h1>
        </div>
      </TrackedSection>

      {/* Meta bar */}
      <div className="border-b border-neutral-100 bg-neutral-50">
        <div className="container py-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-600">
          <span className="flex items-center">
            <User size={16} className="mr-1.5" />
            {post.author}
          </span>
          <span className="flex items-center">
            <Calendar size={16} className="mr-1.5" />
            <time dateTime={post.dateISO ?? undefined}>{post.date}</time>
          </span>
          <span className="flex items-center">
            <Clock size={16} className="mr-1.5" />
            {post.readTime}
          </span>
        </div>
      </div>

      <div className="container">
        <Breadcrumbs items={breadcrumbs} className="pt-5" />
      </div>

      {/* Content */}
      <TrackedSection category="blog_post" label="content" className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <TrackedLink
              category="blog_post"
              label="back_to_blog"
              to="/blogs"
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors mb-8"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Blog
            </TrackedLink>

            {toc.length > 2 && (
              <nav aria-label="On this page" className="mb-10 rounded-xl border border-neutral-200 bg-neutral-50 p-5">
                <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-3">
                  On this page
                </h2>
                <ol className="space-y-1.5 text-neutral-700">
                  {toc.map((entry) => (
                    <li key={entry.id}>
                      <a href={`#${entry.id}`} className="hover:text-primary-700 transition-colors">
                        {entry.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            )}

            <div className="prose-content">
              {contentBlocks.map((block, index) => {
                // Section heading the image alts below refer back to, so each
                // image describes what it actually shows instead of repeating
                // the post title 18 times.
                const nearestHeading = contentBlocks
                  .slice(0, index)
                  .reverse()
                  .find((b) => b.type === 'heading')?.text;
                const imageContext = nearestHeading ?? post.title;

                if (block.type === 'heading') {
                  const Tag = block.level === 3 ? 'h3' : 'h2';
                  return (
                    <Tag
                      key={index}
                      id={block.id}
                      className={
                        block.level === 3
                          ? 'font-bold text-xl md:text-2xl tracking-tight mt-10 mb-3 scroll-mt-24'
                          : 'font-bold text-2xl md:text-3xl tracking-tight mt-12 mb-4 scroll-mt-24'
                      }
                    >
                      {block.text}
                    </Tag>
                  );
                }

                if (block.type === 'image') {
                  return block.srcs?.length === 1 ? (
                    <motion.figure
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5 }}
                      className="my-8 -mx-4 sm:-mx-6 md:mx-0"
                    >
                      <img
                        loading="lazy"
                        decoding="async"
                        width={1200}
                        height={675}
                        src={block.srcs[0]}
                        alt={`${imageContext} — Kuno National Park, Madhya Pradesh`}
                        className="w-full aspect-[16/9] rounded-xl object-cover"
                      />
                    </motion.figure>
                  ) : (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5 }}
                      className={`my-8 grid gap-3 ${
                        block.srcs && block.srcs.length === 2 ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3'
                      }`}
                    >
                      {block.srcs?.map((src, i) => (
                        <img
                          loading="lazy"
                          decoding="async"
                          width={800}
                          height={800}
                          key={i}
                          src={src}
                          alt={`${imageContext} in Kuno National Park (${i + 1})`}
                          className="w-full aspect-square rounded-xl object-cover"
                        />
                      ))}
                    </motion.div>
                  );
                }

                return (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="text-neutral-700 text-lg mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: block.text ?? '' }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </TrackedSection>

      {/* More posts */}
      {morePosts.length > 0 && (
        <TrackedSection category="blog_post" label="more_posts" className="section bg-neutral-50">
          <div className="container">
            <h2 className="font-bold text-2xl md:text-3xl tracking-tight mb-8 text-center">
              More Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {morePosts.map((p, index) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card overflow-hidden group"
                >
                  <TrackedLink category="blog_post" label={`more_card_${p.slug}`} to={`/blog/${p.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img loading="lazy" decoding="async"
                        src={p.coverImage}
                        alt={p.title}
                        width={600}
                        height={192}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white leading-snug">{p.title}</h3>
                      </div>
                    </div>
                  </TrackedLink>
                  <div className="p-5">
                    <TrackedLink
                      category="blog_post"
                      label={`more_read_${p.slug}`}
                      to={`/blog/${p.slug}`}
                      className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors group"
                    >
                      Read More
                      <ArrowRight className="ml-1.5 group-hover:translate-x-1 transition-transform" size={16} />
                    </TrackedLink>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </TrackedSection>
      )}
    </div>
  );
};

export default BlogPost;
