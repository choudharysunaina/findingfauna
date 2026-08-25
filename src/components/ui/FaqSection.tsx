import SectionHeading from './SectionHeading';
import TrackedSection from '../tracking/TrackedSection';

export interface Faq {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: Faq[];
  title?: string;
  subtitle?: string;
  /** GA4 category, e.g. 'packages_page'. */
  category: string;
  className?: string;
}

/**
 * FAQ accordion built on native <details>/<summary>.
 *
 * Deliberately not a React-state accordion: with useState, every answer stays
 * out of the DOM until it is clicked, so a page could ship FAQPage JSON-LD
 * whose answers appeared nowhere in the HTML. Google wants the markup to match
 * visible content, and /kuno-national-park had exactly that mismatch. <details>
 * keeps the full answer text in the prerendered HTML and needs no JavaScript.
 */
const FaqSection = ({
  faqs,
  title = 'Frequently Asked Questions',
  subtitle,
  category,
  className = 'section bg-white',
}: FaqSectionProps) => {
  if (faqs.length === 0) return null;

  return (
    <TrackedSection category={category} label="faqs" className={className}>
      <div className="container">
        <SectionHeading title={title} subtitle={subtitle} center />

        <div className="max-w-3xl mx-auto divide-y divide-neutral-200 rounded-xl border border-neutral-200 bg-white">
          {faqs.map((faq) => (
            <details key={faq.question} className="group px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-neutral-900 marker:content-none">
                <h3 className="text-base md:text-lg">{faq.question}</h3>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-2xl leading-none text-primary-600 transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-neutral-600 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </TrackedSection>
  );
};

export default FaqSection;
