import { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactSection from '../components/home/ContactSection';
import CtaSection from '../components/home/CtaSection';
import MoreInfo from '../components/home/MoreInfo';
import SpecializedPackages from '../components/home/SpecializedPackages';
import ExperienceSection from '../components/home/Experiences';
import SurpriseSection from '../components/home/SurpriseSection';
import MomentsSection from '../components/home/MomentsSection';
import SEOHead from '../components/ui/SEOHead';

const Home = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Kuno National Park Safari | Experience Wild Cheetahs in India';
  }, []);

  return (
    <>
      <SEOHead
        title="Home"
        description="Experience the thrill of spotting wild cheetahs, leopards, and diverse wildlife in Kuno National Park. Book your safari adventure today with expert guides and customized packages."
        keywords="Kuno National Park, Cheetah Safari, Wildlife Safari, Madhya Pradesh, India, Safari Packages, Wildlife Photography, Conservation"
        canonical="https://kunosafari.com"
        ogImage="/cheetah.jpg"
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