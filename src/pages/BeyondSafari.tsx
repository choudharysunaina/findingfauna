import { motion } from "framer-motion";
import ResponsiveImage from "../components/ui/ResponsiveImage";
import SEOHead from "../components/ui/SEOHead";
import { Check, Award, Users, Clock, Zap, Heart } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import TrackedSection from "../components/tracking/TrackedSection";
import { SITE_URL } from "../config/site";

const highlights = [
  {
    title: "Wildlife Rescue & Rehabilitation",
    description:
      "Our trained team safely rescues wild animals that enter human areas due to habitat loss or conflict. Using proper techniques, we handle snakes, birds, leopards, and more with care. Injured animals are rehabilitated in coordination with the forest department and released back into the wild, ensuring the safety of both people and wildlife.",
    image: "/beyond-safari/Wildlife Rescue & Rehabilitation.webp",
  },
  {
    title: "Educating Local Communities",
    description:
      "To protect wildlife, we engage with communities near Kuno National Park, educating them on safe animal interactions, the importance of each species, and dispelling harmful myths. This awareness fosters understanding, reduces fear, and encourages peaceful coexistence with wildlife.",
    image: "/beyond-safari/Educating_local.webp",
  },
  {
    title: "Awareness Sessions with Forest Department",
    description:
      "We support the Madhya Pradesh Forest Department by conducting awareness and training sessions for students, forest guards, interns, and villagers. These sessions cover wildlife conservation, safe response to animal encounters, live rescue demos, and discussions on forest laws and habitat protection.",
    image: "/beyond-safari/awareness_sessions.webp",
  },
];

const stories = [
  {
    title: "Cheetahs Return to India: A Historic First Glimpse",
    description:
      "We proudly captured India's first wild cheetah photos—a milestone in conservation showcasing these majestic animals in their natural home.",
    image: "/beyond-safari/cheetah-close-up.webp",
  },
  {
    title: "Dhole Spotted in Kuno After 15 Years",
    description:
      "A remarkable sighting—capturing the elusive Dhole in Kuno National Park after 15 years highlighted the return of this endangered wild dog to the landscape.",
    image: "/beyond-safari/dhole.webp",
  },
  {
    title: "Rare Melanistic Indian Wolf Puppies Spotted",
    description:
      "An extraordinary discovery—capturing the rare black-furred wolf pups thriving in the wild was a breathtaking experience.",
    image: "/beyond-safari/wolf_puppies.webp",
  },
  {
    title: "Rare Melanistic Jungle Cat Captured in Kuno",
    description:
      "A remarkable discovery of this elusive, dark-coated jungle cat reveals the hidden marvels of India's forests.",
    image: "/beyond-safari/junglecat.webp",
  },
  {
    title: "Forest Owlet Rediscovered in Kuno After 123 Years",
    description:
      "A landmark discovery—our team documented the Forest Owlet in Kuno National Park after 123 years, marking a historic rediscovery of this critically important bird.",
    image: "/beyond-safari/forrestowlet.webp",
  },
  {
    title: "Indian Rock Python Hatchlings Spotted",
    description:
      "A rare glimpse of hatchlings emerging—offering a powerful reminder of nature's delicate balance and the wonder of new life.",
    image: "/rock_python.webp",  // shared with blog CMS, stays at public root
  },
];

const values = [
  {
    icon: <Users size={24} />,
    title: "Compassion for Wildlife",
    description:
      "We treat all animals with care and dignity, ensuring their safety and well-being come first.",
  },
  {
    icon: <Award size={24} />,
    title: "Ethical Exploration",
    description:
      "We promote safaris and photography that celebrate nature without disturbing its delicate balance.",
  },
  {
    icon: <Zap size={24} />,
    title: "Community Engagement",
    description:
      "By educating and involving local communities, we create lasting change and harmonious coexistence.",
  },
  {
    icon: <Heart size={24} />,
    title: "Authentic Storytelling",
    description:
      "Through photography, films, and experiences, we share real stories that inspire awareness and action.",
  },
  {
    icon: <Clock size={24} />,
    title: "Conservation Impact",
    description:
      "Our work goes beyond observation—rescuing animals, restoring habitats, and supporting forest departments.",
  },
  {
    icon: <Check size={24} />,
    title: "Sustainable Future",
    description:
      "We champion responsible tourism and mindful practices that safeguard the wild for generations to come.",
  },
];

const BeyondSafari = () => (
  <>
    <SEOHead
      title="Beyond Safari - Wildlife Conservation & Community"
      description="Discover our wildlife rescue initiatives, community education programs, and conservation efforts at Kuno National Park. Learn about our groundbreaking moments and conservation success stories."
      keywords="Wildlife Conservation, Community Education, Wildlife Rescue, Kuno National Park, Conservation Awareness, Forest Department, Wildlife Rehabilitation"
      canonical={`${SITE_URL}/beyond-safari`}
      ogImage="/home/more_info.webp"
      ogType="article"
    />
    <div className="bg-neutral-50">
      {/* Hero Section */}
      <TrackedSection category="beyond_safari" label="hero" className="pt-16 pb-8 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Beyond the Safari
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-neutral-700 max-w-2xl mx-auto"
          >
            Wildlife rescue, community education, and conservation stories from Kuno National Park.
          </motion.p>
        </div>
      </TrackedSection>

      {/* Highlights Section */}
      <TrackedSection category="beyond_safari" label="highlights" className="pb-16 pt-8">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <ResponsiveImage
                  src={item.image}
                  alt={item.title}
                  className="h-56 w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 400px"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-neutral-600 flex-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </TrackedSection>

      {/* Stories Section */}
      <TrackedSection category="beyond_safari" label="stories" className="pt-16 pb-4 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Groundbreaking Moments
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stories.map((story, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-neutral-50 rounded-lg shadow-md overflow-hidden flex flex-col"
              >
                <ResponsiveImage
                  src={story.image}
                  alt={story.title}
                  className="h-56 w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-neutral-600 flex-1">{story.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </TrackedSection>
      {/* Our Values Section */}
      <TrackedSection category="beyond_safari" label="values" className="section bg-neutral-50">
        <div className="container">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide our work and relationships."
            center
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-100 text-primary-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </TrackedSection>
    </div>
  </>
);

export default BeyondSafari;
