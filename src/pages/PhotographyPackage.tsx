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
import { Link } from 'react-router-dom';

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
    title: 'Day 01: Arrival in Gwalior – Journey to Kuno',
    description: 'Your wild journey begins with a warm welcome in Gwalior, followed by a comfortable road transfer to Pohari, the gateway to Kuno.',
    includes: 'Airport transfer, Welcome lunch, First safari',
    activities: [
      'Check-in at your selected accommodation',
      'Enjoy a hearty lunch and settle in amidst rustic jungle surroundings',
      'Head out for your first Evening Safari in Kuno National Park',
      'Return for dinner and rest for the night'
    ]
  },
  {
    day: 2,
    title: 'Day 02: A Day in the Wild – Kuno Safaris',
    description: 'Morning and afternoon safaris with wildlife photography sessions and expert naturalist guidance.',
    includes: '2 safaris, Photography workshop, All meals',
      activities: [
      'Start with morning tea, then head for your Morning Safari in Kuno',
      'Return for a refreshing breakfast and short break',
      'Enjoy lunch and prep your gear for another Evening Safari, chasing the golden light',
      'Return for dinner and share stories from the field'
    ]
  },
  {
    day: 3,
    title: 'Day 03: Last Safari in Kuno – Transfer to Madhav',
    description: 'Morning safari followed by local village visit and cultural program with conservation education.',
    includes: 'Safari, Village visit, Cultural evening',
      activities: [
      'Begin with morning tea and depart for Gharial Sanctuary, Palighat',
      'Enjoy a thrilling Gharial Safari, photographing crocodiles, gharials, and river birds',
      'Return for breakfast and prepare for your transfer to Madhav Tiger Reserve',
      'Check in to your accommodation near Madhav by 1:00 PM',
      'Lunch, then get ready for your first Evening Safari in tiger territory',
      'Return to accommodation for dinner and rest'
    ]
  },
  {
    day: 4,
    title: 'Day 04: Final Safari – Return to Gwalior',
    description: 'Early morning safari for final wildlife encounters, breakfast, and departure transfer.',
    includes: 'Final safari, Breakfast, Airport transfer',
      activities: [
      'Early morning tea, followed by your final Safari in Madhav',
      'Return for a wholesome breakfast',
      'Check-out by 11:30 AM',
      'Pickup and drop back to Gwalior by around 1:30 PM, closing your unforgettable wildlife journey'
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
    type: "Budget-Friendly Local Stay",
    description: "Experience authentic rural Madhya Pradesh with comfortable homestays and local hospitality.",
    features: [
      "Budget-Friendly: Affordable safari experience without compromising on thrill",
      "Central Location: Perfect access to both Tiktoli and Ahera zones of Kuno",
      "More Time in the Wild: Less travel time means more time for safaris and photography",
      "Cultural Experience: Stay with locals, eat fresh home-cooked meals",
      "Simple but Comfortable: Clean, quiet, and practical for wilderness lovers"
    ],
    image: `${import.meta.env.BASE_URL}resort.png`
  },
  {
    type: "Safari Resort",
    description: "Luxury accommodation with modern amenities while staying close to nature.",
    features: [
      "Accommodation: Premium rooms with modern amenities",
      "Gourmet Dining: Professional chefs preparing local and international cuisine",
      "Spa & Wellness: Relaxation facilities after exciting safari days",
      "Private Safaris: Exclusive vehicle and guide arrangements",
      "Photography Support: Professional guidance available"
    ],
    image: `${import.meta.env.BASE_URL}fort.jpg`
  }
];

const PhotographyPackage = () => {
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
      <section className="relative bg-white section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="space-y-8">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center px-4 py-2 forest-100 text-forest-600 rounded-full text-sm font-medium"
                >
                  <Leaf className="mr-2" size={16} />
                  Wildlife Conservation Experience
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                >
                  4 in 1 Safari Tour
                  <span className="text-forest-600 block">3N/4D Package</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                >
                  Capture India’s cheetahs, leopards, tigers, and the elusive gharials on this 3 Nights / 4 Days photography tour. Explore Kuno National Park, Palighat Gharial Sanctuary, and Madhav Tiger Reserve through expert-guided safaris, offering rare wildlife encounters, stunning landscapes, and unforgettable photographic opportunities.
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
                <button className="btn-primary" onClick={scrollToItinerary}>
                  Get details
                </button>
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
                src={`${import.meta.env.BASE_URL}4in1.jpg`}
                alt="Cheetah in Kuno National Park"
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
                    <div className="text-2xl font-bold text-forest-600">27+</div>
                    <div className="text-sm text-gray-500">Cheetahs</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Detailed Itinerary */}
      <section className="section bg-gray-50" ref={itineraryRef}>
        <div className="container">
          <SectionHeading
            title="Detailed Itinerary"
            subtitle="Experience the perfect blend of wildlife exploration, cultural immersion, and conservation education across four unforgettable days."
            center
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Itinerary Timeline */}
            <div className="space-y-8">
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
                    <span className="text-gray-700">6 open Gypsy cheetah tracking safaris in Kuno National Park</span>
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
      </section>

      {/* Accommodation and Package Cost Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Accommodation Options & Package Cost"
            subtitle="Choose the accommodation style that best suits your adventure preferences and budget."
            center
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {accommodationOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={option.image}
                    alt={option.type}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {option.type}
                    </h3>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {option.description}
                  </p>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Why Choose This Package?
                    </h4>
                    <ul className="space-y-3">
                      {option.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircle className="text-forest-500 mr-3 mt-1 flex-shrink-0" size={18} />
                          <span className="text-gray-700 text-sm leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Packages starting from</p>
                        <p className="text-2xl font-bold text-forest-600">
                          {index === 0 ? '₹35,000' : '₹40,000'}
                          <span className="text-sm font-normal text-gray-500">/person</span>
                        </p>
                      </div>
                      <Link to="/contact" className="btn-primary">
                        Book now
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


     {/* Contact Section */}
     <ContactSection/>
         
    </div>
  );
};

export default PhotographyPackage;

