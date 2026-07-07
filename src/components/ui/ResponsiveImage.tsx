import React from 'react';
import OptimizedImage from './OptimizedImage';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  priority = false,
  fallbackSrc,
  onLoad,
  onError,
}) => {
  // Handle base path for absolute paths
  const getBasePath = () => {
    const base = import.meta.env.BASE_URL || '/';
    // Remove trailing slash for consistency
    return base.endsWith('/') ? base.slice(0, -1) : base;
  };
  
  const normalizeSrc = (imageSrc: string) => {
    // Skip if already has base path, is external URL, or data URI
    if (imageSrc.startsWith('http') || imageSrc.startsWith('data:') || imageSrc.startsWith('//')) {
      return imageSrc;
    }
    
    const basePath = getBasePath();
    // Check if base path is already included
    if (imageSrc.startsWith(basePath)) {
      return imageSrc;
    }
    
    // Add base path if it starts with /
    if (imageSrc.startsWith('/')) {
      return `${basePath}${imageSrc}`;
    }
    
    return imageSrc;
  };

  const normalizedSrc = normalizeSrc(src);
  const normalizedFallbackSrc = fallbackSrc ? normalizeSrc(fallbackSrc) : undefined;

  // Assets in public/ are pre-optimized WebP, so no <picture>/<source> switching is needed
  return (
    <OptimizedImage
      src={normalizedSrc}
      alt={alt}
      className={className}
      sizes={sizes}
      priority={priority}
      fallbackSrc={normalizedFallbackSrc}
      onLoad={onLoad}
      onError={onError}
    />
  );
};

export default ResponsiveImage;
