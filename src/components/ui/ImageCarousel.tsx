import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ResponsiveImage from './ResponsiveImage';

export interface CarouselImage {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  className?: string;
  intervalMs?: number;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
  }),
  center: {
    x: 0,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? '-100%' : '100%',
  }),
};

const ImageCarousel = ({ images, className = '', intervalMs = 3000 }: ImageCarouselProps) => {
  const [[index, direction], setSlide] = useState<[number, number]>([0, 1]);

  const goTo = (newIndex: number, dir: number) => {
    setSlide([(newIndex + images.length) % images.length, dir]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(([current]) => [(current + 1) % images.length, 1]);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs, index]);

  const current = images[index];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <ResponsiveImage
            src={current.src}
            alt={current.alt}
            className="w-full h-full object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > index ? 1 : -1)}
            aria-label={`Go to image ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
