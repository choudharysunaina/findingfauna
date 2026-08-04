import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  CloudRain,
  Snowflake,
  Plane,
  Train,
  Car,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import SEOHead from "../components/ui/SEOHead";
import SectionHeading from "../components/ui/SectionHeading";
import ResponsiveImage from "../components/ui/ResponsiveImage";
import PlacesCarousel from "../components/ui/PlacesCarousel";
import { generateFAQSchema } from "../utils/seoUtils";
import { SITE_URL } from "../config/site";
import TrackedSection from "../components/tracking/TrackedSection";
import TrackedLink from "../components/tracking/TrackedLink";
import { trackEvent } from "../utils/analytics";

const thingsToDo = [
  {
    name: "Jungle Safari",
    image: "/kuno-national-park/junglesafari.webp",
  },
  {
    name: "Birds Watching",
    image: "/kuno-national-park/BIRDWATCHING1.webp",
  },
  {
    name: "Night Drive",
    image: "/kuno-national-park/NightDrive.webp",
  },
  {
    name: "Herping",
    image: "/kuno-national-park/HERPING.webp",
  },
  {
    name: "River Side Dinner",
    image: "/kuno-national-park/dinner.webp",
  },
  {
    name: "Trekking",
    image: "/kuno-national-park/trekking.webp",
  },
];

const popularPlaces = [
  {
    name: "Dev Kho",
    image: "/kuno-national-park/DEVKHO.webp",
    description:
      "Dev Kho is a scenic eco-tourism and pilgrimage spot in the Karahal region of Sheopur district, Madhya Pradesh.",
    link: "/blog/nearby-places",
  },
  {
    name: "Kuno River",
    image: "/kuno-national-park/KunoRiver.webp",
    description:
      "The lifeline of the park, flowing through its heart and supporting riverine forests, marsh crocodiles and a rich diversity of birdlife.",
    link: "/blog/nearby-places",
  },
  {
    name: "Madhav National Park",
    image: "/kuno-national-park/MadhavPark.webp",
    description:
      "Madhav National Park is India's 58th Tiger Reserve, the sanctuary is home to tigers, leopards, nilgai, chinkara, sambar, and barking deer.",
    link: "/blog/nearby-places",
  },
  {
    name: "Jal Mandir",
    image: "/kuno-national-park/JalMandir.webp",
    description:
      "The Jal Mandir in Pohari, located about 35 km from Shivpuri in Madhya Pradesh, is a unique 3-story shrine constructed in 1811.",
    link: "/blog/nearby-places",
  },
  {
    name: "Chhatri",
    image: "/kuno-national-park/Chhatri.webp",
    description:
      "The Chhatris of Shivpuri are a magnificent set of marble cenotaphs built by the Scindia dynasty in Madhya Pradesh.",
    link: "/blog/nearby-places",
  },
  {
    name: "Ganesh Temple",
    image: "/kuno-national-park/GaneshTemple.webp",
    description:
      "200 years old Lord Ganesh temple known as 'Pohari Ganesh Temple.",
    link: "/blog/nearby-places",
  },
];

const seasons = [
  {
    icon: <Sun size={26} />,
    title: "Summer Season",
    description:
      "During the summer season, from April to June, temperatures can rise above 40°C. However, this is one of the best times for wildlife sightings, as animals frequently gather around water sources. Early morning safaris often provide excellent opportunities to spot cheetahs, leopards and other wildlife.",
  },
  {
    icon: <CloudRain size={26} />,
    title: "Monsoon Season",
    description:
      "The monsoon season, from July to September, transforms Kuno into a lush green landscape. During this period, the park remains closed for tourism, allowing the forests and wildlife to thrive undisturbed. The rains rejuvenate the grasslands and riverine habitats, making the park vibrant before the safari season resumes.",
  },
  {
    icon: <Snowflake size={26} />,
    title: "Winter Season",
    description:
      "The winter season, from October to March, is considered the ideal time to visit Kuno National Park. Pleasant temperatures, clear skies and comfortable safari conditions make it perfect for exploring the park. Wildlife remains active throughout the day, offering excellent opportunities for photography, birdwatching and unforgettable safari experiences.",
  },
];

