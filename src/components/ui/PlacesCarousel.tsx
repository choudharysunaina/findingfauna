import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ResponsiveImage from './ResponsiveImage';

interface Place {
  name: string;
  image: string;
}

interface PlacesCarouselProps {
  places: Place[];
}

const PlacesCarousel = ({ places }: PlacesCarouselProps) => {
  const [itemsPerView, setItemsPerView] = useState(2);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const updateItemsPerView = () => setItemsPerView(mediaQuery.matches ? 5 : 2);

    updateItemsPerView();
    mediaQuery.addEventListener('change', updateItemsPerView);
    return () => mediaQuery.removeEventListener('change', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(places.length - itemsPerView, 0);

  useEffect(() => {
    setStartIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  const canScrollLeft = startIndex > 0;
  const canScrollRight = startIndex < maxIndex;

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${startIndex * (100 / itemsPerView)}%)` }}
        >
          {places.map((place) => (
            <div
              key={place.name}
              className="flex-shrink-0 px-2"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <div className="relative h-40 md:h-48 rounded-lg overflow-hidden shadow-md group">
                <ResponsiveImage
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-black/40 pointer-events-none" />
                <span className="absolute inset-0 flex items-center justify-center text-white font-semibold text-lg drop-shadow">
                  {place.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {maxIndex > 0 && (
        <>
          <button
            type="button"
            onClick={() => setStartIndex((current) => Math.max(current - 1, 0))}
            disabled={!canScrollLeft}
            aria-label="Previous places"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-800 hover:bg-neutral-100 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => setStartIndex((current) => Math.min(current + 1, maxIndex))}
            disabled={!canScrollRight}
            aria-label="Next places"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-neutral-800 hover:bg-neutral-100 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
    </div>
  );
};

export default PlacesCarousel;
