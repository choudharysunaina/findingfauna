import { motion } from 'framer-motion';
import SEOHead from '../components/ui/SEOHead';
import TrackedSection from '../components/tracking/TrackedSection';
import ContactInfoPanel from '../components/contact/ContactInfoPanel';
import EnquiryForm from '../components/forms/EnquiryForm';
import { Link } from 'react-router-dom';
import { SITE_URL, BUSINESS } from '../config/site';
import { generateCanonicalUrl, generateBreadcrumbSchema } from '../utils/seoUtils';

const Contact = () => {
  return (
    <>
      <SEOHead
        title="Contact Us — Book a Kuno Safari"
        description="Talk to the naturalists who run the safaris. Call (+91)9893486893, WhatsApp us or send an enquiry to plan dates, permits and stays for Kuno National Park."
        canonical={generateCanonicalUrl('/contact')}
        ogImage="/home/cheetah.webp"
        ogImageAlt="Cheetah in Kuno National Park, Madhya Pradesh"
        ogType="website"
        structuredData={generateBreadcrumbSchema([
          { name: 'Home', url: SITE_URL },
          { name: 'Contact', url: `${SITE_URL}/contact` },
        ])}
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
              Planning a Kuno safari? Tell us your dates and what you most want to
              see, and we will come back within one business day with a plan,
              a price and honest advice on what is realistic.
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

      {/* Location. The site previously had no map or directions anywhere, which
          is a gap for a business whose visitors all have to physically get to a
          fairly remote part of Madhya Pradesh. */}
      <TrackedSection category="contact_page" label="location" className="section bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 font-bold tracking-tight text-2xl md:text-3xl">Find Us</h2>
              <address className="mb-6 not-italic text-lg leading-relaxed text-neutral-700">
                {BUSINESS.legalName}
                <br />
                {BUSINESS.address.street}
                <br />
                {BUSINESS.address.locality}, Shivpuri district
                <br />
                {BUSINESS.address.region} {BUSINESS.address.postalCode}, India
              </address>
              <h3 className="mb-2 font-semibold text-lg">Getting here</h3>
              <p className="mb-4 text-neutral-700">
                We are on the Pohari side of Kuno National Park, closest to the Ahera
                safari gate. Gwalior Airport and Gwalior Junction are about 165 km
                away — roughly three to three and a half hours by road — and Shivpuri
                Railway Station is about 35 km. Every package includes pickup and drop
                at Gwalior.
              </p>
              <Link to="/how-to-reach-kuno" className="font-medium text-primary-700 underline">
                Full directions from Delhi, Jaipur, Agra and Bhopal
              </Link>
            </div>
            <div className="overflow-hidden rounded-xl border border-neutral-200">
              <iframe
                title="Map showing Finding Fauna at Bus Stand Pohari, Shivpuri, near Kuno National Park"
                src={`https://www.google.com/maps?q=${BUSINESS.coordinates.latitude},${BUSINESS.coordinates.longitude}&z=12&output=embed`}
                width="100%"
                height="360"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </TrackedSection>
    </>
  );
};

export default Contact;
