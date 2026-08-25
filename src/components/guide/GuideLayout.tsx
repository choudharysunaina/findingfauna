import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SEOHead from '../ui/SEOHead';
import Breadcrumbs from '../ui/Breadcrumbs';
import FaqSection, { Faq } from '../ui/FaqSection';
import TrackedSection from '../tracking/TrackedSection';
import TrackedLink from '../tracking/TrackedLink';
import ContactSection from '../home/ContactSection';
import { SITE_URL } from '../../config/site';
import { getGuide, otherGuides } from '../../data/guides';
import {
  generateCanonicalUrl,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from '../../utils/seoUtils';

interface GuideLayoutProps {
  /** Must match a `path` in src/data/guides.ts. */
  path: string;
  /** <title> for this page — keyword-first, brand suffix added if it fits. */
  seoTitle: string;
  seoDescription: string;
  /** The single <h1>. Should contain the target keyword. */
  heading: string;
  /** Standfirst under the H1: one or two sentences of real answer, not a tease. */
  intro: string;
  heroImage: string;
  heroImageAlt: string;
  faqs: Faq[];
  /** GA4 category for tracked sections on this page. */
  category: string;
  children: ReactNode;
}

/**
 * Shared scaffold for the planning guides. Each guide supplies its own copy and
 * gets, consistently: one H1, a visible breadcrumb backed by BreadcrumbList
 * markup, FAQ markup that matches visible <details> content, links to the sibling
 * guides, and the enquiry form as the closing CTA.
 */
const GuideLayout = ({
  path,
  seoTitle,
  seoDescription,
  heading,
  intro,
  heroImage,
  heroImageAlt,
  faqs,
  category,
  children,
}: GuideLayoutProps) => {
  const guide = getGuide(path);
  const canonical = generateCanonicalUrl(path);
  const breadcrumbs = [
    { name: 'Home', url: SITE_URL },
    { name: guide?.label ?? heading, url: canonical },
  ];

  return (
    <div className="bg-white">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        canonical={canonical}
        ogImage={heroImage}
        ogImageAlt={heroImageAlt}
        structuredData={[generateBreadcrumbSchema(breadcrumbs), generateFAQSchema(faqs)]}
      />

      <TrackedSection
        category={category}
        label="hero"
        className="relative flex min-h-[45vh] items-end bg-primary-900"
      >
        <img
          src={heroImage}
          alt={heroImageAlt}
          width={1600}
          height={720}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />
        <div className="container relative z-10 py-12 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl"
          >
            {heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 max-w-3xl text-lg text-neutral-100"
          >
            {intro}
          </motion.p>
        </div>
      </TrackedSection>

      <div className="container">
        <Breadcrumbs items={breadcrumbs} className="pt-5" />
      </div>

      <TrackedSection category={category} label="content" className="section">
        <div className="container">
          <div className="mx-auto max-w-3xl">{children}</div>
        </div>
      </TrackedSection>

      <FaqSection category={category} faqs={faqs} className="section bg-neutral-50" />

      <TrackedSection category={category} label="related_guides" className="section bg-white">
        <div className="container">
          <h2 className="mb-8 text-center font-bold tracking-tight text-2xl md:text-3xl">
            Keep planning your Kuno safari
          </h2>
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {otherGuides(path).map((other) => (
              <TrackedLink
                key={other.path}
                category={category}
                label={`guide_${other.path}`}
                to={other.path}
                className="group rounded-xl border border-neutral-200 p-5 transition-colors hover:border-primary-400"
              >
                <span className="flex items-center font-semibold text-neutral-900 group-hover:text-primary-700">
                  {other.label}
                  <ArrowRight
                    size={16}
                    className="ml-1.5 transition-transform group-hover:translate-x-1"
                  />
                </span>
                <span className="mt-1.5 block text-sm text-neutral-600">{other.blurb}</span>
              </TrackedLink>
            ))}
          </div>
        </div>
      </TrackedSection>

      <ContactSection />
    </div>
  );
};

export default GuideLayout;
