import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import TrackedSection from '../tracking/TrackedSection';
import ContactInfoPanel from '../contact/ContactInfoPanel';
import EnquiryForm from '../forms/EnquiryForm';

interface ContactSectionProps {
  /** Preselects a package radio in the form — pass a package title. */
  defaultPackage?: string;
}

const ContactSection = ({ defaultPackage }: ContactSectionProps) => {
  return (
    <TrackedSection category="home_contact" label="get_in_touch" className="section bg-white">
      <div className="container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Planning a safari? Let’s talk—share your details and we’ll get back quickly."
          center
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <ContactInfoPanel category="home_contact" />
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <EnquiryForm gaCategory="home_contact" defaultPackage={defaultPackage} />
          </motion.div>
        </div>
      </div>
    </TrackedSection>
  );
};

export default ContactSection;
