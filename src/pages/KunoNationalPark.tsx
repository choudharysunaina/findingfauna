import { motion } from "framer-motion";
import { Sun, CloudRain, Snowflake, Plane, Train, Car, ArrowRight } from "lucide-react";
import SEOHead from "../components/ui/SEOHead";
import SectionHeading from "../components/ui/SectionHeading";
import ResponsiveImage from "../components/ui/ResponsiveImage";
import PlacesCarousel from "../components/ui/PlacesCarousel";
import FaqSection from "../components/ui/FaqSection";
import {
  generateFAQSchema,
  generateCanonicalUrl,
  generateBreadcrumbSchema,
  generateTouristDestinationSchema,
} from "../utils/seoUtils";
import { SITE_URL } from "../config/site";
import { guides } from "../data/guides";
import TrackedSection from "../components/tracking/TrackedSection";
import TrackedLink from "../components/tracking/TrackedLink";

const thingsToDo = [
  {
    name: "Jungle Safari",
    image: "/kuno-national-park/junglesafari.webp",
    alt: "Open Gypsy jungle safari on a forest track in Kuno National Park",
    description:
      "The main event. A 3.5 to 4 hour Gypsy drive through grassland, dry deciduous forest and river crossings, in a morning or evening slot. Gypsy is the only official safari vehicle here — there are no canters.",
  },
  {
    name: "Birds Watching",
    image: "/kuno-national-park/BIRDWATCHING1.webp",
    alt: "Birdwatching in the riverine habitat of Kuno National Park",
    description:
      "Over 200 recorded species, including the Forest Owlet, rediscovered here after 123 years. Indian eagle-owl, painted spurfowl, changeable hawk-eagle and paradise flycatcher are all regulars.",
  },
  {
    name: "Night Drive",
    image: "/kuno-national-park/NightDrive.webp",
    alt: "Night drive on the buffer roads outside Kuno National Park",
    description:
      "On the buffer roads outside the core, after dark — the window for nocturnal species like striped hyena, jungle cat, civets and nightjars that you rarely see on a day drive.",
  },
  {
    name: "Herping",
    image: "/kuno-national-park/HERPING.webp",
    alt: "Indian rock python photographed while herping near Kuno National Park",
    description:
      "Reptile and amphibian walks with the person who has handled 150-plus rescues. Rock pythons, mugger crocodiles and a long list of snakes and lizards, approached safely and without disturbing them.",
  },
  {
    name: "River Side Dinner",
    image: "/kuno-national-park/dinner.webp",
    alt: "Dinner set up beside the river near Kuno National Park",
    description:
      "Dinner beside the water at the end of a safari day. Quiet, no schedule, and usually the point at which the day's sightings get argued over properly.",
  },
  {
    name: "Trekking",
    image: "/kuno-national-park/trekking.webp",
    alt: "Guided nature walk through the hills surrounding Kuno National Park",
    description:
      "Guided walks in the buffer and surrounding hills — tracks, scat, alarm calls and plants. The slow version of the safari, and the best way to learn how the forest is read.",
  },
];