const reachOptions = [
  {
    icon: <Plane size={26} />,
    title: "By Air",
    description:
      "The nearest airport to Kuno National Park is Gwalior Airport, located approximately 165 km away. Other convenient airports include Jaipur (290 km) and Bhopal (390 km). Taxis and private vehicles are readily available from these airports to reach the park.",
  },
  {
    icon: <Train size={26} />,
    title: "By Rail",
    description:
      "The nearest railway station is Shivpuri Railway Station, situated approximately 35 km from Kuno National Park. Gwalior Junction, around 165 km away, is the nearest major railway station with excellent connectivity to Delhi, Mumbai, Jaipur and other major Indian cities. Taxis and private vehicles are easily available from both railway stations.",
  },
  {
    icon: <Car size={26} />,
    title: "By Road",
    description:
      "Kuno National Park is well connected by road to major cities in Madhya Pradesh and Rajasthan. The park is approximately 165 km from Gwalior, 35 km from Shivpuri, 290 km from Jaipur, 390 km from Bhopal, and 480 km from Agra. Well-maintained highways make travelling by private vehicle, taxi or bus a convenient option.",
  },
];

const nearbyPlaces = [
  {
    name: "Gwalior",
    image: "/kuno-national-park/gwalior.webp",
  },
  {
    name: "Shivpuri",
    image: "/kuno-national-park/shivpuri.webp",
  },
  {
    name: "Sawai Madhopur",
    image: "/kuno-national-park/SawaiMadhopur.webp",
  },
  {
    name: "Agra",
    image: "/kuno-national-park/agra.webp",
  },
  {
    name: "Jaipur",
    image: "/kuno-national-park/jaipur.webp",
  },
  {
    name: "Orchha",
    image: "/kuno-national-park/orcha.webp",
  },
  {
    name: "Khajuraho",
    image: "/kuno-national-park/khajuraho.webp",
  },
];

const faqs = [
  {
    question: "Where is Kuno National Park located?",
    answer:
      "Kuno National Park is located in the Sheopur district of Madhya Pradesh, approximately 165 km from Gwalior and is best known as the home of India’s African cheetahs.",
  },
  {
    question: "What animals can I see in Kuno National Park?",
    answer:
      "Visitors can spot cheetahs, leopards, sloth bears, striped hyenas, wolves, jackals, chital, sambar, nilgai, chinkara, crocodiles and over 200 species of birds.",
  },
  {
    question: "What is the best time to visit Kuno National Park?",
    answer:
      "The best time to visit is from October to March for pleasant weather, while April to June offers excellent wildlife sightings as animals gather near water sources.",
  },
  {
    question: "When is Kuno National Park closed?",
    answer:
      "Kuno National Park generally remains closed for tourists during the monsoon season (July to September) and reopens in October, subject to Forest Department notifications.",
  },
  {
    question:
      "Which is the nearest airport and railway station to Kuno National Park?",
    answer:
      "Gwalior Airport is the nearest airport, while Shivpuri Railway Station and Gwalior Junction are the most convenient railway stations for visitors.",
  },
  {
    question: "Can I carry a camera inside Kuno National Park?",
    answer:
      "Yes. Visitors are allowed to carry still cameras and mobile phones during safari. Professional videography equipment may require additional permissions as per Forest Department regulations.",
  },
  {
    question: "How can I book a safari in Kuno National Park?",
    answer:
      "Safari bookings can be made online through the Forest Department or through authorised safari operators such as Finding Fauna.",
  },
  {
    question: "How many safaris should I book in Kuno National Park?",
    answer:
      "Wildlife sightings vary on every drive. Booking 2–4 safaris is recommended for the best chance of seeing cheetahs, leopards and other wildlife.",
  },
];

