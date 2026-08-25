import { motion } from 'framer-motion';
import SEOHead from '../components/ui/SEOHead';
import TrackedSection from '../components/tracking/TrackedSection';
import ContactInfoPanel from '../components/contact/ContactInfoPanel';
import EnquiryForm from '../components/forms/EnquiryForm';
import { SITE_URL } from '../config/site';

const Contact = () => {
  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with us to book your Kuno National Park safari adventure. Contact our expert team for safari packages, wildlife photography tours, and conservation experiences."
        keywords="Contact Kuno Safari, Safari Booking, Wildlife Tour Contact, Safari Packages, Photography Safari, Conservation Tours"
        canonical={`${SITE_URL}/contact`}
        ogImage="/home/cheetah.webp"
        ogType="website"
      />
      {/* Hero Section */}
      <TrackedSection category="contact_page" label="hero" className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Get in <span className="text-primary-600">Touch</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-neutral-700 mb-8"
            >
              Are you planning the safari? We'd love to hear from you. Drop us a line and we'll get back to you as soon as possible.
            </motion.p>
          </div>
        </div>
      </TrackedSection>

      {/* Contact Form Section */}
      <TrackedSection category="contact_page" label="contact_form" className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <ContactInfoPanel category="contact_page" />
            </motion.div>

            {/* Enquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <EnquiryForm gaCategory="contact_page" />
            </motion.div>
          </div>
        </div>
      </TrackedSection>
    </>
  );
};

export default Contact;
