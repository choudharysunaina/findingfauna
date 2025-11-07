import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import SEOHead from '../components/ui/SEOHead';
import React from "react";
import FormfacadeEmbed from "@formfacade/embed-react";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  package: string;
  date: Date;
  country: string;
}

const Contact = () => {
  useEffect(() => {
    // Update page title
    document.title = 'Contact Us | Kuno National Park Safari';
  }, []);

  const FORMFACADE_URL = "https://formfacade.com/include/107158526305467619528/form/1FAIpQLSflJc_lNYFUiJYaCI_JYkYOv3O3JbUFx5ERTf6qMHWZlWhlag/classic.js/?div=ff-compose";
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>();

   const prefillForm = () => {
    // Optional: Refer to the provided link to find the entry IDs for prefilling input fields:
    // https://formfacade.com/website/does-formfacade-support-pre-filled-survey-links-like-native-google-forms-on-1FAIpQLSfGvg22V7Lzyw_5AEbKBSpklS_TMw6tKxcQiDqlC9KvfBVTgQ.html

    return {
      "entry.1297600622": "@formfacade/embed-react",
      "entry.813617742": `${new Date()}`,
    };
  };

   const onSubmitForm = () => {
    // Add your specific form submission handling code below.
    console.log("----FORM SUBMITTED----");
  };

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };

  return (
    <>
      <SEOHead
        title="Contact Us"
        description="Get in touch with us to book your Kuno National Park safari adventure. Contact our expert team for safari packages, wildlife photography tours, and conservation experiences."
        keywords="Contact Kuno Safari, Safari Booking, Wildlife Tour Contact, Safari Packages, Photography Safari, Conservation Tours"
        canonical="https://kunosafari.com/contact"
        ogImage="/cheetah.jpg"
        ogType="website"
      />
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
      </section>

      {/* Contact Form Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="bg-primary-50 p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-white rounded-full p-3 mr-4 shadow-sm">
                      <MapPin className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Our Location</h4>
                      <p className="text-neutral-600">
                         Bus Stand Pohari, Shivpuri, 473775
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-white rounded-full p-3 mr-4 shadow-sm">
                      <Mail className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Email Us</h4>
                      <a
                        href="mailto:contact.findingfauna@gmail.com"
                        className="text-neutral-600 hover:text-primary-600 transition-colors"
                      >
                        contact.findingfauna@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-white rounded-full p-3 mr-4 shadow-sm">
                      <Phone className="text-primary-600" size={24} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Call Us</h4>
                      <a
                        href="tel:+916261671283"
                        className="text-neutral-600 hover:text-primary-600 transition-colors"
                      >
                        (+91)6261671283
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/share/1JGyQ8mZVS/?mibextid=wwXIfr" 
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-neutral-600 hover:text-primary-600 transition-colors shadow-sm"
                      aria-label="Facebook"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127c-.82-.088-1.643-.13-2.467-.129-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                      </svg>
                    </a>
                    <a 
                      href="https://www.instagram.com/finding_fauna/" 
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-neutral-600 hover:text-primary-600 transition-colors shadow-sm"
                      aria-label="Instagram"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/finding-fauna-1820b934a" 
                      className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-neutral-600 hover:text-primary-600 transition-colors shadow-sm"
                      aria-label="LinkedIn"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-label="LinkedIn">
  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.48a2.03 2.03 0 110-4.06 2.03 2.03 0 010 4.06zM20.45 20.45h-3.5v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.61-2.38 3.27v6.31H9.71V9h3.36v1.57h.05c.47-.88 1.62-1.81 3.34-1.81 3.58 0 4 2.36 4 5.43v6.26z"></path>
</svg>

                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white p-8 rounded-lg border border-neutral-200">
                <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-neutral-600">Saturday-Sunday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          
          {/* Contact Form - Formfacade*/}   
             <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
             <div>
            <FormfacadeEmbed
              formFacadeURL={FORMFACADE_URL}
              onSubmitForm={onSubmitForm}
              // Optional: Use prefillForm to prefill form fields. See prefillForm function for details. Remove if not required.
              prefillForm={prefillForm}
            />
            </div>
          </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
