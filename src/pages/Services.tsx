import { useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { 
  Code, 
  PaintBucket, 
  Smartphone, 
  LineChart, 
  Globe, 
  Users, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Our Services | Nivedya';
  }, []);

  const services = [
    {
      icon: <PaintBucket size={32} />,
      title: 'UI/UX Design',
      description: 'We create intuitive, user-centered designs that enhance user experience and engagement. Our design process involves thorough research, wireframing, prototyping, and usability testing to ensure optimal results.',
      features: [
        'User Research & Personas',
        'Wireframing & Prototyping',
        'Interactive Design',
        'Usability Testing',
        'Responsive Design',
      ],
    },
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Our expert development team builds custom websites and web applications using the latest technologies and best practices. We focus on creating scalable, maintainable, and high-performance solutions.',
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'Content Management Systems',
        'Web Application Development',
        'API Integration',
      ],
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile Development',
      description: 'We develop native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices. Our mobile solutions are designed for performance, usability, and scalability.',
      features: [
        'iOS & Android Development',
        'Cross-Platform Development',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Ongoing Support & Maintenance',
      ],
    },
    {
      icon: <LineChart size={32} />,
      title: 'Digital Marketing',
      description: 'Our data-driven marketing strategies help businesses increase visibility, engagement, and conversions. We develop comprehensive digital marketing plans tailored to your specific goals and target audience.',
      features: [
        'Search Engine Marketing',
        'Social Media Marketing',
        'Email Marketing Campaigns',
        'Content Marketing Strategy',
        'Analytics & Reporting',
      ],
    },
    {
      icon: <Globe size={32} />,
      title: 'SEO Optimization',
      description: `We improve your website's visibility in search engine results through comprehensive SEO strategies. Our approach combines technical optimization, content strategy, and link building to achieve sustainable results.`,
      features: [
        'Keyword Research & Strategy',
        'On-Page & Off-Page SEO',
        'Technical SEO Audits',
        'Local SEO Optimization',
        'SEO Performance Tracking',
      ],
    },
    {
      icon: <Users size={32} />,
      title: 'Branding',
      description: 'We help businesses establish a distinctive and memorable brand identity. Our branding services include visual identity design, brand strategy, and messaging that resonates with your target audience.',
      features: [
        'Brand Strategy Development',
        'Logo & Visual Identity Design',
        'Brand Guidelines',
        'Messaging & Tone of Voice',
        'Brand Collateral Design',
      ],
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
              Our <span className="text-primary-600">Services</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-neutral-700 mb-8"
            >
              We offer a comprehensive range of digital services to help your business thrive online. From design to development to marketing, we've got you covered.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 gap-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 !== 0 ? 'order-1 lg:order-2' : ''}>
                  <div className="w-16 h-16 flex items-center justify-center rounded-lg bg-primary-100 text-primary-600 mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-neutral-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-success-500 mr-2">
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.6663 5L7.49967 14.1667L3.33301 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                  >
                    Request a Quote
                    <ArrowRight className="ml-2" size={18} />
                  </Link>
                </div>
                
                <div className={`relative ${index % 2 !== 0 ? 'order-2 lg:order-1' : ''}`}>
                  <div className="rounded-lg overflow-hidden shadow-lg relative z-10">
                    <img
                      src={`https://images.pexels.com/photos/${3000 + index}/pexels-photo-${3000 + index}.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
                      alt={service.title}
                      className="w-full h-auto"
                    />
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 -mt-6 -mr-6 w-24 h-24 bg-primary-200 rounded-full opacity-70 z-0"></div>
                  <div className="absolute bottom-0 left-0 -mb-6 -ml-6 w-32 h-32 bg-secondary-200 rounded-full opacity-70 z-0"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-neutral-50">
        <div className="container">
          <SectionHeading
            title="Our Process"
            subtitle="We follow a structured approach to ensure successful project delivery."
            center
          />
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process steps */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform -translate-x-1/2"></div>
              
              {[
                {
                  number: '01',
                  title: 'Discovery & Research',
                  description: 'We start by understanding your business, goals, target audience, and competition to establish a solid foundation for the project.',
                },
                {
                  number: '02',
                  title: 'Planning & Strategy',
                  description: 'Based on our research, we develop a comprehensive strategy and project plan with clear milestones and deliverables.',
                },
                {
                  number: '03',
                  title: 'Design & Prototyping',
                  description: 'We create wireframes and visual designs, iterating based on your feedback until we achieve the perfect look and feel.',
                },
                {
                  number: '04',
                  title: 'Development & Implementation',
                  description: 'Our development team brings the designs to life, focusing on clean code, performance, and best practices.',
                },
                {
                  number: '05',
                  title: 'Testing & Quality Assurance',
                  description: 'We rigorously test all aspects of the project to ensure it meets our high standards for quality and performance.',
                },
                {
                  number: '06',
                  title: 'Launch & Ongoing Support',
                  description: 'After launch, we provide ongoing support and maintenance to ensure continued success and optimization.',
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col lg:flex-row gap-8 mb-12 ${
                    index % 2 === 0 ? 'lg:text-right' : ''
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-neutral-600">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-24 flex items-center justify-center lg:justify-start">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl lg:text-2xl font-bold z-10">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className={`flex-1 hidden lg:block ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary-600 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Start Your Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg opacity-90 mb-8"
            >
              Contact us today to discuss your project requirements and how we can help bring your vision to life.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/contact"
                className="bg-white text-primary-600 hover:bg-neutral-100 transition-colors px-8 py-3 rounded-md font-semibold inline-block"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;