interface FAQItemProps {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ faq, isOpen, onToggle }: FAQItemProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <button
      onClick={() => {
        trackEvent({
          category: "kuno_park",
          action: "click",
          label: `faq_toggle: ${faq.question}`,
        });
        onToggle();
      }}
      aria-expanded={isOpen}
      className="w-full flex items-center justify-between text-left px-6 py-4 font-semibold text-neutral-800 hover:text-primary-600 transition-colors"
    >
      <span>{faq.question}</span>
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.2 }}
        className="flex-shrink-0 ml-4 text-primary-600"
      >
        <ChevronDown size={20} />
      </motion.span>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="px-6 pb-5 text-neutral-600 leading-relaxed">
            {faq.answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const KunoNationalPark = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      <SEOHead
        title="Kuno National Park - Home of India's Cheetahs"
        description="Explore Kuno National Park in Sheopur, Madhya Pradesh - India's only free-ranging cheetah landscape. Discover its history, wildlife, best time to visit, how to reach and everything you need to plan your safari."
        keywords="Kuno National Park, Project Cheetah, Cheetah Safari India, Sheopur Madhya Pradesh, Kuno Safari Booking, Kuno Wildlife, Palpur Fort, Kuno River"
        canonical={`${SITE_URL}/kuno-national-park`}
        ogImage="/home/cheetah.webp"
        structuredData={generateFAQSchema(faqs)}
      />

      <TrackedSection
        category="kuno_park"
        label="hero"
        className="relative min-h-[100vh] flex items-center overflow-hidden -mt-14"
      >
        <img
          src={`${import.meta.env.BASE_URL}kuno-national-park/cheetah.webp`}
          alt="Safari Background"
          fetchpriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ pointerEvents: "none" }}
          aria-hidden="true"
        />

        {/* Optional dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/20 z-0" />

        <div className="container relative z-10">
          <div className="flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-lg text-right"
            >
              <h1 className="font-bold text-2xl md:text-2xl lg:text-4xl text-white leading-tight">
                About Kuno National Park
              </h1>

              <p className="mt-3 text-lg md:text-xl font-medium text-white/90 italic">
                Park History &amp; Other Information
              </p>
            </motion.div>
          </div>
        </div>
      </TrackedSection>

      {/* Overview */}
      <TrackedSection
        category="kuno_park"
        label="overview"
        className="section bg-white"
      >
        <div className="container">
          <SectionHeading title="Overview" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-neutral-600 text-lg leading-relaxed space-y-4"
          >
            <p>
              Kuno National Park, located in the Sheopur district of Madhya
              Pradesh, spans 748.76 sq. km. and is one of India&rsquo;s most
              remarkable wildlife destinations. Named after the Kuno River, the
              park features a unique mix of dry deciduous forests, open
              grasslands and riverine habitats that support an exceptional
              diversity of wildlife.
            </p>
            <p>
              Internationally recognised as the home of Project Cheetah, Kuno is
              India&rsquo;s only free-ranging cheetah landscape. Alongside
              cheetahs, the park is home to leopards, sloth bears, Indian
              wolves, striped hyenas, deer, antelopes and over 200 bird species,
              making it a paradise for wildlife enthusiasts and photographers.
            </p>
          </motion.div>
        </div>
      </TrackedSection>

      {/* History */}
      <TrackedSection
        category="kuno_park"
        label="history"
        className="section bg-neutral-50"
      >
        <div className="container">
          <SectionHeading title="History of Kuno National Park" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-neutral-600 text-lg leading-relaxed space-y-4"
          >
            <p>
              Originally declared a Wildlife Sanctuary in 1981, Kuno underwent
              extensive habitat restoration and the voluntary relocation of 24
              villages, creating one of India&rsquo;s best-prepared landscapes
              for large carnivore conservation.
            </p>
            <p>
              The park was upgraded to National Park in 2018 and gained global
              recognition in 2022 with the launch of Project Cheetah, marking
              the historic return of cheetahs to India after more than seven
              decades. Today, Kuno stands as a symbol of successful wildlife
              conservation and ecological restoration.
            </p>
            <TrackedLink
              category="kuno_park"
              label="history_read_more"
              to="/blog/park-history"
              className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group"
            >
              Read More
              <ArrowRight
                size={18}
                className="ml-1 transition-transform group-hover:translate-x-1"
              />
            </TrackedLink>
          </motion.div>
        </div>
      </TrackedSection>

      {/* Top Things to Do */}
      <TrackedSection
        category="kuno_park"
        label="things_to_do"
        className="section bg-white"
      >
        <div className="container">
          <SectionHeading title="Top Things to Do in Kuno National Park" />
          <PlacesCarousel places={thingsToDo} />
        </div>
      </TrackedSection>

      {/* Popular Places Near Kuno */}
      <TrackedSection
        category="kuno_park"
        label="popular_places"
        className="section bg-neutral-50"
      >
        <div className="container">
          <SectionHeading
            title="Popular Attractions in Kuno"
            subtitle="The forts, rivers and wildlife sanctuaries that surround Kuno National Park."
          />
          <div className="grid lg:grid-cols-2 gap-x-14 gap-y-10">
            {popularPlaces.map((place, index) => (
              <motion.div
                key={place.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center gap-6 group ${
                  index % 2 === 1 ? "sm:flex-row-reverse" : ""
                } flex-col sm:flex-row`}
              >
                <div className="relative flex-shrink-0">
                  <div
                    className={`absolute -bottom-2 w-full h-full rounded-xl bg-primary-100 transition-transform duration-300 group-hover:translate-y-1 ${
                      index % 2 === 1
                        ? "-right-2 group-hover:translate-x-1"
                        : "-left-2 group-hover:-translate-x-1"
                    }`}
                  />
                  <ResponsiveImage
                    src={place.image}
                    alt={place.name}
                    className="relative w-40 h-40 md:w-44 md:h-44 rounded-xl shadow-md"
                    sizes="176px"
                  />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary-600 transition-colors">
                    {place.name}
                  </h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-3">
                    {place.description}
                  </p>
                  {place.link && (
                    <TrackedLink
                      category="kuno_park"
                      label={`place_read_more: ${place.name}`}
                      to={place.link}
                      className="inline-flex items-center text-primary-600 text-sm font-semibold uppercase tracking-wide hover:text-primary-700 transition-colors"
                    >
                      Read More
                      <ArrowRight
                        size={16}
                        className="ml-1 transition-transform group-hover:translate-x-1"
                      />
                    </TrackedLink>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </TrackedSection>

      {/* Best Time to Visit */}
      <TrackedSection
        category="kuno_park"
        label="best_time"
        className="section bg-white"
      >
        <div className="container">
          <SectionHeading title="Best Time to Visit Kuno National Park" />
          <div className="grid md:grid-cols-3 gap-8">
            {seasons.map((season, index) => (
              <motion.div
                key={season.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-50 rounded-lg p-6"
              >
                <div className="w-14 h-14 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                  {season.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{season.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {season.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </TrackedSection>

      {/* How to Reach */}
      <TrackedSection
        category="kuno_park"
        label="how_to_reach"
        className="section bg-neutral-50"
      >
        <div className="container">
          <SectionHeading title="How to Reach Kuno National Park?" />
          <div className="grid md:grid-cols-3 gap-8">
            {reachOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="w-14 h-14 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                  {option.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </TrackedSection>

      {/* Top Places to Visit Near Kuno */}
      <TrackedSection
        category="kuno_park"
        label="nearby_places"
        className="section bg-white"
      >
        <div className="container">
          <SectionHeading title="Top Places to Visit Near Kuno National Park" />
          <PlacesCarousel places={nearbyPlaces} />
        </div>
      </TrackedSection>

      {/* FAQs */}
      <TrackedSection
        category="kuno_park"
        label="faqs"
        className="section bg-neutral-50"
      >
        <div className="container">
          <SectionHeading title="People Also Ask About Kuno" />
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <FAQItem
                  faq={faq}
                  isOpen={openFaqIndex === index}
                  onToggle={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                />
              </motion.div>
            ))}
          </div>
        </div>
      </TrackedSection>
    </>
  );
};

export default KunoNationalPark;
