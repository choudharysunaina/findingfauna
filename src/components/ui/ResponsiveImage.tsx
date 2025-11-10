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

  // Generate WebP version path
  const getWebPSrc = (originalSrc: string) => {
    const lastDotIndex = originalSrc.lastIndexOf('.');
    if (lastDotIndex === -1) return originalSrc;
    
    const basePath = originalSrc.substring(0, lastDotIndex);
    const extension = originalSrc.substring(lastDotIndex);
    
    // Only convert common image formats to WebP
    if (['.jpg', '.jpeg', '.png'].includes(extension.toLowerCase())) {
      return `${basePath}.webp`;
    }
    
    return originalSrc;
  };

  const webpSrc = getWebPSrc(normalizedSrc);
  const isWebPSupported = typeof window !== 'undefined' && 'WebP' in window;

  return (
    <picture>
      {/* WebP format for modern browsers */}
      {isWebPSupported && webpSrc !== src && (
        <source
          src={webpSrc}
          type="image/webp"
        />
      )}
      
      {/* Original format as fallback */}
      <source
        src={normalizedSrc}
        type={normalizedSrc.endsWith('.jpg') || normalizedSrc.endsWith('.jpeg') ? 'image/jpeg' : 'image/png'}
      />
      
      {/* Fallback img element */}
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
    </picture>
  );
};

export default ResponsiveImage;
