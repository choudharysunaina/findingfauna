import { motion } from "framer-motion";
import ResponsiveImage from "../components/ui/ResponsiveImage";
import SEOHead from "../components/ui/SEOHead";
import { Check, Award, Users, Clock, Zap, Heart } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading";
import TrackedSection from "../components/tracking/TrackedSection";
import { SITE_URL } from "../config/site";
import { generateCanonicalUrl, generateBreadcrumbSchema } from "../utils/seoUtils";

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
      "When Project Cheetah released the first animals from their enclosures into the wider Kuno landscape, we were in the field for it — and came away with what are, to our knowledge, the first photographs of a free-ranging cheetah in India since the species was declared extinct here in 1952.",
    detail:
      "Kuno had been prepared for large-carnivore reintroduction for two decades. Standing in a grassland watching the world's fastest land animal move across it, in India, is the single moment that shaped what Finding Fauna does now.",
    image: "/beyond-safari/cheetah-close-up.webp",
    alt: "One of India's first free-ranging cheetahs photographed in Kuno National Park",
  },
  {
    title: "Dhole Spotted in Kuno After 15 Years",
    description:
      "The Indian wild dog, or dhole, had not been recorded in Kuno for roughly fifteen years. Our team documented one in the park — evidence that the species is moving back into a landscape it had effectively vanished from.",
    detail:
      "Dholes are pack hunters that need large, connected, prey-rich habitat. Their reappearance says something about the state of the wider Kuno landscape that no single cheetah sighting can.",
    image: "/beyond-safari/dhole.webp",
    alt: "Dhole, or Indian wild dog, recorded in Kuno National Park after fifteen years",
  },
  {
    title: "Rare Melanistic Indian Wolf Pups",
    description:
      "Black-furred Indian wolf pups, photographed in the wild. Melanism in Indian wolves is genuinely rare and is documented only a handful of times — finding a litter of them was extraordinary.",
    detail:
      "Indian wolves are among the most threatened large carnivores in the country and are far harder to see than any of Kuno's big cats. We do not disclose den locations.",
    image: "/beyond-safari/wolf_puppies.webp",
    alt: "Rare melanistic Indian wolf pups photographed in the Kuno landscape",
  },
  {
    title: "Rare Melanistic Jungle Cat in Kuno",
    description:
      "A dark-coated jungle cat — another melanistic record from the same landscape, and an animal most visitors never see in its ordinary colouring, let alone this one.",
    detail:
      "Jungle cats are common across India but nocturnal, wary and easy to miss. Records like this one come from the night drives rather than the safari slots.",
    image: "/beyond-safari/junglecat.webp",
    alt: "Melanistic jungle cat with a dark coat, recorded in Kuno National Park",
  },
  {
    title: "Forest Owlet Rediscovered in Kuno After 123 Years",
    description:
      "The Forest Owlet was thought lost for most of the twentieth century and remains one of India's most threatened birds. Our team documented it in Kuno — the first record here in 123 years.",
    detail:
      "This is the discovery we are proudest of. It is also the clearest argument for why Kuno matters beyond Project Cheetah: the landscape holds species nobody was looking for.",
    image: "/beyond-safari/forrestowlet.webp",
    alt: "Critically threatened Forest Owlet, rediscovered in Kuno National Park after 123 years",
  },
  {
    title: "Indian Rock Python Hatchlings",
    description:
      "A clutch of Indian rock python hatchlings emerging, photographed without disturbing the nest. Rock pythons are protected and slow-breeding, and a successful clutch is a good sign for the habitat around it.",
    detail:
      "Reptiles are the part of Kuno almost nobody comes for and the part our rescue work touches most often. They are also the easiest to harm through careless photography, which is why we keep our distance.",
    image: "/rock_python.webp",  // shared with blog CMS, stays at public root
    alt: "Indian rock python hatchlings emerging from a nest near Kuno National Park",
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
      title="Wildlife Rescue & Conservation at Kuno"
      description="150+ rescues, community education with the MP Forest Department, and the discoveries our team documented at Kuno — dholes after 15 years, the Forest Owlet after 123."
      canonical={generateCanonicalUrl('/beyond-safari')}
      ogImage="/home/more_info.webp"
      ogImageAlt="Finding Fauna team on a wildlife rescue near Kuno National Park"
      ogType="article"
      structuredData={generateBreadcrumbSchema([
        { name: 'Home', url: SITE_URL },
        { name: 'Beyond Safari', url: `${SITE_URL}/beyond-safari` },
      ])}
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
                  width={400}
                  height={224}
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
                  alt={story.alt}
                  width={400}
                  height={224}
                  className="h-56 w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-neutral-600 mb-3">{story.description}</p>
                  <p className="text-neutral-600 text-sm flex-1">{story.detail}</p>
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
