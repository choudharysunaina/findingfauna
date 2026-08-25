import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import ResponsiveImage from '../ui/ResponsiveImage';
import TrackedSection from '../tracking/TrackedSection';
import TrackedLink from '../tracking/TrackedLink';

const handleClick = () => {
  window.scrollTo(0, 0);
};

interface PackageCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  to: string;
  delay: number;
}

const PackageCard = ({
  imageUrl,
  imageAlt,
  title,
  description,
  features,
  price,
  to,
  delay,
}: PackageCardProps) => {
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
          alt={imageAlt}
          width={340}
          height={192}
          className="w-full h-48 object-cover rounded-t-lg"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 350px, 340px"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 mt-4 self-start">{title}</h3>
      <p className="text-neutral-600 self-start">{description}</p>
      <ul className="mt-3 space-y-1.5 self-start text-sm text-neutral-600">
        {features.map((feature) => (
          <li key={feature} className="flex gap-2">
            <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary-500" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 self-start font-semibold text-neutral-900">{price}</p>
      <TrackedLink
        category="home_packages"
        label={`book_now_${title.toLowerCase()}`}
        to={to}
        className="text-primary-600 font-medium mt-2 flex items-center self-start hover:text-primary-700 transition-colors"
      >
        See the itinerary
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
      </TrackedLink>
    </motion.div>
  );
};

const PackagesSection = () => {
  const packages = [
    {
      imageUrl: '/home/family.webp',
      imageAlt: 'Family on a Gypsy safari in Kuno National Park with a naturalist guide',
      title: 'Families',
      description:
        'Four days paced for children as well as adults, with a driver used to travelling with families and a history session on Kuno that keeps older kids genuinely interested.',
      features: [
        'Maximum four guests per Gypsy',
        'Six safari sessions across three nights',
        'Homestay or lodge, all meals included',
      ],
      price: 'From ₹28,000 per person',
      to: '/package/kuno-cheetah-safari-package',
    },
    {
      imageUrl: '/home/photographer.webp',
      imageAlt: 'Wildlife photographer shooting from an open safari vehicle in Kuno National Park',
      title: 'Photographers',
      description:
        'Built around light rather than a schedule. Kuno is unusually open for an Indian forest, which means clean lines of sight — and far fewer vehicles at a sighting.',
      features: [
        'Kuno, Madhav and Chambal in one trip',
        'On-field guidance from working photographers',
        'Post-processing session after the safaris',
      ],
      price: 'From ₹35,000 per person',
      to: '/package/photography-package',
    },
    {
      imageUrl: '/home/couple.webp',
      imageAlt: 'Couple watching the sunset over the grasslands near Kuno National Park',
      title: 'Couples',
      description:
        'A quieter itinerary with an unhurried pace, private transport throughout and time built in for nature walks between drives.',
      features: [
        'Private Gypsy and driver',
        'Premium lodge with spa available',
        'Three big cats on one itinerary',
      ],
      price: 'From ₹32,000 per person',
      to: '/package/big-cat-safari-package',
    },
  ];
  
  return (
    <TrackedSection id="packages" category="home_packages" label="specialized_packages" className="section bg-white">
      <div className="container">
        <SectionHeading
          title="Discover Kuno National Park"
          subtitle="Every trip is four days, three nights and six safari sessions — what changes is the pace, the vehicle arrangements and which parks we cover."
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
            {...pkge}
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
          className="mt-8 text-center"
        >
          <TrackedLink onClick={handleClick} category="home_packages" label="view_all_packages" to="/packages" className="btn-primary">
            View All Packages
          </TrackedLink>
        </motion.div>
      </div>
    </TrackedSection>
  );
};

export default PackagesSection;
