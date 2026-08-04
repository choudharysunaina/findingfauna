import { useRef } from "react";
import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
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
import SEOHead from "../components/ui/SEOHead";
import { packageData } from "../data/packageData";
import { generateSafariPackageSchema } from "../utils/seoUtils";
import { SITE_URL } from "../config/site";

const FIXED_INCLUSIONS = [
  { icon: Bed, text: "3 nights comfortable accommodation" },
  { icon: Utensils, text: "All meals during the tour" },
  { icon: Bus, text: "Professional naturalist guide with experience" },
  { icon: Ticket, text: "National park entrance fees, permits, guide, gypsy and taxes" },
  { icon: Car, text: "Pickup & drop from Gwalior (by taxi)" },
];

const EXCLUSIONS = [
  "International/domestic airfare",
  "Personal travel insurance",
  "Alcoholic beverages",
  "Personal shopping expenses",
  "Tips and gratuities",
  "Extra meals/snacks",
  "Extra safaris and camera charges",
];

const PackageDetailPage = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const pkg = packageData.find((p) => p.id === packageId);
  const itineraryRef = useRef<HTMLDivElement>(null);

  if (!pkg) {
    return <Navigate to="/packages" replace />;
  }

  const scrollToItinerary = () => {
    itineraryRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title={pkg.title}
        description={pkg.description}
        canonical={`${SITE_URL}/package/${pkg.id}`}
        ogImage={pkg.image}
        ogType="product"
        structuredData={generateSafariPackageSchema({
          name: pkg.title,
          description: pkg.description,
          image: pkg.image,
          price: String(pkg.price),
          duration: pkg.duration,
          includes: pkg.features,
          highlights: pkg.highlights,
        })}
      />

      {/* Hero Section */}
      <TrackedSection
        category={pkg.gaCategory}
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
                  {pkg.title}
                  <span className="text-forest-600 block">{pkg.heroTagline}</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-xl text-gray-600 leading-relaxed max-w-2xl"
                >
                  {pkg.heroDescription}
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
                  category={pkg.gaCategory}
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
                src={pkg.image}
                alt={pkg.heroImageAlt}
                fetchPriority="high"
                decoding="async"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  {pkg.heroStats.map((stat, index) => (
                    <div key={stat.label} className="flex items-center">
                      {index > 0 && <div className="w-px h-12 bg-gray-200 mr-4" />}
                      <div className="text-center">
                        <div className="text-2xl font-bold text-forest-600">{stat.value}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </TrackedSection>

      {/* Detailed Itinerary */}
      <TrackedSection category={pkg.gaCategory} label="itinerary" className="section bg-gray-50">
        <div className="container" ref={itineraryRef}>
          <SectionHeading
            title="Detailed Itinerary"
            subtitle="Experience the perfect blend of wildlife exploration, cultural immersion, and conservation education across four unforgettable days."
            center
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Itinerary Timeline */}
            <div className="space-y-8">
              {pkg.tourDays.map((day, index) => (
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
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{day.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4">{day.description}</p>
                      <div className="flex items-center text-sm text-forest-600">
                        <ul className="space-y-1">
                          {day.activities.map((activity, activityIndex) => (
                            <li key={activityIndex} className="flex items-center">
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
                    {pkg.safariInclusionLines.length > 1 ? (
                      <ul className="text-gray-700">
                        {pkg.safariInclusionLines.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-gray-700">{pkg.safariInclusionLines[0]}</span>
                    )}
                  </li>
                  {FIXED_INCLUSIONS.map(({ icon: Icon, text }) => (
                    <li key={text} className="flex items-start">
                      <Icon className="text-forest-500 mr-3 mt-1" size={20} />
                      <span className="text-gray-700">{text}</span>
                    </li>
                  ))}
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
                  {EXCLUSIONS.map((text) => (
                    <li key={text} className="flex items-start">
                      <XCircle className="text-red-400 mr-3 mt-1" size={20} />
                      <span className="text-gray-700">{text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </TrackedSection>

      {/* Accommodation and Package Cost Section */}
      <AccommodationOptions
        category={pkg.gaCategory}
        title="Accommodation Options & Package Cost"
        subtitle="Choose the accommodation style that best suits your adventure preferences and budget."
        options={pkg.accommodationOptions}
      />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default PackageDetailPage;
