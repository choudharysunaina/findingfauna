import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  placeholder?: string;
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  sizes = '100vw',
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5YWFhYSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
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
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // For now, always show images to debug the issue
    setIsInView(true);
    
    if (priority) {
      setIsInView(true);
      return;
    }

    // Comment out intersection observer temporarily for debugging
    /*
    if (imgRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current?.disconnect();
          }
        },
        {
          rootMargin: '50px',
          threshold: 0.1,
        }
      );

      observerRef.current.observe(imgRef.current);
    }
    */

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [priority]);

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const currentSrc = hasError && normalizedFallbackSrc ? normalizedFallbackSrc : normalizedSrc;

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}

      {/* Main Image */}
      <motion.img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? 'eager' : 'lazy'}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default OptimizedImage;
