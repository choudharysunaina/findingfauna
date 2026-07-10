import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  ChevronLeft, 
  ChevronRight, 
  Mail, 
  MapPin, 
  Phone, 
  Quote, 
  Send,
  Leaf,
  Calendar,
  Camera,
  Users,
  CheckCircle,
  XCircle,
  Clock,
  DollarSign,
  Eye,
  Bed,
  Utensils,
  Bus,
  Ticket,
  Car,
  Plane,
  Shield,
  WineIcon,
  ShoppingBag,
  Heart,
  ArrowRight,
  NotebookPen,
  Dot
} from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import ContactSection from '../components/home/ContactSection';
import TrackedSection from '../components/tracking/TrackedSection';
import TrackedButton from '../components/tracking/TrackedButton';
import AccommodationOptions from '../components/packages/AccommodationOptions';

const GA_CATEGORY = 'pkg_big_cat';

interface ContactFormData {
  name: string;
  email: string;
  country: string;
  message: string;
  phone: string;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

interface TourDay {
  day: number;
  title: string;
  description: string;
  includes: string;
  activities?: string[];
}

interface WildlifeStory {
  title: string;
  description: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Wildlife Photographer',
    company: 'National Geographic',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&h=400',
    text: 'The Kuno National Park experience was absolutely breathtaking. Witnessing cheetahs in their natural habitat was a dream come true. The guides were incredibly knowledgeable and the conservation efforts are truly inspiring.',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Conservation Biologist',
    company: 'Wildlife Conservation Society',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400',
    text: 'This tour exceeded all expectations. The opportunity to see the historic return of cheetahs to India while learning about conservation efforts makes this more than just a safari - it\'s a journey through wildlife history.',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Nature Documentary Filmmaker',
    company: 'BBC Wildlife',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400',
    text: 'The attention to detail and passionate commitment to wildlife conservation made this experience unforgettable. Every moment was carefully planned to maximize wildlife encounters while respecting the natural environment.',
  },
];

const tourDays: TourDay[] = [
  {
    day: 1,
    title: 'Arrival at Gwalior – Transfer to Kuno National Park',
    description: 'Arrival at the park, check-in, and afternoon safari with orientation session.',
    includes: 'Airport transfer, Welcome lunch, First safari',
    activities: [
      'Check-in at your selected accommodation',
      'Enjoy a warm lunch and settle in',
      'Head for your first Evening Safari in Kuno , home to wild African cheetahs',
      'Return for dinner and overnight stay'
    ]
  },
  {
    day: 2,
    title: 'Day 02: Two Safaris, One Wild Day',
    description: 'Morning and afternoon safaris with wildlife photography sessions and expert naturalist guidance.',
    includes: '2 safaris, Photography workshop, All meals',
    activities: [
      'Begin with morning tea, followed by a Morning Safari in Kuno',
      'Breakfast after returning, with time to relax',
      'Lunch at accommodation',
      'Set out again for your Evening Safari, perfect for golden light photography',
      'Return for dinner and overnight rest',
    ]
  },
  {
    day: 3,
    title: 'Day 03: Last Safari in Kuno – Transfer to Madhav',
    description: 'Morning safari followed by local village visit and cultural program with conservation education.',
    includes: 'Safari, Village visit, Cultural evening',
    activities: [
      'Morning tea and your last Kuno safari drive',
      'Breakfast back at accommodation',
      'Transfer to Madhav Tiger Reserve via Taxi',
      'Check-in at accommodation near Madhav by 1:00 PM',
      'Lunch, followed by your first Evening Safari in Madhav—home to tigers and leopards',
      'Return for dinner and overnight stay',
    ]
  },
  {
    day: 4,
    title: 'Day 04: Final Safari – Return to Gwalior',
    description: 'Early morning safari for final wildlife encounters, breakfast, and departure transfer.',
    includes: 'Final safari, Breakfast, Airport transfer',
    activities: [
      'Start with morning tea, then head for your final Madhav Safari',
      'Return for breakfast',
      'Check out by 11:30 AM, followed by drop-off at Gwalior around 1:30 PM',
    ]
  }
];

const wildlifeStories: WildlifeStory[] = [
  {
    title: "Cheetahs Return to India: A Historic First Glimpse",
    description: "We proudly captured India's first wild cheetah photos—a milestone in conservation showcasing these majestic animals in their natural home.",
    image: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?auto=format&fit=crop&w=600&h=400",
  },
  {
    title: "Rare Melanistic Indian Gray Wolf Puppies Spotted",
    description: "An extraordinary discovery—capturing the rare black-furred wolf pups thriving in the wild was a breathtaking experience.",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600&h=400",
  },
  {
    title: "Rare Melanistic Jungle Cat Captured in Kuno",
    description: "A remarkable discovery of this elusive, dark-coated jungle cat reveals the hidden marvels of India's forests.",
    image: "https://images.unsplash.com/photo-1573160103600-a9e57eb97ea1?auto=format&fit=crop&w=600&h=400",
  },
  {
    title: "Indian Rock Python Hatchlings Spotted",
    description: "A rare glimpse of hatchlings emerging—offering a powerful reminder of nature's delicate balance and the wonder of new life.",
    image: "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=600&h=400",
  },
];

