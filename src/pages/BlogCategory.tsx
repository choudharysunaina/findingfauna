import { motion } from 'framer-motion';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import TrackedSection from '../components/tracking/TrackedSection';
import TrackedLink from '../components/tracking/TrackedLink';
import { blogCategories, getCategoryBySlug, postsInCategory } from '../utils/blogPosts';
import { SITE_URL } from '../config/site';
import { generateCanonicalUrl, generateBreadcrumbSchema } from '../utils/seoUtils';

/**
 * Archive page for one blog category.
 *
 * Posts already carried a `category` field, displayed as a badge, but there was
 * nowhere for it to lead. These pages give each topic its own indexable URL and
 * hub — a second internal path into every post, which previously had exactly one
 * (the /blogs listing).
 */
const BlogCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    return <Navigate to="/blogs" replace />;
  }

  const posts = postsInCategory(category.name);
  const canonical = generateCanonicalUrl(`/blog/category/${category.slug}`);
  const breadcrumbs = [
    { name: 'Home', url: SITE_URL },
    { name: 'Blog', url: `${SITE_URL}/blogs` },
    { name: category.name, url: canonical },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={`${category.name} — Kuno Safari Guides`}
        description={`${posts.length} field ${
          posts.length === 1 ? 'guide' : 'guides'
        } on ${category.name.toLowerCase()} at Kuno National Park, written by the naturalists who guide there.`}
        canonical={canonical}
        ogImage={posts[0]?.coverImage}
        ogImageAlt={posts[0]?.title}
        structuredData={generateBreadcrumbSchema(breadcrumbs)}
      />

      <TrackedSection
        category="blog_category"
        label="hero"
        className="bg-gradient-to-br from-primary-900 to-primary-700 py-16 md:py-20"
      >
        <div className="container text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary-200">
            Finding Fauna Journal
          </p>
          <h1 className="font-bold tracking-tight text-3xl md:text-5xl text-white">
            {category.name}
          </h1>
          <p className="mt-4 text-lg text-primary-100">
            {posts.length} {posts.length === 1 ? 'guide' : 'guides'} from Kuno National Park
          </p>
        </div>
      </TrackedSection>

      <div className="container">
        <Breadcrumbs items={breadcrumbs} className="pt-5" />
      </div>

      <TrackedSection category="blog_category" label="posts" className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: Math.min(index, 4) * 0.08 }}
                className="card overflow-hidden group"
              >
                <TrackedLink
                  category="blog_category"
                  label={`card_${post.slug}`}
                  to={`/blog/${post.slug}`}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      loading="lazy"
                      decoding="async"
                      width={600}
                      height={224}
                      src={post.coverImage}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <h2 className="absolute bottom-4 left-4 right-4 text-xl font-bold leading-snug text-white">
                      {post.title}
                    </h2>
                  </div>
                </TrackedLink>
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-3 text-xs text-neutral-500">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      <time dateTime={post.dateISO ?? undefined}>{post.date}</time>
                    </span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <p className="mb-4 text-neutral-600">{post.excerpt}</p>
                  <TrackedLink
                    category="blog_category"
                    label={`read_more_${post.slug}`}
                    to={`/blog/${post.slug}`}
                    className="group flex items-center font-medium text-primary-600 transition-colors hover:text-primary-700"
                  >
                    Read More
                    <ArrowRight
                      className="ml-1.5 transition-transform group-hover:translate-x-1"
                      size={16}
                    />
                  </TrackedLink>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 border-t border-neutral-200 pt-8">
            <h2 className="mb-4 font-semibold text-lg">Other topics</h2>
            <ul className="flex flex-wrap gap-3">
              {blogCategories
                .filter((other) => other.slug !== category.slug)
                .map((other) => (
                  <li key={other.slug}>
                    <Link
                      to={`/blog/category/${other.slug}`}
                      className="inline-block rounded-lg border border-neutral-200 px-4 py-2 text-sm transition-colors hover:border-primary-400 hover:text-primary-700"
                    >
                      {other.name} ({other.count})
                    </Link>
                  </li>
                ))}
              <li>
                <Link
                  to="/blogs"
                  className="inline-block rounded-lg border border-neutral-200 px-4 py-2 text-sm transition-colors hover:border-primary-400 hover:text-primary-700"
                >
                  All guides
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </TrackedSection>
    </div>
  );
};

export default BlogCategory;
