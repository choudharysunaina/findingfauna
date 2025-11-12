
import { Link } from 'react-router-dom';
import ResponsiveImage from '../ui/ResponsiveImage';

const MoreInfo = () => {
  return (
    <section className="section bg-neutral-50">
      <div className="container">
      {/* Text Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         <div className="order-2 lg:order-1">
        <h2 className="text-3xl font-bold mb-6">Witness the Indian Cheetah</h2>
        <p className="text-neutral-600 text-lg md:text-s mb-8 max-w-xl">
          Experience the magic of Kuno National Park this winter, where golden grasslands and dense forests set the stage for unforgettable wildlife encounters. As the only place to see cheetahs in India, Kuno offers a truly exclusive cheetah safari, along with sightings of leopards, sloth bears, hyenas, jackals, deer species, and diverse birdlife. Every safari leads you through open meadows, rocky terrains, and lush forests—perfect for breathtaking photography. Located near Ranthambore and Madhav Tiger Reserve, Kuno is among India’s most exciting wildlife destinations. If you’re wondering how to book Kuno safari, now is the time to plan your adventure.
        </p>
       
        <div className="mt-4">
          <Link
            to="/contact"
            className="btn-primary"
          >
            More info
          </Link>
        </div>
         </div>
     

      {/* Image Section */}
      <div className="flex order-1 lg:order-2 relative">
        <ResponsiveImage
          src="/more_info_kb.jpg"
          alt="Kuno National Park Wildlife"
          className="rounded-tl-3xl rounded-bl-3xl shadow-lg object-cover w-full"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
        />
      </div>
       </div>
      </div>
    </section>
  );
};

export default MoreInfo;
