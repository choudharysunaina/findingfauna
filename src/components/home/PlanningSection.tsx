import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import TrackedSection from '../tracking/TrackedSection';
import TrackedLink from '../tracking/TrackedLink';
import { guides } from '../../data/guides';

/**
 * Entry point from the homepage into the planning guides.
 *
 * Without this the guides were reachable only from the nav and footer, so the
 * strongest page on the site passed almost no internal link value to the pages
 * that target the commercial searches. It also answers the questions visitors
 * actually arrive with, in the order they ask them.
 */
const PlanningSection = () => (
  <TrackedSection category="home_planning" label="planning_guides" className="section bg-neutral-50">
    <div className="container">
      <SectionHeading
        title="Planning Your Kuno Safari"
        subtitle="Permits, prices, zones and timings — the things worth knowing before you book, from the team that runs the safaris."
        center
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide, index) => (
          <motion.div
            key={guide.path}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: Math.min(index, 5) * 0.06 }}
          >
            <TrackedLink
              category="home_planning"
              label={`guide_${guide.path.replace(/\//g, '')}`}
              to={guide.path}
              className="group flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 transition-colors hover:border-primary-400"
            >
              <h3 className="flex items-center font-semibold text-lg text-neutral-900 group-hover:text-primary-700">
                {guide.label}
                <ArrowRight
                  size={16}
                  className="ml-1.5 transition-transform group-hover:translate-x-1"
                />
              </h3>
              <p className="mt-2 text-neutral-600">{guide.blurb}</p>
            </TrackedLink>
          </motion.div>
        ))}
      </div>
    </div>
  </TrackedSection>
);

export default PlanningSection;
