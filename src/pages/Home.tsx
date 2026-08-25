import HeroSection from '../components/home/HeroSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';
import MoreInfo from '../components/home/MoreInfo';
import SpecializedPackages from '../components/home/SpecializedPackages';
import ExperienceSection from '../components/home/Experiences';
import SurpriseSection from '../components/home/SurpriseSection';
import MomentsSection from '../components/home/MomentsSection';
import PlanningSection from '../components/home/PlanningSection';
import { Helmet } from 'react-helmet-async';
import SEOHead from '../components/ui/SEOHead';
import { generateCanonicalUrl, generateReviewSchema } from '../utils/seoUtils';
import { testimonials } from '../data/testimonials';

const Home = () => {
  return (
    <>
      <SEOHead
        title="Kuno Cheetah Safari Booking — Prices, Zones & Timings"
        description="Book a naturalist-led cheetah safari in Kuno National Park, India's only free-ranging cheetah landscape. 4D/3N packages from ₹28,000, Gypsy permits and Gwalior transfers included."
        canonical={generateCanonicalUrl('/')}
        ogImage="/home/cheetah.webp"
        ogImageAlt="Wild cheetah in the grasslands of Kuno National Park, Madhya Pradesh"
        ogType="website"
        structuredData={generateReviewSchema(
          testimonials.map((t) => ({ author: t.name, rating: t.rating, reviewBody: t.quote }))
        )}
      />
      {/* Homepage-only: the hero video's poster frame is the LCP element here.
          This preload used to sit in index.html, where it made every other
          route fetch an image it never displays. */}
      <Helmet>
        <link rel="preload" as="image" href="/home/home_background2.webp" fetchPriority="high" />
      </Helmet>
      <HeroSection />
      <MoreInfo />
      <SpecializedPackages />
      <ExperienceSection />
      <SurpriseSection />
      <MomentsSection />
      <PlanningSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default Home;