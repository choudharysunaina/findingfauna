import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Link } from 'react-router-dom';

const ExperienceSection = () => {
  const benefits = [
    'Creative and innovative design solutions',
    'Expert team with diverse skill sets',
    'Collaborative approach to projects',
    'Dedicated to meeting client goals',
    'Commitment to quality and excellence',
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading title="Kuno Safari Experience:">
              <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-600 mb-6"
            >
            </motion.p>
            </SectionHeading>

           

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-neutral-600 mb-6"
            >
              See It Before You Feel It
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link to="/about" className="btn-primary">
                Watch More
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
           <div className="relative z-10 rounded-lg overflow-hidden shadow-xl group">
            {/* Video Thumbnail */}
            <img
                src={`${import.meta.env.BASE_URL}more_info.jpg`}
                alt="Kuno Safari Experience Video"
                className="w-full h-auto object-cover cursor-pointer transition-opacity duration-300 group-hover:opacity-80"
            />
            {/* Play Button Overlay */}
            <button
                className="absolute inset-0 flex items-center justify-center text-white text-5xl bg-black bg-opacity-40 transition group-hover:bg-opacity-60"
                aria-label="Play Video"
                onClick={() => window.open('https://www.youtube.com/@findingfauna', '_blank')}
                style={{ outline: 'none', border: 'none' }}
            >
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.6)" />
                <polygon points="26,20 48,32 26,44" fill="white" />
                </svg>
            </button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-primary-200 rounded-full opacity-50 z-0"></div>
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-40 h-40 bg-secondary-200 rounded-full opacity-50 z-0"></div>
            
            {/* Stats card */}
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-lg shadow-lg z-20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">100+</p>
                  <p className="text-sm text-neutral-600">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">10+</p>
                  <p className="text-sm text-neutral-600">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;