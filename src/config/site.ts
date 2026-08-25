export const SITE_URL = 'https://cheetahsafarikuno.com';

/**
 * Brand shown in page titles and og:site_name. Matches the domain, which is
 * what people see in search results. The trading name of the operator is
 * BUSINESS_NAME below — used in body copy, the footer and schema legalName.
 */
export const SITE_NAME = 'Kuno Cheetah Safari';
export const BUSINESS_NAME = 'Finding Fauna';

export const CONTACT_EMAIL = 'contact@cheetahsafarikuno.com';
export const CONTACT_PHONE = '+919893486893';
/** Same number, formatted for display. Keep in sync with CONTACT_PHONE. */
export const CONTACT_PHONE_DISPLAY = '(+91)9893486893';
export const WHATSAPP_URL = `https://wa.me/${CONTACT_PHONE.replace(/\D/g, '')}`;

/**
 * The single source of truth for the business's name/address/phone.
 *
 * Google cross-checks these against the Google Business Profile and every
 * directory listing, so the strings rendered on /contact, in the footer and in
 * the LocalBusiness JSON-LD must all come from here and must match the Business
 * Profile exactly. They used to disagree: schema claimed locality "Kuno" with a
 * "+91-XXXXXXXXXX" placeholder phone and Mo-Su 06:00-18:00 hours, none of which
 * matched what the pages displayed.
 */
export const BUSINESS = {
  legalName: BUSINESS_NAME,
  /** As printed on the office signage and in the Google Business Profile. */
  displayName: 'Finding Fauna — Kuno Cheetah Safari',
  addressDisplay: 'Bus Stand Pohari, Shivpuri, 473775',
  address: {
    street: 'Bus Stand Pohari',
    locality: 'Pohari',
    region: 'Madhya Pradesh',
    postalCode: '473775',
    country: 'IN',
  },
  // VERIFY: approximate centre of Pohari town. Replace with the exact pin used
  // for the Google Business Profile so the listing and the schema agree.
  coordinates: { latitude: 25.1029, longitude: 77.6636 },
  /** schema.org openingHours — must match the Business Hours card on /contact. */
  openingHours: ['Mo-Fr 09:00-18:00', 'Sa-Su 10:00-16:00'],
  priceRange: '₹₹₹',
} as const;

/**
 * Public profiles, used for both the footer icons and Organization.sameAs.
 * Google reads sameAs to connect the site to the brand's other properties.
 */
export const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/share/1JGyQ8mZVS/?mibextid=wwXIfr',
  instagram: 'https://www.instagram.com/finding_fauna/',
  linkedin: 'https://www.linkedin.com/in/finding-fauna-1820b934a',
  youtube: 'https://www.youtube.com/@findingfauna',
} as const;

// Google Apps Script Web App that receives enquiry submissions and appends
// them to the "Finding Fauna Enquiries" sheet. Paste the deployment's /exec
// URL here (Deploy -> New deployment -> Web app; execute as Me, access Anyone).
// Not a secret — the browser exposes it on every submit.
// Until a real URL is set, the form refuses to submit and shows its error state.
export const ENQUIRY_ENDPOINT =
  'https://script.google.com/macros/s/AKfycbzxN99pxoOPQSR809P49RyWdDRQecV2CkvMJz8tmrJw0zTyYUm6gaxf4KZqPJaRlP0FOw/exec';
