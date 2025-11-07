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
  NotebookPen
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
}

interface WildlifeStory {
  title: string;
  description: string;
  image: string;
}

interface AccommodationOption {
  type: string;
  description: string;
  features: string[];
  image: string;
}

interface SafariPackageTemplateProps {
  packageName: string;
  testimonials: Testimonial[];
  tourDays: TourDay[];
  wildlifeStories: WildlifeStory[];
  accommodationOptions: AccommodationOption[];
  heroImage: string;
  heroDescription: string;
}

export const SafariPackageTemplate = ({
  packageName,
  testimonials,
  tourDays,
  wildlifeStories,
  accommodationOptions,
  heroImage,
  heroDescription
}: SafariPackageTemplateProps) => {
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
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Column */}
            <div className="space-y-8">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
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
                  {packageName}
                  <span className="text-blue-600 block">
                    {tourDays.length}D/{tourDays.length - 1}N Package
                  </span>
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                >
                  {heroDescription}
                </motion.p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center text-gray-600">
                  <Calendar className="text-blue-500 mr-2" size={20} />
                  <span className="font-medium">
                    {tourDays.length} Days / {tourDays.length - 1} Nights
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Camera className="text-blue-500 mr-2" size={20} />
                  <span className="font-medium">
                    {tourDays.length * 2}+ Safari Sessions
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="text-blue-500 mr-2" size={20} />
                  <span className="font-medium">Expert Guides</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                  <span>Get details</span>
                  <ArrowRight size={16} />
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
                src={heroImage}
                alt={packageName}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">8+</div>
                    <div className="text-sm text-gray-500">Cheetahs</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">200+</div>
                    <div className="text-sm text-gray-500">Bird Species</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Package Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Package Overview" 
            subtitle="Everything you need to know about your safari adventure"
            center
          />
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-neutral-50 rounded-lg">
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">4 Days / 3 Nights</h3>
              <p className="text-neutral-600">Complete wildlife immersion</p>
            </div>
            <div className="text-center p-6 bg-neutral-50 rounded-lg">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
              <p className="text-neutral-600">Professional naturalists & trackers</p>
            </div>
            <div className="text-center p-6 bg-neutral-50 rounded-lg">
              <Camera className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Photography</h3>
              <p className="text-neutral-600">Capture unforgettable moments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Itinerary */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Detailed Itinerary" 
            subtitle="Experience the perfect blend of wildlife exploration, cultural immersion, and conservation education across unforgettable days."
            center
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
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
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {day.day}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {day.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {day.description}
                      </p>
                      <div className="flex items-center text-sm text-blue-600">
                        <Clock className="mr-2" size={16} />
                        <span>Includes: {day.includes}</span>
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
                    <Eye className="text-blue-500 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">{tourDays.length * 2}+ wildlife safaris in Kuno National Park</span>
                  </li>
                  <li className="flex items-start">
                    <Bed className="text-blue-500 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">{tourDays.length - 1} nights comfortable accommodation</span>
                  </li>
                  <li className="flex items-start">
                    <Utensils className="text-blue-500 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">All meals during the tour (traditional & international cuisine)</span>
                  </li>
                  <li className="flex items-start">
                    <Bus className="text-blue-500 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">Professional naturalist guide with 10+ years experience</span>
                  </li>
                  <li className="flex items-start">
                    <Ticket className="text-blue-500 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">National park entrance fees and permits</span>
                  </li>
                  <li className="flex items-start">
                    <Car className="text-blue-500 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">All transfers as per itinerary in AC vehicles</span>
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
                    <Plane className="text-red-400 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">International/domestic airfare</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="text-red-400 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">Personal travel insurance</span>
                  </li>
                  <li className="flex items-start">
                    <WineIcon className="text-red-400 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">Alcoholic beverages</span>
                  </li>
                  <li className="flex items-start">
                    <ShoppingBag className="text-red-400 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">Personal shopping expenses</span>
                  </li>
                  <li className="flex items-start">
                    <Heart className="text-red-400 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">Tips and gratuities</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Stories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="Wildlife Stories" 
            subtitle="Incredible moments captured in Kuno"
            center
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {wildlifeStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-50 rounded-lg overflow-hidden shadow-sm"
              >
                <img 
                  src={story.image} 
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-neutral-600">{story.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    {/* Accommodation Options Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Accommodation Options"
            subtitle="Choose from our carefully selected accommodation options to complement your wildlife adventure"
            center
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Budget-Friendly Local Stay */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&h=600"
                  alt="Budget-Friendly Local Stay"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-1">Budget-Friendly Local Stay</h3>
                  <p className="text-blue-100 text-sm">Comfortable & Affordable</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Clean, comfortable rooms with basic amenities
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Local homestay experience with authentic cuisine
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Close to park entrance (15-20 minutes drive)
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      24/7 hot water and WiFi
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Perfect For:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Budget Travelers</span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Solo Travelers</span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium">Cultural Experience</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-blue-600">
                    ₹2,500 - ₹4,500
                    <span className="text-sm font-normal text-gray-500">/night</span>
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                  Select Budget Stay
                </button>
              </div>
            </motion.div>

            {/* Premium Safari Lodge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&h=600"
                  alt="Premium Safari Lodge"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-1">Premium Safari Lodge</h3>
                  <p className="text-blue-100 text-sm">Luxury & Comfort</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Luxury cottages with private balconies overlooking wilderness
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Multi-cuisine restaurant and bar with wildlife viewing deck
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Swimming pool, spa, and guided nature walks
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      24/7 room service and concierge
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Perfect For:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Luxury Travelers</span>
                    <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Couples</span>
                    <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Families</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-blue-600">
                    ₹8,000 - ₹15,000
                    <span className="text-sm font-normal text-gray-500">/night</span>
                  </div>
                </div>

                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                  Select Premium Lodge
                </button>
              </div>
            </motion.div>

             {/* Premium Safari Lodge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&h=600"
                  alt="Premium Safari Lodge"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-1">Premium Safari Lodge</h3>
                  <p className="text-blue-100 text-sm">Luxury & Comfort</p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Luxury cottages with private balconies overlooking wilderness
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Multi-cuisine restaurant and bar with wildlife viewing deck
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      Swimming pool, spa, and guided nature walks
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      24/7 room service and concierge
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Perfect For:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Luxury Travelers</span>
                    <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Couples</span>
                    <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">Families</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-blue-600">
                    ₹8,000 - ₹15,000
                    <span className="text-sm font-normal text-gray-500">/night</span>
                  </div>
                </div>

                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                  Select Premium Lodge
                </button>
              </div>
            </motion.div>

            
          </div>
        </div>
      </section>

       {/* Testimonials */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <SectionHeading 
            title="What Our Guests Say" 
            subtitle="Real experiences from real adventurers"
            center
          />
          <div className="relative max-w-4xl mx-auto mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-8 rounded-lg shadow-sm"
              >
                <Quote className="w-8 h-8 text-blue-600 mb-4" />
                <p className="text-lg text-neutral-700 mb-6 italic">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-sm text-neutral-600">
                      {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {testimonials.length > 1 && (
              <div className="flex justify-center mt-6 space-x-4">
                <button
                  onClick={handlePrevTestimonial}
                  className="p-2 bg-white rounded-full shadow-sm hover:bg-neutral-100 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextTestimonial}
                  className="p-2 bg-white rounded-full shadow-sm hover:bg-neutral-100 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Book Your Wildlife Adventure"
            subtitle="Ready to experience the thrill of wildlife conservation? Get in touch with us to plan your perfect adventure."
            center
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600">+91 6161671283</p>
                      <p className="text-sm text-gray-500">Available 9 AM - 7 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">contact.findingfauna@gmail.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
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
                className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-xl p-8"
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
                  <div className="border-t border-blue-500 pt-4 mt-4">
                    <p className="text-sm opacity-90">*Per person for {tourDays.length - 1}N/{tourDays.length}D package</p>
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
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
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 ${
                        errors.country ? 'border-red-500' : 'border-gray-300'
                      }`}
                      {...register('country', { required: 'Country is required' })}
                    >
                      <option value="">Select your country</option>
                      <option value="india">India</option>
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="germany">Germany</option>
                      <option value="france">France</option>
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
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-none ${
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
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
                      <span>Send Message</span>
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