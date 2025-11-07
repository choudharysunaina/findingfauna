import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ResponsiveImage from '../ui/ResponsiveImage';

const HeroSection = () => {
  return (
     <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background GIF */}
      <img
        src="/home_background2.webp"
        alt="Safari Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ pointerEvents: "none" }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          
            <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 text-primary-50">
              Experience <br></br> <span className="text-primary-950">Cheetah Safari</span> in Kuno National Park
            </h1>
            {/*<p className="text-neutral-600 text-lg md:text-xl mb-8 max-w-xl">
              We blend creativity with technology to build websites that captivate audiences and drive results. Let's bring your vision to life.
            </p>*/}
            
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary group">
                Book now
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;