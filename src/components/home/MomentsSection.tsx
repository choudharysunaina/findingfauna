import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeading from '../ui/SectionHeading';
import ResponsiveImage from '../ui/ResponsiveImage';

const MomentsSection = () => {

  const images = [
    '/cheetah.jpg',
    '/leopard.jpg',
    '/hyena.jpg',
    '/cat.jpg',
    '/bear.jpg',
  ];

  
  return (
    <section id="moments" className="section bg-white">

     <div className="container">
        {/* Two-column layout: image left, box right (box partially over image) */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 mt-16">
          {/* Image Column */}
          <div className="flex-[3] w-full max-w-5xl relative">
            <ResponsiveImage
            src="/overlay1.jpg" // Place your image in public/ and use the correct path
              alt="Kuno National Park Moment"
              className="w-full h-[450px] object-cover shadow-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 800px"
            />
            {/* Box overlays image on mobile */}
            <div
              className="lg:hidden absolute left-1/2 transform -translate-x-1/2"
              style={{
                top: '40%',
                width: '60%',
                background: 'rgba(255,255,255,0.92)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                padding: '2rem',
              }}
            >
              <h2 className="text-2xl font-bold mb-4 text-black">Moments from Kuno National Park</h2>
              <p className="text-base text-gray-700 mb-8">
                Experience the unforgettable moments captured at Kuno National Park. From the majestic cheetah to the vibrant wildlife, every visit is a new adventure.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center"
              >
                <Link to="/moments" className="btn-primary">
                  WATCH MORE
                </Link>
              </motion.div>
            </div>
          </div>
          {/* Box Column (shows on desktop, partially overlays image) */}
          <div className="hidden lg:block flex-1 relative " style={{ minWidth: 0 }}>
            <div
              className="absolute right-[1%] top-1/2 transform -translate-y-1/2 bg-gray-50  shadow-xl p-10 h-[350px] flex flex-col justify-center"
              style={{
                width: '550px',
                zIndex: 2,
              }}
            >
              <h2 className="text-3xl font-bold mb-4 text-black">The Only Place to See Wild Cheetahs in India</h2>
              <p className="text-lg text-gray-700 mb-8">
                Kuno National Park is the only place in India to see wild cheetahs—brought back after decades through the landmark “Project Cheetah,” making each sighting a rare and historic moment.
              </p>
            </div>
          </div>
        </div>
      </div>

     <div className="container">
{/* Two-column layout: box left, image right (box partially over image) */}
<div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 mt-16">
  {/* Box Column (shows on desktop, partially overlays image) */}
  <div className="hidden lg:block flex-1 relative" style={{ minWidth: 0 }}>
    <div
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-50 shadow-xl p-10 h-[350px] flex flex-col justify-center"
      style={{
        width: '550px',
        zIndex: 2,
      }}
    >
      <h2 className="text-3xl font-bold mb-4 text-black">Kuno's Giants: India's Biggest Leopards</h2>
      <p className="text-lg text-gray-700 mb-8">
        Kuno National Park is home to some of India’s largest leopards, thriving in its rich habitat. Spotting these elusive predators is a thrilling safari highlight.
      </p>
    </div>
  </div>
  {/* Image Column */}
  <div className="flex-[3] w-full max-w-5xl relative">
    <ResponsiveImage
      src="/overlay2.jpg" // Place your image in public/ and use the correct path
      alt="Kuno National Park Moment"
      className="w-full h-[450px] object-cover shadow-lg"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 800px"
    />
    {/* Box overlays image on mobile */}
    <div
      className="lg:hidden absolute left-1/2 transform -translate-x-1/2"
      style={{
        top: '40%',
        width: '60%',
        background: 'rgba(255,255,255,0.92)',
        boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
        padding: '2rem',
        borderRadius: '1rem',
      }}
    >
      <h2 className="text-2xl font-bold mb-4 text-black">Kuno's Giants: India's Biggest Leopards</h2>
      <p className="text-base text-gray-700 mb-8">
        Kuno National Park is home to some of India’s largest leopards, thriving in its rich habitat. Spotting these elusive predators is a thrilling safari highlight.
      </p>
    </div>
  </div>
</div>
      </div>
        
    </section>
  );
};

export default MomentsSection;