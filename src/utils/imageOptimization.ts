// Image optimization utilities

/**
 * Check if WebP is supported in the browser
 */
export const isWebPSupported = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

/**
 * Generate responsive image sizes for different breakpoints
 */
export const getResponsiveSizes = (
  mobile: string = '100vw',
  tablet: string = '50vw',
  desktop: string = '33vw'
): string => {
  return `(max-width: 640px) ${mobile}, (max-width: 1024px) ${tablet}, ${desktop}`;
};

/**
 * Generate optimized image paths for different formats
 */
export const getOptimizedImagePath = (
  originalPath: string,
  format: 'webp' | 'jpg' | 'jpeg' | 'png' = 'webp'
): string => {
  const lastDotIndex = originalPath.lastIndexOf('.');
  if (lastDotIndex === -1) return originalPath;
  
  const basePath = originalPath.substring(0, lastDotIndex);
  const extension = originalPath.substring(lastDotIndex);
  
  // Only convert common image formats
  if (['.jpg', '.jpeg', '.png'].includes(extension.toLowerCase())) {
    return `${basePath}.${format}`;
  }
  
  return originalPath;
};

/**
 * Preload critical images for better performance
 */
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Generate placeholder image data URL
 */
export const generatePlaceholder = (width: number, height: number, text: string = 'Loading...'): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    ctx.fillStyle = '#f3f4f6';
    ctx.fillRect(0, 0, width, height);
    
    ctx.fillStyle = '#9ca3af';
    ctx.font = '14px Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);
  }
  
  return canvas.toDataURL();
};

/**
 * Calculate optimal image dimensions based on container
 */
export const calculateImageDimensions = (
  containerWidth: number,
  containerHeight: number,
  aspectRatio: number = 16 / 9
): { width: number; height: number } => {
  const containerAspectRatio = containerWidth / containerHeight;
  
  if (containerAspectRatio > aspectRatio) {
    // Container is wider than image
    return {
      width: containerHeight * aspectRatio,
      height: containerHeight
    };
  } else {
    // Container is taller than image
    return {
      width: containerWidth,
      height: containerWidth / aspectRatio
    };
  }
};
