import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import TrackedSection from '../components/tracking/TrackedSection';
import SEOHead from '../components/ui/SEOHead';
import { SITE_URL } from '../config/site';
import { generateCanonicalUrl, generateBreadcrumbSchema } from '../utils/seoUtils';

const About = () => {
  const team = [
    {
      name: 'Nived Yadav',
      role: 'Founder & Lead Naturalist',
      image: '/about/nived.webp',
      alt: 'Nived Yadav, founder of Finding Fauna and lead naturalist at Kuno National Park',
      bio: [
        'Nived left a career in video editing and running his own agency to work full time in wildlife photography, and has been guiding in Kuno since 2021. He was among the first photographers to document India’s reintroduced cheetahs in the wild.',
        'He runs the Finding Fauna YouTube channel, now past 130,000 subscribers, where much of the field footage from Kuno comes from — and where a good number of our guests first found us.',
      ],
      credentials: [
        '10+ years in wildlife photography',
        'Guiding in Kuno since 2021',
        'Among the first to photograph India’s wild cheetahs',
      ],
    },
    {
      name: 'Laabh Yadav',
      role: 'Co-Founder & Wildlife Rescuer',
      image: '/about/laabh.webp',
      alt: 'Laabh Yadav, co-founder of Finding Fauna, during a wildlife rescue near Kuno',
      bio: [
        'Laabh has been rescuing animals since his school days and has handled more than 150 rescues across five cities — snakes, birds and, working alongside the Madhya Pradesh Forest Department, leopards.',
        'He runs our awareness sessions for students, forest guards, interns and villagers around Kuno, and that field knowledge of animal behaviour is a large part of why our drives find what they find.',
      ],
      credentials: [
        '150+ wildlife rescues',
        'Awareness sessions with the MP Forest Department',
        'Snake and reptile handling specialist',
      ],
    },
  ];

  return (
    <>
      <SEOHead
        title="About Finding Fauna — Kuno's Naturalist Guides"
        description="Nived and Laabh Yadav have guided Kuno since 2021 — 150+ wildlife rescues, 130K+ YouTube subscribers, and the first photographs of India's wild cheetahs."
        canonical={generateCanonicalUrl('/about')}
        ogImage="/about/ourstory.webp"
        ogImageAlt="Nived and Laabh Yadav, founders of Finding Fauna, in the field at Kuno"
        structuredData={[
          generateBreadcrumbSchema([
            { name: 'Home', url: SITE_URL },
            { name: 'About', url: `${SITE_URL}/about` },
          ]),
          ...team.map((member) => ({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: member.name,
            jobTitle: member.role,
            image: `${SITE_URL}${member.image}`,
            description: member.bio[0],
            knowsAbout: member.credentials,
            worksFor: { '@id': `${SITE_URL}/#organization` },
          })),
        ]}
      />
      {/* Hero Section */}
      <TrackedSection category="about" label="hero" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              About <span className="text-primary-600">Finding Fauna</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-neutral-700 mb-8"
            >
              We are a passionate team of wildlife enthusiasts and conservationists dedicated to protecting animals, restoring habitats, and creating meaningful experiences in the wild.
            </motion.p>
          </div>
        </div>
      </TrackedSection>

      {/* Our Story Section */}
      <TrackedSection category="about" label="our_story" className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading title="Our Story">
                <motion.hr
                  initial={{ width: 0 }}
                  whileInView={{ width: '100px' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="border-t-4 border-primary-500 my-6"
                />
              </SectionHeading>
              
              <p className="text-neutral-600 mb-6">
               At Finding Fauna, we are a passionate team dedicated to exploring, documenting, and protecting India’s incredible wildlife. Through ethical safaris, engaging storytelling, and conservation-driven initiatives, our mission is to connect people with nature while inspiring a deeper respect for the wild.
              </p>
              
              <p className="text-neutral-600 mb-6">
               The idea was born from Nived’s journey—from a creative career in video editing and running an agency to pursuing his true calling in wildlife photography. His vision of showcasing India’s majestic fauna through powerful imagery evolved into Finding Fauna. Joining him was Laabh, who had been rescuing animals since his school days and advocating for their ethical treatment. Together, they merged storytelling with hands-on conservation.
              </p>
               <p className="text-neutral-600">
                For us, every rescue, every awareness session, and every rare glimpse of the wild is part of a larger purpose: to celebrate the beauty of nature, protect endangered species, and inspire people to experience the wilderness responsibly.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <img loading="lazy" decoding="async"
                width={800}
                height={600}
                src={`${import.meta.env.BASE_URL}about/ourstory.webp`}
                alt="Nived and Laabh Yadav of Finding Fauna in the field at Kuno National Park"
                className="rounded-lg shadow-md w-full"
              />
              
              {/* Year badges */}
              <div className="absolute top-0 left-0 -mt-6 -ml-6 bg-primary-600 text-white py-2 px-4 rounded-lg shadow-lg">
                <span className="font-bold">Since 2021</span>
              </div>
              
              <div className="absolute bottom-0 right-0 -mb-6 -mr-6 bg-white py-4 px-6 rounded-lg shadow-lg">
                <div className="flex gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-600">4+</p>
                    <p className="text-sm text-neutral-600">Years</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-600">150+</p>
                    <p className="text-sm text-neutral-600">rescues</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-600">5+</p>
                    <p className="text-sm text-neutral-600">cities</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </TrackedSection>

      {/* Our Team Section */}
      <TrackedSection category="about" label="team" className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Meet the Team"
            subtitle="Two brothers who guide every trip themselves — you will be in the vehicle with one of them."
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm group"
              >
                <div className="relative overflow-hidden">
                  <img loading="lazy" decoding="async"
                    width={480}
                    height={320}
                    src={`${import.meta.env.BASE_URL}${member.image.startsWith('/') ? member.image.slice(1) : member.image}`}
                    alt={member.alt}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl">{member.name}</h3>
                  <p className="text-primary-700 font-medium mb-4">{member.role}</p>
                  {member.bio.map((paragraph) => (
                    <p key={paragraph.slice(0, 24)} className="text-neutral-600 mb-3 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  <ul className="mt-4 space-y-1.5 text-sm text-neutral-600">
                    {member.credentials.map((credential) => (
                      <li key={credential} className="flex gap-2">
                        <span aria-hidden="true" className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary-500" />
                        <span>{credential}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </TrackedSection>

    </>
  );
};

export default About;
