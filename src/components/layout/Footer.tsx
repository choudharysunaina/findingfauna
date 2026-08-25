import { Link, NavLink } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { trackEvent } from '../../utils/analytics';
import { guides } from '../../data/guides';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  BUSINESS,
  SOCIAL_LINKS,
} from '../../config/site';

// Scrolls to top on internal nav and records a GA4 footer click.
const handleClick = (label: string) => () => {
  window.scrollTo(0, 0);
  trackEvent({ category: 'footer', action: 'click', label });
};

// Records a GA4 footer click without scrolling (external / tel / mail links).
const trackFooter = (label: string) => () => {
  trackEvent({ category: 'footer', action: 'click', label });
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Finding Fauna</h4>
            <p className="text-neutral-300 mb-4">
              Exploring the wild, telling its stories, and preserving its future.
            </p>
            {/* Same set as Organization.sameAs in seoUtils — both read
                SOCIAL_LINKS, so a profile added there shows up in the footer
                and in the structured data together. YouTube was previously
                linked only from the homepage video section and was missing
                from sameAs entirely, despite being the largest channel. */}
            <div className="flex space-x-4">
              {(
                [
                  ['facebook', 'Facebook', Facebook],
                  ['instagram', 'Instagram', Instagram],
                  ['youtube', 'YouTube', Youtube],
                  ['linkedin', 'LinkedIn', Linkedin],
                ] as const
              ).map(([key, label, Icon]) => (
                <a
                  key={key}
                  href={SOCIAL_LINKS[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackFooter(`social_${key}`)}
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <NavLink onClick={handleClick('quicklink_home')} to="/" className="text-neutral-300 hover:text-white transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick('quicklink_about')} to="/about" className="text-neutral-300 hover:text-white transition-colors">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick('quicklink_packages')} to="/packages" className="text-neutral-300 hover:text-white transition-colors">
                  Packages
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick('quicklink_contact')} to="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  Contact
                </NavLink>
              </li>
               <li>
                <NavLink onClick={handleClick('quicklink_beyond_safari')} to="/beyond-safari" className="text-neutral-300 hover:text-white transition-colors">
                  Beyond Safari
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick('quicklink_kuno_national_park')} to="/kuno-national-park" className="text-neutral-300 hover:text-white transition-colors">
                  Kuno National Park
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick('quicklink_blog')} to="/blogs" className="text-neutral-300 hover:text-white transition-colors">
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Planning guides. Sourced from src/data/guides.ts so the footer,
              the nav dropdown and the guides' own cross-links never diverge. */}
          <div>
            <h4 className="text-xl font-bold mb-4">Plan Your Trip</h4>
            <ul className="space-y-2">
              {guides.map((guide) => (
                <li key={guide.path}>
                  <NavLink
                    onClick={handleClick(`guide_${guide.path.replace(/\//g, '')}`)}
                    to={guide.path}
                    className="text-neutral-300 hover:text-white transition-colors"
                  >
                    {guide.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">Packages</h4>
            <ul className="space-y-2">
              <li>
                <NavLink onClick={handleClick('package_kuno_cheetah')} to="/package/kuno-cheetah-safari-package" className="text-neutral-300 hover:text-white transition-colors">
                 Kuno Cheetah Safari
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick('package_big_cats')} to="/package/big-cat-safari-package" className="text-neutral-300 hover:text-white transition-colors">
                  3 Big Cats Safari
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClick('package_4in1')} to="/package/photography-package" className="text-neutral-300 hover:text-white transition-colors">
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
                <span className="text-neutral-300">{BUSINESS.addressDisplay}</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary-400 flex-shrink-0" />
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  onClick={trackFooter('tel')}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary-400 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  onClick={trackFooter('mailto')}
                  className="text-neutral-300 hover:text-white transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-neutral-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-neutral-400 text-sm">
          <p>&copy; {currentYear} Finding Fauna. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
             <Link onClick={handleClick('privacy_policy')} to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link onClick={handleClick('terms_and_conditions')} to="/terms-and-conditions" className="text-sm hover:underline">
            Terms and Conditions
          </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
