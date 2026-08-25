import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import {
  ChevronRight,
  MapPin,
  Calendar,
  Users,
  Star,
  CheckCircle,
} from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import { packageData, Package } from "../data/packageData";
import ContactSection from "../components/home/ContactSection";
import TrackedSection from "../components/tracking/TrackedSection";
import TrackedLink from "../components/tracking/TrackedLink";
import TrackedButton from "../components/tracking/TrackedButton";
import AccommodationOptions from "../components/packages/AccommodationOptions";
import SEOHead from "../components/ui/SEOHead";
import Breadcrumbs from "../components/ui/Breadcrumbs";
import FaqSection from "../components/ui/FaqSection";
import { SITE_URL } from "../config/site";
import { featuredTestimonials } from "../data/testimonials";
import {
  generateCanonicalUrl,
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateReviewSchema,
} from "../utils/seoUtils";

const breadcrumbs = [
  { name: "Home", url: SITE_URL },
  { name: "Safari Packages", url: `${SITE_URL}/packages` },
];

const faqs = [
  {
    question: "How much does a Kuno safari package cost?",
    answer:
      "Our 4 days / 3 nights packages start at ₹28,000 per person on a budget homestay and ₹37,000 per person at a premium safari lodge. The price covers accommodation, all meals, a professional naturalist, all park permits and Gypsy charges, and return transfers from Gwalior.",
  },
  {
    question: "How many safaris are included in a package?",
    answer:
      "Six safari sessions across the stay. The Cheetah Safari package runs all six inside Kuno National Park; the 3 Big Cat package splits four in Kuno and two in Madhav National Park; the 4 in 1 package covers three in Kuno, two in Madhav and one gharial boat safari at Palighat.",
  },
  {
    question: "How many people share a safari vehicle?",
    answer:
      "A maximum of four guests per Gypsy. Everyone gets a window seat and a clear line of sight, which matters for both photography and spotting.",
  },
  {
    question: "What is not included in the package price?",
    answer:
      "Airfare and travel to Gwalior, travel insurance, alcohol, shopping, tips, meals and snacks beyond the fixed menu, and any extra safaris or professional camera fees you choose to add.",
  },
  {
    question: "Which package should I choose?",
    answer:
      "Pick the Cheetah Safari if Kuno's cheetahs are the whole reason for the trip. Pick the 3 Big Cat Safari if you want a chance at tiger, leopard and cheetah on one trip. Pick the 4 in 1 if you are a photographer or want gharials and the Chambal river added.",
  },
  {
    question: "Can the itinerary be customised?",
    answer:
      "Yes. Trip length, number of safaris, accommodation tier and pickup point are all adjustable — tell us your dates and what you most want to see and we will rework the plan around it.",
  },
];

