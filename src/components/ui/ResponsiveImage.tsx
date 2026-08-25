import React, { useState } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  /**
   * Intrinsic pixel dimensions. Always pass these where the aspect ratio is
   * known: without them the browser cannot reserve space before the image
   * arrives, which is the main source of layout shift (CLS) on this site.
   */
  width?: number;
  height?: number;
  /**
   * Kept for the call sites that already pass it, but currently inert — there
   * is one WebP per image in public/, so there is no srcSet for `sizes` to
   * choose between. It starts working the moment width variants are generated.
   */
  sizes?: string;
  /** Above-the-fold hero image: loads eagerly at high priority. */
  priority?: boolean;
  fallbackSrc?: string;
}

function withBase(imageSrc: string): string {
  if (imageSrc.startsWith('http') || imageSrc.startsWith('data:') || imageSrc.startsWith('//')) {
    return imageSrc;
  }
  const base = import.meta.env.BASE_URL || '/';
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base;
  if (prefix && imageSrc.startsWith(prefix)) return imageSrc;
  return imageSrc.startsWith('/') ? `${prefix}${imageSrc}` : imageSrc;
}

/**
 * Plain <img> with base-path handling and an optional error fallback.
 *
 * This replaces a ResponsiveImage -> OptimizedImage pair that ran the same
 * path-normalising logic twice and wrapped every image in a fade: the image
 * rendered at opacity-0 behind a visible "Loading..." placeholder until onLoad
 * fired. That hid real content from anything that snapshots the page — it is
 * the reason scripts/prerender.mjs has to sit and wait before capturing — and
 * the IntersectionObserver that was supposed to drive lazy-loading had been
 * commented out "temporarily for debugging" and left dead. Native
 * loading="lazy" does that job without any of it.
 */
const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  sizes,
  priority = false,
  fallbackSrc,
}) => {
  const [failed, setFailed] = useState(false);
  const resolved = withBase(failed && fallbackSrc ? fallbackSrc : src);

  return (
    <img
      src={resolved}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      {...(priority ? { fetchPriority: 'high' as const } : {})}
      decoding="async"
      onError={() => {
        if (fallbackSrc && !failed) setFailed(true);
      }}
    />
  );
};

export default ResponsiveImage;
