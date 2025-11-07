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

  const webpSrc = getWebPSrc(src);
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
        src={src}
        type={src.endsWith('.jpg') || src.endsWith('.jpeg') ? 'image/jpeg' : 'image/png'}
      />
      
      {/* Fallback img element */}
      <OptimizedImage
        src={src}
        alt={alt}
        className={className}
        sizes={sizes}
        priority={priority}
        fallbackSrc={fallbackSrc}
        onLoad={onLoad}
        onError={onError}
      />
    </picture>
  );
};

export default ResponsiveImage;
