import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Check, Award, Users, Clock, Zap, Heart } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Update page title
    document.title = 'About Us | Nivedya';
  }, []);

  const team = [
    {
      name: 'Nived Yadav',
      role: 'Founder',
      image: '/nived.png',
    },
    {
      name: 'Laabh Yadav',
      role: 'Co-Founder',
      image: '/laabh.jpg',
    },
  ];

  const values = [
    {
      icon: <Users size={24} />,
      title: 'Compassion for Wildlife',
      description: 'We treat all animals with care and dignity, ensuring their safety and well-being come first.',
    },
    {
      icon: <Award size={24} />,
      title: 'Ethical Exploration',
      description: 'We promote safaris and photography that celebrate nature without disturbing its delicate balance.',
    },
    {
      icon: <Zap size={24} />,
      title: 'Community Engagement',
      description: 'By educating and involving local communities, we create lasting change and harmonious coexistence.',
    },
    {
      icon: <Heart size={24} />,
      title: 'Authentic Storytelling',
      description: 'Through photography, films, and experiences, we share real stories that inspire awareness and action.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Conservation Impact',
      description: 'Our work goes beyond observation—rescuing animals, restoring habitats, and supporting forest departments.',
    },
    {
      icon: <Check size={24} />,
      title: 'Sustainable Future',
      description: 'We champion responsible tourism and mindful practices that safeguard the wild for generations to come.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
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
      </section>

      {/* Our Story Section */}
      <section className="section bg-white">
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
              <img
                src='/ourstory.jpg'
                alt="Our team collaborating"
                className="rounded-lg shadow-md w-full"
              />
              
              {/* Year badges */}
              <div className="absolute top-0 left-0 -mt-6 -ml-6 bg-primary-600 text-white py-2 px-4 rounded-lg shadow-lg">
                <span className="font-bold">Since 2015</span>
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
      </section>

      {/* Our Values Section */}
      <section className="section bg-neutral-50">
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
      </section>

      {/* Our Team Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            title="Meet Our Team"
            subtitle="People behind our mission."
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
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-center space-x-4">
                        {/* Social icons would go here */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-neutral-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
};

export default About;