const popularPlaces = [
  {
    name: "Dev Kho",
    image: "/kuno-national-park/DEVKHO.webp",
    description:
      "Dev Kho is a scenic eco-tourism and pilgrimage spot in the Karahal region of Sheopur district, Madhya Pradesh.",
    alt: "Dev Kho eco-tourism and pilgrimage site in the Karahal region near Kuno National Park",
    link: "/blog/nearby-places#devkho-temple",
  },
  {
    name: "Kuno River",
    image: "/kuno-national-park/KunoRiver.webp",
    description:
      "The lifeline of the park, flowing through its heart and supporting riverine forests, marsh crocodiles and a rich diversity of birdlife.",
    alt: "The Kuno river flowing through riverine forest inside Kuno National Park",
    link: "/blog/park-history#overview-of-kuno-national-park",
  },
  {
    name: "Madhav National Park",
    image: "/kuno-national-park/MadhavPark.webp",
    description:
      "Madhav National Park is India's 58th Tiger Reserve, the sanctuary is home to tigers, leopards, nilgai, chinkara, sambar, and barking deer.",
    alt: "Madhav National Park, India's 58th Tiger Reserve, near Shivpuri",
    link: "/blog/nearby-places#madhav-tiger-reserve",
  },
  {
    name: "Jal Mandir",
    image: "/kuno-national-park/JalMandir.webp",
    description:
      "The Jal Mandir in Pohari, located about 35 km from Shivpuri in Madhya Pradesh, is a unique 3-story shrine constructed in 1811.",
    alt: "Jal Mandir, the three-storey shrine at Pohari built in 1811, near Kuno",
    link: "/blog/nearby-places#jal-mandir-pohri",
  },
  {
    name: "Chhatri",
    image: "/kuno-national-park/Chhatri.webp",
    description:
      "The Chhatris of Shivpuri are a magnificent set of marble cenotaphs built by the Scindia dynasty in Madhya Pradesh.",
    alt: "Marble Chhatris of the Scindia dynasty at Shivpuri",
    link: "/blog/nearby-places",
  },
  {
    name: "Ganesh Temple",
    image: "/kuno-national-park/GaneshTemple.webp",
    description:
      "200 years old Lord Ganesh temple known as 'Pohari Ganesh Temple.",
    alt: "The 200-year-old Pohari Ganesh Temple near Kuno National Park",
    link: "/blog/nearby-places#ganesh-temple-pohri",
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
    alt: "Gwalior Fort, 165 km from Kuno National Park",
    description:
      "165 km. The arrival city for almost everyone — and worth a day for Gwalior Fort, Jai Vilas Palace and the Sas Bahu temples.",
  },
  {
    name: "Shivpuri",
    image: "/kuno-national-park/shivpuri.webp",
    alt: "Marble Chhatris of the Scindia dynasty at Shivpuri, near Kuno National Park",
    description:
      "35 km. Nearest town and railway station, home to the Scindia marble Chhatris and the gateway to Madhav National Park.",
  },
  {
    name: "Sawai Madhopur",
    image: "/kuno-national-park/SawaiMadhopur.webp",
    alt: "Ranthambore forest at Sawai Madhopur, around 170 km from Kuno",
    description:
      "170 km. The base for Ranthambore, which makes a combined cheetah-and-tiger itinerary genuinely practical.",
  },
  {
    name: "Agra",
    image: "/kuno-national-park/agra.webp",
    alt: "The Taj Mahal at Agra, 480 km from Kuno National Park",
    description:
      "480 km. Works as part of a longer Golden Triangle route rather than a side trip from the park.",
  },
  {
    name: "Jaipur",
    image: "/kuno-national-park/jaipur.webp",
    alt: "Hawa Mahal in Jaipur, 290 km from Kuno National Park",
    description:
      "290 km, five to six hours. The second-nearest airport and an easy add-on for anyone travelling through Rajasthan.",
  },
  {
    name: "Orchha",
    image: "/kuno-national-park/orcha.webp",
    alt: "Bundela cenotaphs on the Betwa river at Orchha, near Kuno",
    description:
      "280 km. Bundela palaces and cenotaphs on the Betwa river — the quietest of the heritage stops near Kuno.",
  },
  {
    name: "Khajuraho",
    image: "/kuno-national-park/khajuraho.webp",
    alt: "Temple carvings at Khajuraho, a heritage site reachable from Kuno",
    description:
      "The UNESCO temple complex, best reached via Orchha if you are extending the trip east.",
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

const KunoNationalPark = () => {
  return (
    <>
      <SEOHead
        title="Kuno National Park: Cheetah Safari Guide & Facts"
        description="748.76 sq km in Sheopur, Madhya Pradesh — India's only free-ranging cheetah landscape. History, wildlife, safari zones, best time to visit and how to reach Kuno."
        canonical={generateCanonicalUrl('/kuno-national-park')}
        ogImage="/home/cheetah.webp"
        ogImageAlt="Cheetah in the grasslands of Kuno National Park, Sheopur, Madhya Pradesh"
        structuredData={[
          generateTouristDestinationSchema(),
          generateFAQSchema(faqs),
          generateBreadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'Kuno National Park', url: `${SITE_URL}/kuno-national-park` },
          ]),
        ]}
      />

      <TrackedSection
        category="kuno_park"
        label="hero"
        className="relative min-h-[100vh] flex items-center overflow-hidden -mt-14"
      >
        <img
          src={`${import.meta.env.BASE_URL}kuno-national-park/cheetah.webp`}
          alt=""
          width={1600}
          height={900}
          fetchPriority="high"
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
                    alt={place.alt}
                    width={176}
                    height={176}
                    className="relative w-40 h-40 md:w-44 md:h-44 rounded-xl object-cover shadow-md"
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

      {/* Links out to the planning guides. This page ranks for the head term
          "kuno national park" but had no path from here to the pages that
          answer the commercial questions. */}
      <TrackedSection category="kuno_park" label="planning_guides" className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Planning a Visit to Kuno National Park"
            subtitle="Permits, prices, zones and timings — everything you need before booking."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {guides.map((guide) => (
              <TrackedLink
                key={guide.path}
                category="kuno_park"
                label={`guide_${guide.path.replace(/\//g, "")}`}
                to={guide.path}
                className="group flex h-full flex-col rounded-xl border border-neutral-200 p-5 transition-colors hover:border-primary-400"
              >
                <h3 className="flex items-center font-semibold text-neutral-900 group-hover:text-primary-700">
                  {guide.label}
                  <ArrowRight
                    size={16}
                    className="ml-1.5 transition-transform group-hover:translate-x-1"
                  />
                </h3>
                <p className="mt-1.5 text-sm text-neutral-600">{guide.blurb}</p>
              </TrackedLink>
            ))}
          </div>
        </div>
      </TrackedSection>

      {/* FAQs. Rendered with the shared <details>-based FaqSection: the old
          useState accordion kept every answer out of the DOM until clicked,
          so the FAQPage JSON-LD on this page described text that appeared
          nowhere in the HTML. */}
      <FaqSection
        category="kuno_park"
        faqs={faqs}
        title="People Also Ask About Kuno"
        className="section bg-neutral-50"
      />
    </>
  );
};

export default KunoNationalPark;
