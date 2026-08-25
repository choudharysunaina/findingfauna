import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME } from '../../config/site';
import { generateMetaDescription, generateOGImageUrl } from '../../utils/seoUtils';

interface SEOHeadProps {
  /**
   * The page's own title. `| Kuno Cheetah Safari` is appended unless the title
   * already names the brand or is long enough that the suffix would be cut off
   * in results — write the keyword-first title you actually want to rank.
   */
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image';
  /** One JSON-LD object, or several to emit as separate script blocks. */
  structuredData?: object | object[];
  /** ISO date (YYYY-MM-DD) for article:published_time. */
  publishedTime?: string | null;
  author?: string;
  noindex?: boolean;
  nofollow?: boolean;
}

/** Roughly the point at which Google truncates a title in desktop results. */
const TITLE_BUDGET = 60;

function buildTitle(title: string): string {
  const suffix = ` | ${SITE_NAME}`;
  const alreadyBranded = title.toLowerCase().includes(SITE_NAME.toLowerCase());
  if (alreadyBranded || title.length + suffix.length > TITLE_BUDGET) return title;
  return `${title}${suffix}`;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonical,
  ogImage = '/home/cheetah.webp',
  ogImageAlt,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  publishedTime,
  author,
  noindex = false,
  nofollow = false,
}) => {
  const fullTitle = buildTitle(title);
  // Descriptions used to have a fixed sentence appended, which pushed every
  // page to 240-390 characters and gave all of them the same ending. Truncate
  // instead, and let each page write its own.
  const metaDescription = generateMetaDescription(description);
  const imageUrl = generateOGImageUrl(ogImage);
  const robots = [noindex ? 'noindex' : 'index', nofollow ? 'nofollow' : 'follow'].join(', ');
  const schemas = structuredData
    ? Array.isArray(structuredData)
      ? structuredData
      : [structuredData]
    : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={ogImageAlt || title} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />
      {ogType === 'article' && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === 'article' && author && <meta property="article:author" content={author} />}

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={ogImageAlt || title} />

      {/* Region hints */}
      <meta name="geo.region" content="IN-MP" />
      <meta name="geo.placename" content="Kuno National Park" />

      {schemas.map((schema, index) => (
        <script type="application/ld+json" key={index}>
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;

/** Re-exported so pages can build canonicals without a second import. */
export { SITE_URL };
