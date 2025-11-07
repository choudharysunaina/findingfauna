import { motion } from 'framer-motion';
import ResponsiveImage from '../components/ui/ResponsiveImage';
import SEOHead from '../components/ui/SEOHead';

const highlights = [
  {
    title: "Wildlife Rescue & Rehabilitation",
    description: "Our trained team safely rescues wild animals that enter human areas due to habitat loss or conflict. Using proper techniques, we handle snakes, birds, leopards, and more with care. Injured animals are rehabilitated in coordination with the forest department and released back into the wild, ensuring the safety of both people and wildlife.",
    image: "/Wildlife Rescue & Rehabilitation.jpg",
  },
  {
    title: "Educating Local Communities",
    description: "To protect wildlife, we engage with communities near Kuno National Park, educating them on safe animal interactions, the importance of each species, and dispelling harmful myths. This awareness fosters understanding, reduces fear, and encourages peaceful coexistence with wildlife.",
    image: "/Educating_local.jpg",
  },
  {
    title: "Awareness Sessions with Forest Department",
    description: "We support the Madhya Pradesh Forest Department by conducting awareness and training sessions for students, forest guards, interns, and villagers. These sessions cover wildlife conservation, safe response to animal encounters, live rescue demos, and discussions on forest laws and habitat protection.",
    image: "/awareness_sessions.jpg",
  },
];

const stories = [
  {
    title: "Cheetahs Return to India: A Historic First Glimpse",
    description: "We proudly captured India's first wild cheetah photos—a milestone in conservation showcasing these majestic animals in their natural home.",
    image: "/cheetah.jpg",
  },
  {
    title: "Rare Melanistic Indian Gray Wolf Puppies Spotted",
    description: "An extraordinary discovery—capturing the rare black-furred wolf pups thriving in the wild was a breathtaking experience.",
    image: "/wolf_puppies.jpg",
  },
  {
    title: "Rare Melanistic Jungle Cat Captured in Kuno",
    description: "A remarkable discovery of this elusive, dark-coated jungle cat reveals the hidden marvels of India's forests.",
    image: "/jungle_cat.jpg",
  },
   {
    title: "Indian Rock Python Hatchlings Spotted",
    description: "A rare glimpse of hatchlings emerging—offering a powerful reminder of nature's delicate balance and the wonder of new life.",
    image: "/rock_python.jpg",
  },
];

const BeyondSafari = () => (
  <>
    <SEOHead
      title="Beyond Safari - Wildlife Conservation & Community"
      description="Discover our wildlife rescue initiatives, community education programs, and conservation efforts at Kuno National Park. Learn about our groundbreaking moments and conservation success stories."
      keywords="Wildlife Conservation, Community Education, Wildlife Rescue, Kuno National Park, Conservation Awareness, Forest Department, Wildlife Rehabilitation"
      canonical="https://kunosafari.com/beyond-safari"
      ogImage="/more_info.jpg"
      ogType="article"
    />
    <main className="bg-neutral-50">
    {/* Hero Section */}
    <section className="relative py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Saving Wildlife, Spreading Awareness
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text text-neutral-700 max-w-2xl mx-auto"
        >
          At Kuno Cheetah Safari by Finding Fauna, we blend adventure with purpose—celebrating the beauty of the wild, protecting wildlife, uplifting communities, and driving real impact.
        </motion.p>
        <ResponsiveImage
          src="/more_info.jpg"
          alt="Wildlife Conservation at Kuno National Park"
          className="mx-auto mt-10 rounded-lg shadow-lg w-full max-w-5xl object-cover"
          priority={true}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
        />
      </div>
    </section>

    {/* Highlights Section */}
    <section className="py-16">
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
    </section>

    {/* Stories Section */}
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Groundbreaking Moments</h2>
        <div className="grid md:grid-cols-4 gap-8">
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
    </section>

  
  </main>
  </>
);

export default BeyondSafari;