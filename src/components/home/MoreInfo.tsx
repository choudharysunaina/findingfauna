
import ImageCarousel from '../ui/ImageCarousel';
import TrackedSection from '../tracking/TrackedSection';
import TrackedLink from '../tracking/TrackedLink';

const carouselImages = [
  {
    src: '/homepagecorousel/1.webp',
    alt: 'Two radio-collared cheetahs resting together in Kuno National Park, Madhya Pradesh',
  },
  {
    src: '/homepagecorousel/2.webp',
    alt: 'Cheetahs walking along a forest safari trail in Kuno National Park',
  },
  {
    src: '/homepagecorousel/3.webp',
    alt: 'Radio-collared cheetah with its kill in the dry forest of Kuno National Park',
  },
  {
    src: '/homepagecorousel/4.webp',
    alt: 'Cheetahs camouflaged in tall monsoon grass at Kuno National Park',
  },
  {
    src: '/homepagecorousel/5.webp',
    alt: 'Cheetah resting beside its prey at dusk in Kuno National Park',
  },
];

const handleClick = () => {
    window.scrollTo(0, 0);
};

const MoreInfo = () => {
  return (
    <TrackedSection category="home_more_info" label="witness_indian_cheetah" className="section bg-neutral-50">
      <div className="container">
      {/* Text Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         <div className="order-2 lg:order-1">
        <h2 className="text-3xl font-bold mb-6">Witness the Indian Cheetah</h2>
        <p className="text-neutral-600 text-lg md:text-s mb-8 max-w-xl">
          Experience the magic of Kuno National Park this winter, where golden grasslands and dense forests set the stage for unforgettable wildlife encounters. As the only place to see cheetahs in India, Kuno offers a truly exclusive cheetah safari, along with sightings of leopards, sloth bears, hyenas, jackals, deer species, and diverse birdlife. Every safari leads you through open meadows, rocky terrains, and lush forests—perfect for breathtaking photography. Located near Ranthambore and Madhav Tiger Reserve, Kuno is among India’s most exciting wildlife destinations. If you’re wondering how to book Kuno safari, now is the time to plan your adventure.
        </p>
       
        <div className="mt-4">
          <TrackedLink onClick={handleClick}
            category="home_more_info"
            label="more_info"
            to="/contact"
            className="btn-primary"
          >
            More info
          </TrackedLink>
        </div>
         </div>
     

      {/* Image Section */}
      <div className="flex order-1 lg:order-2 relative">
        <ImageCarousel
          images={carouselImages}
          className="rounded-3xl shadow-lg w-full h-48 md:h-64 lg:h-[360px]"
        />
      </div>
       </div>
      </div>
    </TrackedSection>
  );
};

export default MoreInfo;