const accommodationOptions = [
  {
    id: "homestay",
    type: "Budget-Friendly Local Stay",
    subtitle: "Comfortable & Affordable",
    features: [
      "Clean, comfortable rooms with basic amenities",
      "Local homestay experience with fresh home-cooked meals",
      "Perfect access to both Tiktoli and Ahera zones of Kuno",
      "Exclusive vehicle, guide arrangements and photography guidance",
    ],
    tags: ["Budget Travelers", "Solo Travelers", "Cultural Experience"],
    image: `${import.meta.env.BASE_URL}packages/homestay.webp`,
    price: "₹32,000"
  },
  {
    id: "resort",
    type: "Premium Safari Lodge",
    subtitle: "Luxury & Comfort",
    features: [
      "Premium rooms with modern amenities",
      "Professional chefs preparing local and international cuisine",
      "Spa & Wellness: Relaxation facilities after exciting safari days",
      "Exclusive vehicle, guide arrangements and photography guidance",
    ],
    tags: ["Luxury Travelers", "Couples", "Families"],
    image: `${import.meta.env.BASE_URL}packages/fort.webp`,
    price: "₹40,000"
  }
];

const BigCatSafariPackage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>();

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };
  const itineraryRef = useRef<HTMLDivElement>(null); // Create a reference for the Detailed Itinerary section

  const scrollToItinerary = () => {
    itineraryRef.current?.scrollIntoView({ behavior: 'smooth' }); // Scroll to the section smoothly
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <TrackedSection category={GA_CATEGORY} label="hero" className="relative bg-white py-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Content Column */}
            <div className="space-y-8">
              <div className="space-y-6 pt-6">              
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                >
                  3 Big Cats Safari
                  <span className="text-forest-600 block">3N/4D Package</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                >
                  Discover the untamed beauty with Safari experience of Kuno and Madhav National Park. Spot Cheetahs, Tigers and Leopards. Capture rare wildlife moments, including birds.
                </motion.p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center text-gray-600">
                  <Calendar className="text-forest-500 mr-2" size={20} />
                  <span className="font-medium">4 Days / 3 Nights</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Camera className="text-forest-500 mr-2" size={20} />
                  <span className="font-medium">6 Safari Sessions</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="text-forest-500 mr-2" size={20} />
                  <span className="font-medium">Expert Guides</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <TrackedButton category={GA_CATEGORY} label="get_details" className="btn-primary" onClick={scrollToItinerary}>
                  Get details
                </TrackedButton>
              </motion.div>
            </div>
            
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative"
            >
              <img
                src={`${import.meta.env.BASE_URL}home/3bigcats.webp`}
                alt="Cheetah in Kuno National Park"
                fetchpriority="high"
                decoding="async"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-forest-600">5+</div>
                    <div className="text-sm text-gray-500">Tigers</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-forest-600">200+</div>
                    <div className="text-sm text-gray-500">Leopards</div>
                  </div>
                    <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-forest-600">25+</div>
                    <div className="text-sm text-gray-500">Cheetahs</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </TrackedSection>


      {/* Detailed Itinerary */}
      <TrackedSection category={GA_CATEGORY} label="itinerary" className="section bg-gray-50">
        <div className="container" ref={itineraryRef}>
          <SectionHeading
            title="Detailed Itinerary"
            subtitle="Experience the perfect blend of wildlife exploration, cultural immersion, and conservation education across four unforgettable days."
            center
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Itinerary Timeline */}
            <div className="space-y-2">
              {tourDays.map((day, index) => (
                <motion.div
                  key={day.day}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="w-6 h-12 forest-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {day.day}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {day.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">
                        {day.description}
                      </p>
                      <div className="flex items-center text-sm text-forest-600">
                        <ul className='space-y-1'>
                          {day.activities.map((activity, index) => (
                            <li key={index}  className="flex items-center">
                              <Dot className="text-forest-500 mr-3" size={20} />
                              <span className="text-gray-700">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Package Details */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <CheckCircle className="text-green-500 mr-3" size={24} />
                  Package Inclusions
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Eye className="text-forest-500 mr-3 mt-1" size={20} />
                    <ul className="text-gray-700">
                      <li>4 open gypsy safaris in Kuno National Park</li>
                      <li>2 open gypsy safaris in Madhav National Park</li>
                    </ul>
                  </li>
                  <li className="flex items-start">
                    <Bed className="text-forest-500 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">3 nights comfortable accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <Utensils className="text-forest-500 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">All meals during the tour</span>
                  </li>
                  <li className="flex items-start">
                    <Bus className="text-forest-500 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">Professional naturalist guide with experience</span>
                  </li>
                  <li className="flex items-start">
                    <Ticket className="text-forest-500 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">National park entrance fees, permits, guide, gypsy and taxes</span>
                  </li>
                  <li className="flex items-start">
                    <Car className="text-forest-500 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">Pickup & drop from Gwalior (by taxi)</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-red-50 rounded-xl p-8 border border-red-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <XCircle className="text-red-500 mr-3" size={24} />
                  Not Included
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <XCircle className="text-red-400 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">International/domestic airfare</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="text-red-400 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">Personal travel insurance</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="text-red-400 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">Alcoholic beverages</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="text-red-400 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">Personal shopping expenses</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="text-red-400 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">Tips and gratuities</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="text-red-400 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">Extra meals/snacks</span>
                  </li>
                   <li className="flex items-start">
                    <XCircle className="text-red-400 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">Extra safaris and camera charges</span>
                  </li>
                  </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </TrackedSection>

            {/* Accommodation and Package Cost Section */}
      <AccommodationOptions
        category={GA_CATEGORY}
        title="Accommodation Options & Package Cost"
        subtitle="Choose the accommodation style that best suits your adventure preferences and budget."
        options={accommodationOptions}
      />

     {/* Contact Section */}
      <ContactSection/>

    </div>
  );
};

export default BigCatSafariPackage;

