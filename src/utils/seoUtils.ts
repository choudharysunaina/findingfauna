// Schema.org / meta helpers.
//
// All business facts come from src/config/site.ts so the JSON-LD can never
// drift from what the pages display — Google cross-checks the two, and the
// Google Business Profile against both.
import {
  SITE_URL,
  SITE_NAME,
  BUSINESS_NAME,
  BUSINESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SOCIAL_LINKS,
} from '../config/site';
import type { BlogPost } from '../data/blogData';

/** Truncate a description to a length search engines will actually display. */
export const generateMetaDescription = (description: string, maxLength: number = 160): string => {
  const clean = description.replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLength) return clean;

  const truncated = clean.substring(0, maxLength - 1);
  const lastSpace = truncated.lastIndexOf(' ');
  return `${(lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated).replace(/[,;:.\s]+$/, '')}…`;
};

/** Absolutise an image path for og:image / schema `image`. */
export const generateOGImageUrl = (imagePath: string, domain: string = SITE_URL): string => {
  if (imagePath.startsWith('http')) return imagePath;
  return `${domain}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`;
};

/**
 * Canonical URL for a route. The homepage keeps its trailing slash because
 * that is what the sitemap lists; every other path has none. A mismatch
 * between the two is a duplicate-URL signal.
 */
export const generateCanonicalUrl = (path: string, domain: string = SITE_URL): string => {
  if (path === '/' || path === '') return `${domain}/`;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${domain}${cleanPath.replace(/\/$/, '')}`;
};

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: BUSINESS.address.street,
  addressLocality: BUSINESS.address.locality,
  addressRegion: BUSINESS.address.region,
  postalCode: BUSINESS.address.postalCode,
  addressCountry: BUSINESS.address.country,
};

const geoCoordinates = {
  '@type': 'GeoCoordinates',
  latitude: BUSINESS.coordinates.latitude,
  longitude: BUSINESS.coordinates.longitude,
};

/**
 * The park itself as a destination. Only belongs on /kuno-national-park — it
 * used to be emitted as the default on twelve unrelated pages, which told
 * Google every URL described the same entity.
 */
export const generateTouristDestinationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Kuno National Park',
  description:
    "India's only free-ranging cheetah landscape, spanning 748.76 sq km of dry deciduous forest, grassland and riverine habitat in Sheopur district, Madhya Pradesh.",
  url: `${SITE_URL}/kuno-national-park`,
  image: [
    generateOGImageUrl('/home/cheetah.webp'),
    generateOGImageUrl('/home/leopard.webp'),
    generateOGImageUrl('/home/tiger.webp'),
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sheopur',
    addressRegion: 'Madhya Pradesh',
    addressCountry: 'IN',
  },
  touristType: ['Wildlife Safari', 'Nature Tour', 'Photography Tour', 'Birdwatching'],
  includesAttraction: [
    { '@type': 'TouristAttraction', name: 'Ahera Safari Zone' },
    { '@type': 'TouristAttraction', name: 'Tiktoli Safari Zone' },
    { '@type': 'TouristAttraction', name: 'Peepalbawri Safari Zone' },
    { '@type': 'TouristAttraction', name: 'Kuno River' },
    { '@type': 'TouristAttraction', name: 'Dev Kho' },
  ],
});

export const generateSafariPackageSchema = (data: {
  name: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  includes: string[];
  highlights: string[];
  url?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'TouristTrip',
  name: data.name,
  description: data.description,
  image: generateOGImageUrl(data.image),
  ...(data.url && { url: data.url }),
  provider: {
    '@type': 'TravelAgency',
    name: BUSINESS_NAME,
    url: SITE_URL,
    telephone: CONTACT_PHONE,
  },
  offers: {
    '@type': 'Offer',
    price: data.price,
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    ...(data.url && { url: data.url }),
  },
  touristType: ['Wildlife Safari', 'Nature Tour', 'Photography Tour'],
  itinerary: {
    '@type': 'ItemList',
    itemListElement: data.highlights.map((highlight, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: { '@type': 'Thing', name: highlight },
    })),
  },
  includesObject: data.includes.map((item) => ({
    '@type': 'TypeAndQuantityNode',
    typeOfGood: { '@type': 'Service', name: item },
  })),
});

export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: crumb.url,
  })),
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
});

/**
 * Reviews of the business, attached to the TravelAgency rather than to the
 * park — the ratings are for us, not for Kuno National Park.
 */
export const generateReviewSchema = (
  reviews: Array<{ author: string; rating: number; reviewBody: string; datePublished?: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  '@id': `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  url: SITE_URL,
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: Number(
      (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    ),
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
  },
  review: reviews.map((review) => ({
    '@type': 'Review',
    author: { '@type': 'Person', name: review.author },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.reviewBody,
    ...(review.datePublished && { datePublished: review.datePublished }),
  })),
});

