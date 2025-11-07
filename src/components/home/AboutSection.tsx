import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  const benefits = [
    'Creative and innovative design solutions',
    'Expert team with diverse skill sets',
    'Collaborative approach to projects',
    'Dedicated to meeting client goals',
    'Commitment to quality and excellence',
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading title="About Finding Fauna">
              <motion.hr
                initial={{ width: 0 }}
                whileInView={{ width: '100px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border-t-4 border-primary-500 my-6"
              />
            </SectionHeading>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-neutral-600 mb-6"
            >
              At Nivedya, we blend creativity with technology to create digital experiences that inspire and engage. With a passion for design and innovation, we help businesses of all sizes establish a strong online presence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-neutral-600 mb-6"
            >
              Our team of experienced designers, developers, and digital strategists work collaboratively to deliver solutions that not only look beautiful but also drive results. We believe in building long-term relationships with our clients, becoming an extension of their team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 mb-8"
            >
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <span className="mr-2 mt-1 text-success-500">
                    <Check size={18} />
                  </span>
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link to="/about" className="btn-primary">
                Learn More About Us
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Our team collaborating"
                className="w-full h-auto"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-primary-200 rounded-full opacity-50 z-0"></div>
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-40 h-40 bg-secondary-200 rounded-full opacity-50 z-0"></div>
            
            {/* Stats card */}
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-lg shadow-lg z-20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">100+</p>
                  <p className="text-sm text-neutral-600">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">10+</p>
                  <p className="text-sm text-neutral-600">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;