const Packages: React.FC = () => {
  const itineraryRef = useRef<HTMLDivElement>(null); // Create a reference for the Detailed Itinerary section
  const scrollToItinerary = () => {
    itineraryRef.current?.scrollIntoView({ behavior: "smooth" }); // Scroll to the section smoothly
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead
        title="Kuno Safari Packages & Prices — 4 Days / 3 Nights"
        description="Compare our three Kuno safari packages: Cheetah Safari (₹28,000), 3 Big Cat Safari (₹32,000) and the 4 in 1 photography safari. Six safaris, permits, meals and Gwalior transfers included."
        canonical={generateCanonicalUrl('/packages')}
        ogImage="/packages/cheetah-package.webp"
        ogImageAlt="Cheetah photographed on a Gypsy safari in Kuno National Park"
        structuredData={[
          generateBreadcrumbSchema(breadcrumbs),
          generateFAQSchema(faqs),
          generateReviewSchema(
            featuredTestimonials.map((t) => ({
              author: t.name,
              rating: t.rating,
              reviewBody: t.shortQuote ?? t.quote,
            }))
          ),
        ]}
      />
      {/* Hero Section */}
      <TrackedSection category="packages_page" label="hero" className="relative h-[60vh] bg-primary-900 flex items-center justify-center">
        {/* Our own photograph, not the stock Unsplash background this used to
            pull in from an external host on every page load. */}
        <img
          src="/packages/cheetah-package.webp"
          alt=""
          aria-hidden="true"
          width={1600}
          height={900}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Kuno Safari Packages & Prices
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Naturalist-led safaris in Kuno, Madhav and Chambal — from ₹28,000
            per person for four days, three nights and six safari sessions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* A plain in-page anchor, not a router Link: react-router treats
                to="#packages" as a path and navigates to /#packages. */}
            <TrackedButton
              category="packages_page"
              label="explore_packages"
              onClick={scrollToItinerary}
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Explore Packages
              <ChevronRight className="w-5 h-5 ml-2" />
            </TrackedButton>
          </motion.div>
        </div>
      </TrackedSection>

      <div className="container">
        <Breadcrumbs items={breadcrumbs} className="pt-5" />
      </div>

      {/* Packages Grid */}
      <TrackedSection id="packages" category="packages_page" label="packages_grid" className="section bg-white">
        <div className="container" ref={itineraryRef}>
          <SectionHeading
            title="Our Safari Packages"
            subtitle="Choose from our carefully curated wildlife experiences"
            center
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packageData.map((pkg: Package, index: number) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img loading="lazy" decoding="async"
                    src={pkg.image}
                    alt={pkg.heroImageAlt}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {pkg.duration}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {pkg.title}
                    </h3>
                    <p className="text-blue-100 text-sm">{pkg.location}</p>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">
                        Price per person
                      </span>
                      <span className="text-2xl font-bold text-blue-600">
                        ₹{pkg.price}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {pkg.duration}
                      </span>
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {pkg.maxGroupSize} max
                      </span>
                    </div>
                  </div>

                  <div className="mb-4 flex-1">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Highlights:
                    </h4>
                    <ul className="space-y-1">
                      {pkg.highlights
                        .slice(0, 3)
                        .map((highlight: string, idx: number) => (
                          <li
                            key={idx}
                            className="text-sm text-gray-600 flex items-start"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <TrackedLink
                    category="packages_page"
                    label={`view_details_${pkg.id}`}
                    to={`/package/${pkg.id}`}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    View Details
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </TrackedLink>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </TrackedSection>

      {/* Accommodation Options Section */}
      <AccommodationOptions
        category="packages_page"
        options={[
          {
            id: "homestay",
            type: "Budget-Friendly Local Stay",
            subtitle: "Comfortable & Affordable",
            image: `${import.meta.env.BASE_URL}packages/homestay.webp`,
            features: [
              "Clean, comfortable rooms with basic amenities",
              "Local homestay experience with fresh home-cooked meals",
              "Perfect access to both Tiktoli and Ahera zones of Kuno",
              "Exclusive vehicle, guide arrangements and photography guidance",
            ],
            tags: ["Budget Travelers", "Solo Travelers", "Cultural Experience"],
            buttonColorClass:
              "w-full flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200",
          },
          {
            id: "resort",
            type: "Premium Safari Lodge",
            subtitle: "Luxury & Comfort",
            image: `${import.meta.env.BASE_URL}packages/fort.webp`,
            features: [
              "Premium rooms with modern amenities",
              "Professional chefs preparing local and international cuisine",
              "Spa & Wellness: Relaxation facilities after exciting safari days",
              "Exclusive vehicle, guide arrangements and photography guidance",
            ],
            tags: ["Luxury Travelers", "Couples", "Families"],
            buttonColorClass:
              "w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200",
          },
        ]}
      />

      {/* Why Choose Us */}
      <TrackedSection category="packages_page" label="why_choose_us" className="section bg-gray-50">
        <div className="container">
          <SectionHeading
            title="Why Choose Finding Fauna?"
            subtitle="Experience the difference with our expert-led wildlife adventures"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Expert Guides
              </h3>
              <p className="text-gray-600">
                Our experienced naturalists and wildlife photographers ensure
                you don't miss a moment of the action.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Small Groups
              </h3>
              <p className="text-gray-600">
                Maximum 4 people per safari ensures personalized attention and
                better wildlife viewing opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                All-Inclusive
              </h3>
              <p className="text-gray-600">
                From permits to accommodation, we handle everything so you can
                focus on the wildlife experience.
              </p>
            </motion.div>
          </div>
        </div>
      </TrackedSection>

      {/* Testimonials */}
      <TrackedSection category="packages_page" label="testimonials" className="section bg-white">
        <div className="container">
          <SectionHeading
            title="What Our Guests Say"
            subtitle="Hear from travelers who've experienced our safaris"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <img loading="lazy" decoding="async"
                    width={48}
                    height={48}
                    src={testimonial.image}
                    alt={`${testimonial.name}, Kuno safari guest`}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 italic">
                  "{testimonial.shortQuote ?? testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </TrackedSection>

      <FaqSection
        category="packages_page"
        faqs={faqs}
        title="Kuno Safari Package FAQs"
        subtitle="Costs, inclusions, group sizes and how to pick between the three packages"
        className="section bg-gray-50"
      />

      <ContactSection />
    </div>
  );
};

export default Packages;
