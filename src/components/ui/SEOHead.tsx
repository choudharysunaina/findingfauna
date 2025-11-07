import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = 'Kuno National Park, Cheetah Safari, Wildlife Safari, Madhya Pradesh, India, Wildlife Conservation, Safari Packages, Photography Safari',
  canonical,
  ogImage = '/cheetah.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
  nofollow = false,
}) => {
  const fullTitle = `${title} | Kuno National Park Safari`;
  const fullDescription = `${description} Experience the thrill of spotting wild cheetahs, leopards, and diverse wildlife in India's premier national park.`;
  
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    "name": "Kuno National Park",
    "description": "Experience the thrill of spotting wild cheetahs, leopards, and diverse wildlife in India's premier national park.",
    "url": "https://kunosafari.com",
    "image": [
      "https://kunosafari.com/cheetah.jpg",
      "https://kunosafari.com/leopard.jpg",
      "https://kunosafari.com/wildlife.jpg"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kuno",
      "addressRegion": "Madhya Pradesh",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.5,
      "longitude": 77.5
    },
    "telephone": "+91-XXXXXXXXXX",
    "priceRange": "₹₹₹",
    "openingHours": "Mo-Su 06:00-18:00",
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Safari Tours",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Wildlife Photography",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Expert Guides",
        "value": true
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Kuno National Park Safari" />
      <meta name="robots" content={noindex ? 'noindex' : nofollow ? 'nofollow' : 'index, follow'} />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || window.location.href} />
      <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `https://kunosafari.com${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Kuno National Park Safari" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `https://kunosafari.com${ogImage}`} />
      <meta name="twitter:site" content="@kunosafari" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#059669" />
      <meta name="msapplication-TileColor" content="#059669" />
      
      {/* Language and Region */}
      <meta httpEquiv="content-language" content="en" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-MP" />
      <meta name="geo.placename" content="Kuno National Park" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Helmet>
  );
};

export default SEOHead;
