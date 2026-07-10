import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Calendar,
  Camera,
  Users,
  CheckCircle,
  XCircle,
  Eye,
  Bed,
  Utensils,
  Bus,
  Ticket,
  Car,
  Dot,
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import ContactSection from "../components/home/ContactSection";
import TrackedSection from "../components/tracking/TrackedSection";
import TrackedButton from "../components/tracking/TrackedButton";
import AccommodationOptions from "../components/packages/AccommodationOptions";

const GA_CATEGORY = "pkg_kuno_cheetah";

interface TourDay {
  day: number;
  title: string;
  description: string;
  includes: string;
  activities: string[];
}

const tourDays: TourDay[] = [
  {
    day: 1,
    title: "Day 01 : Arrival at Gwalior – Transfer to Pohari",
    description:
      "Upon arrival at Gwalior, you will be picked up in a Taxi vehicle and transferred to Pohari, located near the core safari zones of Kuno National Park.",
    includes: "Airport transfer, Welcome lunch, First safari",
    activities: [
      "Check-in at your selected accommodation by 12:00 PM",
      "Enjoy lunch at your place of stay",
      "Head for your first Evening Safari in Kuno National Park",
      "Return to your accommodation for dinner and overnight stay",
    ],
  },
  {
    day: 2,
    title: "Day 02 : Morning & Evening Safaris",
    description:
      "Morning and afternoon safaris with wildlife photography sessions and expert naturalist guidance.",
    includes: "2 safaris, Photography workshop, All meals",
    activities: [
      "Start the day with morning tea",
      "Depart for an early Morning Safari in Kuno National Park",
      "Return for breakfast at your selected accommodation",
      "Relax and recharge or join an optional photography gear session",
      "Enjoy lunch, followed by an exciting Evening Safari",
      "Return for dinner and overnight stay",
    ],
  },
  {
    day: 3,
    title: "Day 03 : Wildlife Immersion Continues",
    description:
      "Morning safari followed by local village visit and cultural program with conservation education.",
    includes: "Safari, Village visit, Cultural evening",
    activities: [
      "Head out for Morning Safari in a different zone of the park",
      "Post-safari, return for breakfast",
      "Relax or explore nearby nature trails (optional)",
      "After lunch, enjoy your final Evening Safari.",
      "Return for dinner and overnight stay.",
    ],
  },
  {
    day: 4,
    title: "Day 04 : Final Safari & Departure",
    description:
      "Early morning safari for final wildlife encounters, breakfast, and departure transfer.",
    includes: "Final safari, Breakfast, Airport transfer",
    activities: [
      "Early morning tea, followed by your last safari drive in Kuno",
      "Return for breakfast",
      "Checkout by 11:00 AM from your selected accommodation",
      "Pickup at 11:30 AM and drop to Gwalior by approx. 1:30 PM",
    ],
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
    price: "₹28,000",
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
    price: "₹37,000",
  },
];

const KunoCheetahSafariPackage = () => {
  const itineraryRef = useRef<HTMLDivElement>(null); // Create a reference for the Detailed Itinerary section

  const scrollToItinerary = () => {
    itineraryRef.current?.scrollIntoView({ behavior: "smooth" }); // Scroll to the section smoothly
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <TrackedSection
        category={GA_CATEGORY}
        label="hero"
        className="relative bg-white py-8"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Content Column */}
            <div className="space-y-8">
              <div className="space-y-6 pt-4">
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
                  Experience the thrill of Cheetah Safari at Kuno National Park.
                  Spot India’s reintroduced cheetahs, diverse wildlife, vibrant
                  birdlife, and enjoy guided adventures in nature with unmatched
                  photography opportunities and unforgettable wilderness
                  memories.
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
                <TrackedButton
                  category={GA_CATEGORY}
                  label="get_details"
                  className="btn-primary"
                  onClick={scrollToItinerary}
                >
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
                src={`${import.meta.env.BASE_URL}packages/cheetah-package.webp`}
                alt="Cheetah in Kuno National Park"
                fetchpriority="high"
                decoding="async"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-forest-600">
                      25+
                    </div>
                    <div className="text-sm text-gray-500">Cheetahs</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-forest-600">
                      200+
                    </div>
                    <div className="text-sm text-gray-500">Bird Species</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-forest-600">
                      160+
                    </div>
                    <div className="text-sm text-gray-500">Leopards</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </TrackedSection>

      {/* Detailed Itinerary */}
      <TrackedSection
        category={GA_CATEGORY}
        label="itinerary"
        className="section bg-gray-50"
      >
        <div className="container" ref={itineraryRef}>
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
                        <ul className="space-y-1">
                          {day.activities.map((activity, index) => (
                            <li key={index} className="flex items-center">
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
                    <span className="text-gray-700">
                      6 open Gypsy cheetah tracking safaris in Kuno National
                      Park
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Bed className="text-forest-500 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">
                      3 nights comfortable accommodation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Utensils className="text-forest-500 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">
                      All meals during the tour
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Bus className="text-forest-500 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">
                      Professional naturalist guide with experience
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Ticket className="text-forest-500 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">
                      National park entrance fees, permits, guide, gypsy and
                      taxes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Car className="text-forest-500 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">
                      Pickup & drop from Gwalior (by taxi)
                    </span>
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
                    <span className="text-gray-700">
                      International/domestic airfare
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="text-red-400 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">
                      Personal travel insurance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="text-red-400 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">Alcoholic beverages</span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="text-red-400 mr-3 mt-1" size={20} />
                    <span className="text-gray-700">
                      Personal shopping expenses
                    </span>
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
                    <span className="text-gray-700">
                      Extra safaris and camera charges
                    </span>
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
      <ContactSection />
    </div>
  );
};

export default KunoCheetahSafariPackage;
