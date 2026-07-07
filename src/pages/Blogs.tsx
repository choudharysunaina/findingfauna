import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import SEOHead from '../components/ui/SEOHead';
import { useBlogPosts } from '../utils/blogPosts';
import TrackedSection from '../components/tracking/TrackedSection';
import TrackedLink from '../components/tracking/TrackedLink';

const Blogs = () => {
  useEffect(() => {
    document.title = 'Blog | Finding Fauna';
  }, []);

  const { posts } = useBlogPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Blog"
        description="Stories, conservation updates, and safari tips from the Finding Fauna team at Kuno National Park."
        canonical="https://kunosafari.com/blogs"
        ogImage={featured.coverImage}
      />

      {/* Hero */}
      <TrackedSection category="blog" label="blogs_hero" className="relative py-20 md:py-28 bg-gradient-to-br from-primary-900 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/home/cheetah.webp')] bg-cover bg-center" aria-hidden="true" />
        <div className="container relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary-200 font-medium tracking-wide uppercase text-sm mb-3"
          >
            Finding Fauna Journal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4"
          >
            Stories from the Wild
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-primary-100 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Conservation updates, safari tips, and field notes from Kuno National Park.
          </motion.p>
        </div>
      </TrackedSection>

      {/* Featured Post */}
      {featured && (
        <TrackedSection category="blog" label="featured_post" className="section pb-0 bg-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="card overflow-hidden grid grid-cols-1 lg:grid-cols-2"
            >
              <div className="relative h-72 lg:h-full min-h-[320px]">
                <img loading="lazy" decoding="async"
                  src={featured.coverImage}
                  alt={featured.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </span>
              </div>
              <div className="p-6 md:p-10 flex flex-col justify-center">
                <span className="text-primary-600 font-semibold text-sm mb-3">
                  {featured.category}
                </span>
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight mb-4">
                  {featured.title}
                </h2>
                <p className="text-neutral-600 text-base md:text-lg mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500 mb-6">
                  <span className="flex items-center">
                    <User size={16} className="mr-1.5" />
                    {featured.author}
                  </span>
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1.5" />
                    {featured.date}
                  </span>
                  <span className="flex items-center">
                    <Clock size={16} className="mr-1.5" />
                    {featured.readTime}
                  </span>
                </div>
                <TrackedLink category="blog" label={`featured_${featured.slug}`} to={`/blog/${featured.slug}`} className="btn-primary group self-start">
                  Read Full Story
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </TrackedLink>
              </div>
            </motion.div>
          </div>
        </TrackedSection>
      )}

      {/* Rest of Posts */}
      <TrackedSection category="blog" label="more_posts" className="section bg-white">
        <div className="container">
          <SectionHeading
            title="More from the Blog"
            subtitle="Field notes, guides, and conservation stories from the Finding Fauna team"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rest.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <TrackedLink category="blog" label={`card_image_${post.slug}`} to={`/blog/${post.slug}`}>
                  <div className="relative h-56 overflow-hidden">
                    <img loading="lazy" decoding="async"
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <span className="absolute top-4 right-4 bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white leading-snug">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                </TrackedLink>
                <div className="p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mb-3">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  <p className="text-neutral-600 mb-4">{post.excerpt}</p>
                  <TrackedLink
                    category="blog"
                    label={`read_more_${post.slug}`}
                    to={`/blog/${post.slug}`}
                    className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors group"
                  >
                    Read More
                    <ArrowRight className="ml-1.5 group-hover:translate-x-1 transition-transform" size={16} />
                  </TrackedLink>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </TrackedSection>
    </div>
  );
};

export default Blogs;
