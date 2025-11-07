import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Link } from 'react-router-dom';
import ResponsiveImage from '../ui/ResponsiveImage';
import { useRef } from 'react';

interface PackageCardProps {
  imageUrl: string;
  title: string;
  description: string;
  delay: number;
}

const PackageCard = ({ imageUrl, title, description, delay }: PackageCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="card p-6 flex flex-col items-center h-full"
    >
     <div className="flex flex-1 items-center justify-center">
        <ResponsiveImage
          src={imageUrl}
          alt={`${title} Safari Package`}
          className="w-full h-48 object-cover rounded-t-lg"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 350px, 340px"
        />
      </div>
      <p className="text-xl font-semibold mb-2 mt-4 ">{title}</p>
      <p className="text-neutral-600">{description}</p>
      <Link
        to="/packages"
        className="text-primary-600 font-medium mt-4 flex items-center hover:text-primary-700 transition-colors"
      >
        Book now
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="ml-1"
        >
          <path
            d="M4.16699 10H15.8337"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.8337 5L15.8337 10L10.8337 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </motion.div>
  );
};

const PackagesSection = () => {
  const packages = [
    {
        imageUrl: '/family.jpg',
        title: 'Family',
        description: 'Customized photo-focused itineraries, On-field photography tips and hacks, Dedicated expert guide and driver, Post-processing session after safari'
    },
   {
        imageUrl: '/photographer.jpg',
        title: 'Photographers',
        description: 'Customized best jungle experiences, Expert guide and family driver, Diverse outdoor activities, Detailed Kuno history sessions'
    },
   {
        imageUrl: '/couple.jpg',
        title: 'Couples',
        description: 'Romantic, customized itineraries, Expert guide and private driver, Luxury, intimate accommodations, Serene nature walks'
    }
  ];
  
  return (
    <section id="packages" className="section bg-white">
      <div className="container">
        <SectionHeading
          title="Discover Kuno: Tailored Trips"
          subtitle="For families, couples, or photographers – experience Kuno with custom plans, expert guides, and unforgettable moments in the wild."
          center
        />

    <div className=" relative my-6">
    <div className="overflow-x-auto ">
      <div className="flex gap-6 overflow-x-auto scroll-smooth  justify-center items-center"
       >
        {packages.map((pkge, index) => (
            <div
                key={index}
                className="
                min-w-[85vw] max-w-[85vw] 
                sm:min-w-[350px] sm:max-w-[350px] 
                md:min-w-[300px] md:max-w-[300px] 
                lg:min-w-[340px] lg:max-w-[340px] 
                flex-shrink-0
                "
            >
          <PackageCard
            imageUrl={pkge.imageUrl}
            title={pkge.title}
            description={pkge.description}
            delay={index + 1}
          />
          </div>
        ))}
    </div>

    </div>  
    </div> 

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link to="/packages" className="btn-primary">
            View All Packages
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PackagesSection;