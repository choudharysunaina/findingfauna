import { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import TrackedSection from '../tracking/TrackedSection';
import TrackedButton from '../tracking/TrackedButton';
import { testimonials } from '../../data/testimonials';

/**
 * All ten guest reviews, rendered as a grid rather than the one-at-a-time
 * carousel this used to be. The carousel kept nine of the ten out of the DOM,
 * so roughly 1,400 words of genuine guest-written content — the kind of thing
 * search engines weigh most heavily for a service business — was invisible on
 * every crawl. Long reviews are clamped with a "Read full review" toggle, so
 * the full text is present in the HTML while the section stays scannable.
 */
const TestimonialsSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <TrackedSection
      category="home_testimonials"
      label="testimonials"
      className="section bg-gradient-to-b from-white to-primary-50"
    >
      <div className="container">
        <SectionHeading
          title="What Our Guests Say About Their Kuno Safari"
          subtitle="Ten reviews from families, photographers and first-time safari-goers who travelled with us."
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const isExpanded = expanded === testimonial.id;
            const isLong = testimonial.quote.length > 320;

            return (
              <motion.blockquote
                key={testimonial.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: Math.min(index, 5) * 0.06 }}
                className="bg-white rounded-xl shadow-soft p-6 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    loading="lazy"
                    decoding="async"
                    width={48}
                    height={48}
                    src={testimonial.image}
                    alt={`${testimonial.name}, Kuno National Park safari guest`}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary-100 shrink-0"
                  />
                  <div className="min-w-0">
                    <cite className="not-italic font-semibold block truncate">{testimonial.name}</cite>
                    {testimonial.role && (
                      <span className="text-sm text-neutral-500">{testimonial.role}</span>
                    )}
                  </div>
                  <Quote className="ml-auto text-primary-200 shrink-0" size={28} />
                </div>

                <div className="flex gap-0.5 mb-3" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={15} className="text-accent-500 fill-current" />
                  ))}
                </div>

                <p
                  className={`text-neutral-600 italic leading-relaxed ${
                    isLong && !isExpanded ? 'line-clamp-6' : ''
                  }`}
                >
                  {testimonial.quote}
                </p>

                {isLong && (
                  <TrackedButton
                    category="home_testimonials"
                    label={`expand_${testimonial.id}`}
                    onClick={() => setExpanded(isExpanded ? null : testimonial.id)}
                    className="mt-3 self-start text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? 'Show less' : 'Read full review'}
                  </TrackedButton>
                )}
              </motion.blockquote>
            );
          })}
        </div>
      </div>
    </TrackedSection>
  );
};

export default TestimonialsSection;
