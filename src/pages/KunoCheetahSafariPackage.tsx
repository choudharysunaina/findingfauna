import { useState } from 'react';
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
  activities: string[];
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
    title: 'Day 01 : Arrival at Gwalior – Transfer to Pohari',
    description: 'Upon arrival at Gwalior, you will be picked up in a Taxi vehicle and transferred to Pohari, located near the core safari zones of Kuno National Park.',
    includes: 'Airport transfer, Welcome lunch, First safari',
    activities: [
      'Check-in at your selected accommodation by 12:00 PM',
      'Enjoy lunch at your place of stay',
      'Head for your first Evening Safari in Kuno National Park',
      'Return to your accommodation for dinner and overnight stay',
    ]
  },
  {
    day: 2,
    title: 'Day 02 : Morning & Evening Safaris',
    description: 'Morning and afternoon safaris with wildlife photography sessions and expert naturalist guidance.',
    includes: '2 safaris, Photography workshop, All meals',
     activities: [
      'Start the day with morning tea',
      'Depart for an early Morning Safari in Kuno National Park',
      'Return for breakfast at your selected accommodation',
      'Relax and recharge or join an optional photography gear session',
      'Enjoy lunch, followed by an exciting Evening Safari',
      'Return for dinner and overnight stay'
    ]
  },
  {
    day: 3,
    title: 'Day 03 : Wildlife Immersion Continues',
    description: 'Morning safari followed by local village visit and cultural program with conservation education.',
    includes: 'Safari, Village visit, Cultural evening',
     activities: [
      'Head out for Morning Safari in a different zone of the park',
      'Post-safari, return for breakfast',
      'Relax or explore nearby nature trails (optional)',
      'After lunch, enjoy your final Evening Safari.',
      'Return for dinner and overnight stay.',

    ]
  },
  {
    day: 4,
    title: 'Day 04 :Final Safari & Departure',
    description: 'Early morning safari for final wildlife encounters, breakfast, and departure transfer.',
    includes: 'Final safari, Breakfast, Airport transfer',
     activities: [
      'Early morning tea, followed by your last safari drive in Kuno',
      'Return for breakfast',
      'Checkout by 11:00 AM from your selected accommodation',
      'Pickup at 11:30 AM and drop to Gwalior by approx. 1:30 PM'
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
    image: "/resort.png"
  },
  {
    type: "Safari Resort",
    description: "Luxury accommodation with modern amenities while staying close to nature.",
    features: [
      "Luxury Accommodation: Premium rooms with modern amenities",
      "Gourmet Dining: Professional chefs preparing local and international cuisine",
      "Spa & Wellness: Relaxation facilities after exciting safari days",
      "Private Safaris: Exclusive vehicle and guide arrangements",
      "Photography Support: Professional guidance available"
    ],
    image: "/fort.jpg"
  }
];

const KunoCheetahSafariPackage = () => {
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
                  Kuno Cheetah Safari
                  <span className="text-forest-600 block">3N/4D Package</span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                >
                  Experience the thrill of Cheetah Safari at Kuno National Park. Spot India’s reintroduced cheetahs, diverse wildlife, vibrant birdlife, and enjoy guided adventures in nature with unmatched photography opportunities and unforgettable wilderness memories.
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
                <button className="btn-primary">
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
                src="https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?auto=format&fit=crop&w=800&h=600"
                alt="Cheetah in Kuno National Park"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-forest-600">25+</div>
                    <div className="text-sm text-gray-500">Cheetahs</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-forest-600">200+</div>
                    <div className="text-sm text-gray-500">Bird Species</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                   <div className="text-center">
                    <div className="text-2xl font-bold text-forest-600">160+</div>
                    <div className="text-sm text-gray-500">Leopards</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary */}
      <section className="section bg-gray-50">
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
                  <div className="flex items-start space-x-6">
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
                          {index === 0 ? '₹28,000' : '₹37,000'}
                          <span className="text-sm font-normal text-gray-500">/person</span>
                        </p>
                      </div>
                      <button className="btn-primary">
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="What Our Guests Say"
            subtitle="Hear from wildlife enthusiasts who experienced the magic of Kuno National Park with us."
            center
          />
          
          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute -top-10 -left-10 text-forest-500 opacity-20">
                <Quote size={80} />
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 mb-8 relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={testimonials[currentTestimonial].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8"
                  >
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover shadow-lg"
                    />
                    
                    <div className="flex-1 text-center lg:text-left">
                      <div className="mb-6">
                        <Quote className="text-3xl text-forest-500 mb-4 block mx-auto lg:mx-0" size={24} />
                        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed italic">
                          "{testimonials[currentTestimonial].text}"
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-forest-600 font-medium">
                          {testimonials[currentTestimonial].role}
                        </p>
                        <p className="text-gray-500">
                          {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Carousel Controls */}
              <div className="flex justify-center items-center space-x-4">
                <button
                  onClick={handlePrevTestimonial}
                  className="w-12 h-12 forest-600 hover:forest-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <ChevronLeft size={20} />
                </button>
                
                {/* Dot Indicators */}
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentTestimonial ? 'forest-600' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={handleNextTestimonial}
                  className="w-12 h-12 forest-600 hover:forest-700 text-white rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Book Your Wildlife Adventure"
            subtitle="Ready to experience the thrill of cheetah conservation? Get in touch with us to plan your perfect Kuno National Park adventure."
            center
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 forest-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+91 6161671283</p>
                      <p className="text-sm text-gray-500">Available 9 AM - 7 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 forest-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">contact.findingfauna@gmail.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 forest-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Location</h4>
                      <p className="text-gray-600">Kuno National Park</p>
                      <p className="text-sm text-gray-500">Sheopur District, Madhya Pradesh</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Pricing Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-forest-600 to-forest-700 text-white rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4">Package Pricing</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Standard Accommodation</span>
                    <span className="text-2xl font-bold">₹25,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Premium Accommodation</span>
                    <span className="text-2xl font-bold">₹35,000</span>
                  </div>
                  <div className="border-t border-forest-500 pt-4 mt-4">
                    <p className="text-sm opacity-90">*Per person for 3N/4D package</p>
                    <p className="text-sm opacity-90">*Group discounts available</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors duration-200 ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your full name"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors duration-200 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors duration-200 ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your phone number"
                      {...register('phone')}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <select
                      id="country"
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors duration-200 ${
                        errors.country ? 'border-red-500' : 'border-gray-300'
                      }`}
                      {...register('country', { required: 'Country is required' })}
                    >
                      <option value="">Select your country</option>
                      <option value="india">India</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.country && (
                      <p className="mt-1 text-sm text-red-600">{errors.country.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-forest-500 focus:border-forest-500 transition-colors duration-200 resize-none ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your ideal wildlife experience, preferred dates, group size, or any special requirements..."
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message should be at least 10 characters',
                      },
                    })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full forest-600 hover:forest-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Request a callback</span>
                      <NotebookPen size={16} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default KunoCheetahSafariPackage;
