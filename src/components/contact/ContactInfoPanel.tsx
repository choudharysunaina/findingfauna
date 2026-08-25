import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import TrackedButton from '../tracking/TrackedButton';
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  BUSINESS,
  SOCIAL_LINKS,
  WHATSAPP_URL,
} from '../../config/site';

interface ContactInfoPanelProps {
  /** GA4 category, e.g. 'contact_page' or 'home_contact'. */
  category: string;
}

const socialLinks = [
  {
    label: 'social_facebook',
    href: SOCIAL_LINKS.facebook,
    name: 'Facebook',
    path: 'M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127c-.82-.088-1.643-.13-2.467-.129-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z',
  },
  {
    label: 'social_instagram',
    href: SOCIAL_LINKS.instagram,
    name: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
  },
  {
    label: 'social_linkedin',
    href: SOCIAL_LINKS.linkedin,
    name: 'LinkedIn',
    path: 'M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.48a2.03 2.03 0 110-4.06 2.03 2.03 0 010 4.06zM20.45 20.45h-3.5v-6.2c0-1.48-.03-3.38-2.06-3.38-2.06 0-2.38 1.61-2.38 3.27v6.31H9.71V9h3.36v1.57h.05c.47-.88 1.62-1.81 3.34-1.81 3.58 0 4 2.36 4 5.43v6.26z',
  },
  {
    label: 'social_youtube',
    href: SOCIAL_LINKS.youtube,
    name: 'YouTube',
    path: 'M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 00.5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 002.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 002.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z',
  },
];

/**
 * The contact details column shown beside the enquiry form. Used by both the
 * /contact page and the reusable home ContactSection, which previously carried
 * byte-identical copies of this markup.
 */
const ContactInfoPanel = ({ category }: ContactInfoPanelProps) => (
  <>
    <div className="bg-primary-50 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
      <div className="space-y-6">
        <div className="flex items-start">
          <div className="flex-shrink-0 bg-white rounded-full p-3 mr-4 shadow-sm">
            <MapPin className="text-primary-600" size={24} />
          </div>
          <div>
            <h4 className="font-medium text-lg">Our Location</h4>
            <p className="text-neutral-600">{BUSINESS.addressDisplay}</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-white rounded-full p-3 mr-4 shadow-sm">
            <Mail className="text-primary-600" size={24} />
          </div>
          <div>
            <h4 className="font-medium text-lg">Email Us</h4>
            <TrackedButton
              category={category}
              label="mailto"
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-neutral-600 hover:text-primary-600 transition-colors break-all"
            >
              {CONTACT_EMAIL}
            </TrackedButton>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-white rounded-full p-3 mr-4 shadow-sm">
            <Phone className="text-primary-600" size={24} />
          </div>
          <div>
            <h4 className="font-medium text-lg">Call Us</h4>
            <TrackedButton
              category={category}
              label="tel"
              href={`tel:${CONTACT_PHONE}`}
              className="text-neutral-600 hover:text-primary-600 transition-colors"
            >
              {CONTACT_PHONE_DISPLAY}
            </TrackedButton>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex-shrink-0 bg-white rounded-full p-3 mr-4 shadow-sm">
            <MessageCircle className="text-primary-600" size={24} />
          </div>
          <div>
            <h4 className="font-medium text-lg">WhatsApp</h4>
            <TrackedButton
              category={category}
              label="whatsapp"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-primary-600 transition-colors"
            >
              Message us on WhatsApp
            </TrackedButton>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h4 className="font-semibold text-lg mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          {socialLinks.map((social) => (
            <TrackedButton
              key={social.label}
              category={category}
              label={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white w-10 h-10 rounded-full flex items-center justify-center text-neutral-600 hover:text-primary-600 transition-colors shadow-sm"
              aria-label={social.name}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d={social.path}></path>
              </svg>
            </TrackedButton>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-8 bg-white p-8 rounded-lg border border-neutral-200">
      <h4 className="font-semibold text-lg mb-4">Business Hours</h4>
      <ul className="space-y-3">
        <li className="flex justify-between">
          <span className="text-neutral-600">Mon - Fri:</span>
          <span className="font-medium">9:00 AM - 6:00 PM</span>
        </li>
        <li className="flex justify-between">
          <span className="text-neutral-600">Sat - Sun:</span>
          <span className="font-medium">10:00 AM - 4:00 PM</span>
        </li>
      </ul>
      <p className="mt-4 text-sm text-neutral-500">
        Safari days start well before these hours — for anything urgent on the day of
        travel, call or WhatsApp us any time.
      </p>
    </div>
  </>
);

export default ContactInfoPanel;
