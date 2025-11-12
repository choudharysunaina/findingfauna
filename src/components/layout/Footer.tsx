import { Link, NavLink } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Finding Fauna</h4>
            <p className="text-neutral-300 mb-4">
              Exploring the wild, telling its stories, and preserving its future.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1JGyQ8mZVS/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.instagram.com/finding_fauna/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

                     <a 
                href="https://www.linkedin.com/in/finding-fauna-1820b934a" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-300 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-neutral-300 hover:text-white transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-neutral-300 hover:text-white transition-colors">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/packages" className="text-neutral-300 hover:text-white transition-colors">
                  Packages
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  Contact
                </NavLink>
              </li>
               <li>
                <NavLink to="//beyond-safari" className="text-neutral-300 hover:text-white transition-colors">
                  Beyond Safari
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">Packages</h4>
            <ul className="space-y-2">
              <li>
                <NavLink to="/package/kuno-cheetah-safari-package" className="text-neutral-300 hover:text-white transition-colors">
                 Kuno Cheetah Safari
                </NavLink>
              </li>
              <li>
                <NavLink to="/package/big-cat-safari-package" className="text-neutral-300 hover:text-white transition-colors">
                  3 Big Cats Safari
                </NavLink>
              </li>
              <li>
                <NavLink to="/package/photography-package" className="text-neutral-300 hover:text-white transition-colors">
                  4 in 1 Safari
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary-400 flex-shrink-0 mt-1" />
                <span className="text-neutral-300">
                  Bus Stand Pohari, Shivpuri, 473775
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary-400 flex-shrink-0" />
                <a 
                  href="tel:+1234567890" 
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  (+91)6261671283
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary-400 flex-shrink-0" />
                <a 
                  href="mailto:contact.findingfauna@gmail.com" 
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  contact.findingfauna@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-neutral-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-neutral-400 text-sm">
          <p>&copy; {currentYear} Finding Fauna. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
             <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="text-sm hover:underline">
            Terms and Conditions
          </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