/**
 * The operator as a local business. `TravelAgency` (a LocalBusiness subtype)
 * describes what we actually are — the previous `TouristInformationCenter` did
 * not, and it was never rendered on any page.
 */
export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'TravelAgency',
  '@id': `${SITE_URL}/#business`,
  name: BUSINESS_NAME,
  alternateName: SITE_NAME,
  description:
    'Naturalist-led cheetah and big cat safaris in Kuno National Park, Madhya Pradesh. Gypsy safari permits, guiding, accommodation and Gwalior transfers for families, couples and wildlife photographers.',
  url: SITE_URL,
  logo: generateOGImageUrl('/icons/logo.png'),
  image: generateOGImageUrl('/home/cheetah.webp'),
  telephone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
  address: postalAddress,
  geo: geoCoordinates,
  openingHours: [...BUSINESS.openingHours],
  priceRange: BUSINESS.priceRange,
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, UPI, Bank Transfer',
  areaServed: [
    { '@type': 'Place', name: 'Kuno National Park' },
    { '@type': 'Place', name: 'Madhav National Park' },
    { '@type': 'Place', name: 'Sheopur' },
    { '@type': 'Place', name: 'Shivpuri' },
    { '@type': 'Place', name: 'Gwalior' },
  ],
  sameAs: Object.values(SOCIAL_LINKS),
});

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  legalName: BUSINESS_NAME,
  url: SITE_URL,
  logo: generateOGImageUrl('/icons/logo.png'),
  description:
    'Wildlife safari operator in Kuno National Park, India — guided cheetah and big cat safaris, photography tours and conservation work.',
  address: postalAddress,
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    contactType: 'customer service',
    areaServed: 'IN',
    availableLanguage: ['English', 'Hindi'],
  },
  sameAs: Object.values(SOCIAL_LINKS),
});

/** Lets Google associate the domain with a site name in search results. */
export const generateWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  alternateName: BUSINESS_NAME,
  url: SITE_URL,
  publisher: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'en-IN',
});

/**
 * Article markup for a blog post. Blog pages previously fell through to the
 * generic TouristDestination default, so none of them were eligible for
 * article rich results and none advertised a publication date.
 */
export const generateBlogPostingSchema = (post: BlogPost, canonical: string) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  headline: post.title,
  description: post.excerpt,
  image: generateOGImageUrl(post.coverImage),
  articleSection: post.category,
  wordCount: post.wordCount,
  ...(post.dateISO && { datePublished: post.dateISO, dateModified: post.dateISO }),
  author: { '@type': 'Person', name: post.author },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: { '@type': 'ImageObject', url: generateOGImageUrl('/icons/logo.png') },
  },
  isPartOf: { '@id': `${SITE_URL}/#website` },
});

/** A safari package as a purchasable product, for price-rich results. */
export const generateProductSchema = (data: {
  name: string;
  description: string;
  image: string;
  price: string;
  url: string;
  sku?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: data.name,
  description: data.description,
  image: generateOGImageUrl(data.image),
  ...(data.sku && { sku: data.sku }),
  brand: { '@type': 'Brand', name: BUSINESS_NAME },
  offers: {
    '@type': 'Offer',
    url: data.url,
    price: data.price,
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    seller: { '@id': `${SITE_URL}/#business` },
  },
});
