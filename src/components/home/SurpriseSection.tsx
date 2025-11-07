import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import ResponsiveImage from '../ui/ResponsiveImage';

interface SurpriseCardProps {
  icon: string;
  title: string;
  description: string;
  delay: number;
}


  const images = [
    '/cheetah.jpg',
    '/leopard.jpg',
    '/hyena.jpg',
    '/wilddog.jpg',
    '/bear.jpg',
  ];

const SurpriseSection = () => {

  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <SectionHeading
          title="Kuno Safari Surprises: Who Will You Meet?"
          subtitle="Get ready for an adventure! When you go on a jungle safari in Kuno, keep your eyes open. You might see some really cool animals."
          center
        />
    <div className="container">

        {/* 2-column image section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
          {/* First column: 1 large image */}
          <div className="flex items-center justify-center">
            <ResponsiveImage
              src={images[0]}
              alt="Main Kuno Moment"
              className="w-full h-[550px] object-cover shadow-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
          </div>
          {/* Second column: 4 stacked images */}
          <div className="grid grid-rows-2 grid-cols-2 gap-6 h-[550px]">
            {images.slice(1, 5).map((src, idx) => (
              <ResponsiveImage
                key={idx}
                src={src}
                alt={`Kuno Moment ${idx + 2}`}
                className="w-full h-full object-cover shadow"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
              />
            ))}
          </div>
        </div>

        {/* ...rest of your section (buttons, overlays, etc.) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <Link to="/contact" className="btn-primary">
            Book Now
          </Link>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default SurpriseSection;