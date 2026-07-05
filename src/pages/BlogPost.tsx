import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, ArrowRight } from 'lucide-react';
import SEOHead from '../components/ui/SEOHead';
import Loader from '../components/ui/Loader';
import { useBlogPosts, parseContentBlocks } from '../utils/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { posts, hasFetched } = useBlogPosts();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Finding Fauna`;
    }
  }, [post]);

  if (!post) {
    return hasFetched ? <Navigate to="/blogs" replace /> : <Loader />;
  }

  const morePosts = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const contentBlocks = parseContentBlocks(post);

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        canonical={`https://kunosafari.com/blog/${post.slug}`}
        ogImage={post.coverImage}
        ogType="article"
      />

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[360px] flex items-end">
        <img
          src={post.coverImage}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="container relative z-10 pb-10 text-white">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4"
          >
            {post.category}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-3xl"
          >
            {post.title}
          </motion.h1>
        </div>
      </section>

      {/* Meta bar */}
      <div className="border-b border-neutral-100 bg-neutral-50">
        <div className="container py-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-600">
          <span className="flex items-center">
            <User size={16} className="mr-1.5" />
            {post.author}
          </span>
          <span className="flex items-center">
            <Calendar size={16} className="mr-1.5" />
            {post.date}
          </span>
          <span className="flex items-center">
            <Clock size={16} className="mr-1.5" />
            {post.readTime}
          </span>
        </div>
      </div>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blogs"
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors mb-8"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Blog
            </Link>

            <div className="prose-content">
              {contentBlocks.map((block, index) =>
                block.type === 'image' ? (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5 }}
                    className={`my-8 grid gap-3 ${
                      block.srcs?.length === 3
                        ? 'grid-cols-3'
                        : block.srcs?.length === 2
                        ? 'grid-cols-2'
                        : 'grid-cols-1 max-w-sm mx-auto'
                    }`}
                  >
                    {block.srcs?.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={post.title}
                        className="w-full h-44 md:h-56 rounded-xl object-cover"
                      />
                    ))}
                  </motion.div>
                ) : (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="text-neutral-700 text-lg mb-6 leading-relaxed"
                  >
                    {block.text}
                  </motion.p>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* More posts */}
      {morePosts.length > 0 && (
        <section className="section bg-neutral-50">
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
                  <Link to={`/blog/${p.slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={p.coverImage}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white leading-snug">{p.title}</h3>
                      </div>
                    </div>
                  </Link>
                  <div className="p-5">
                    <Link
                      to={`/blog/${p.slug}`}
                      className="text-primary-600 font-medium flex items-center hover:text-primary-700 transition-colors group"
                    >
                      Read More
                      <ArrowRight className="ml-1.5 group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
