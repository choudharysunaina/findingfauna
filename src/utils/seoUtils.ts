// SEO utility functions

/**
 * Generate page title with brand suffix
 */
export const generatePageTitle = (title: string, brand: string = 'Kuno National Park Safari'): string => {
  return `${title} | ${brand}`;
};

/**
 * Generate meta description with length validation
 */
export const generateMetaDescription = (description: string, maxLength: number = 160): string => {
  if (description.length <= maxLength) return description;
  
  // Truncate at word boundary
  const truncated = description.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
};

/**
 * Generate Open Graph image URL
 */
export const generateOGImageUrl = (imagePath: string, domain: string = 'https://kunosafari.com'): string => {
  if (imagePath.startsWith('http')) return imagePath;
  return `${domain}${imagePath}`;
};

/**
 * Generate canonical URL
 */
export const generateCanonicalUrl = (path: string, domain: string = 'https://kunosafari.com'): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${domain}${cleanPath}`;
};

/**
 * Generate structured data for tourist destination
 */
export const generateTouristDestinationSchema = (data: {
  name: string;
  description: string;
  image: string;
  address: {
    locality: string;
    region: string;
    country: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  telephone?: string;
  priceRange?: string;
  openingHours?: string;
  amenities?: string[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": data.name,
    "description": data.description,
    "url": "https://kunosafari.com",
    "image": generateOGImageUrl(data.image),
    "address": {
      "@type": "PostalAddress",
      "addressLocality": data.address.locality,
      "addressRegion": data.address.region,
      "addressCountry": data.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": data.coordinates.latitude,
      "longitude": data.coordinates.longitude
    },
    ...(data.telephone && { "telephone": data.telephone }),
    ...(data.priceRange && { "priceRange": data.priceRange }),
    ...(data.openingHours && { "openingHours": data.openingHours }),
    ...(data.amenities && {
      "amenityFeature": data.amenities.map(amenity => ({
        "@type": "LocationFeatureSpecification",
        "name": amenity,
        "value": true
      }))
    })
  };
};

/**
 * Generate structured data for safari package
 */
export const generateSafariPackageSchema = (data: {
  name: string;
  description: string;
  image: string;
  price: string;
  duration: string;
  includes: string[];
  highlights: string[];
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": data.name,
    "description": data.description,
    "image": generateOGImageUrl(data.image),
    "offers": {
      "@type": "Offer",
      "price": data.price,
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "touristType": "Wildlife Safari",
    "touristType": "Nature Tour",
    "touristType": "Photography Tour",
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": data.highlights.map((highlight, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Thing",
          "name": highlight
        }
      }))
    },
    "includes": data.includes
  };
};

/**
 * Generate breadcrumb structured data
 */
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  };
};

/**
 * Generate FAQ structured data
 */
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

/**
 * Generate review structured data
 */
export const generateReviewSchema = (reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Kuno National Park",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
      "reviewCount": reviews.length
    },
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.author
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5
      },
      "reviewBody": review.reviewBody,
      "datePublished": review.datePublished
    }))
  };
};

/**
 * Generate local business structured data
 */
export const generateLocalBusinessSchema = (data: {
  name: string;
  description: string;
  telephone: string;
  email: string;
  address: {
    street: string;
    locality: string;
    region: string;
    postalCode: string;
    country: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  priceRange: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    "name": data.name,
    "description": data.description,
    "telephone": data.telephone,
    "email": data.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.address.street,
      "addressLocality": data.address.locality,
      "addressRegion": data.address.region,
      "postalCode": data.address.postalCode,
      "addressCountry": data.address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": data.coordinates.latitude,
      "longitude": data.coordinates.longitude
    },
    "openingHours": data.openingHours,
    "priceRange": data.priceRange,
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, Online Payment"
  };
};

/**
 * Generate organization structured data
 */
export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kuno National Park Safari",
    "url": "https://kunosafari.com",
    "logo": "https://kunosafari.com/black_logo.png",
    "description": "Premier wildlife safari operator in Kuno National Park, offering guided tours, photography packages, and conservation experiences.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kuno",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "English, Hindi"
    },
    "sameAs": [
      "https://www.facebook.com/share/1JGyQ8mZVS/?mibextid=wwXIfr",
      "https://www.instagram.com/finding_fauna/",
      "https://www.linkedin.com/in/finding-fauna-1820b934a"
    ]
  };
};
