import HeroSection from '../components/home/HeroSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';
import MoreInfo from '../components/home/MoreInfo';
import SpecializedPackages from '../components/home/SpecializedPackages';
import ExperienceSection from '../components/home/Experiences';
import SurpriseSection from '../components/home/SurpriseSection';
import MomentsSection from '../components/home/MomentsSection';
import SEOHead from '../components/ui/SEOHead';
import { SITE_URL } from '../config/site';

const Home = () => {
  return (
    <>
      <SEOHead
        title="Home"
        description="Experience the thrill of spotting wild cheetahs, leopards, and diverse wildlife in Kuno National Park. Book your safari adventure today with expert guides and customized packages."
        keywords="Kuno National Park, Cheetah Safari, Wildlife Safari, Madhya Pradesh, India, Safari Packages, Wildlife Photography, Conservation"
        canonical={SITE_URL}
        ogImage="/home/cheetah.webp"
        ogType="website"
      />
      <HeroSection />
      <MoreInfo />
      <SpecializedPackages />
      <ExperienceSection />
      <SurpriseSection />
      <MomentsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default Home;