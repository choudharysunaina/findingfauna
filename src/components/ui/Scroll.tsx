'use client'

import { FEATURES } from '@/Constants'
import React, { useRef } from 'react';


const Scroll = () => {

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-20 pb-20">
    <h1 className="bold-120 lg:bold-100 text-center text-4xl pb-8">why safari with finding fauna</h1>
    <h2 className="bold-120 lg:bold-100 text-center text-2xl pb-8 max-w-[50%] mx-auto">This is the space to introduce the Features section. Use this space to highlight your unique aspects and to present specific credentials, benefits or special features you offer.</h2>
    <div className="overflow-x-auto ">
      <div className="flex gap-4 overflow-x-auto scroll-smooth"
       ref={scrollContainerRef}
       >
        {FEATURES.map(scroll => (
            <div key={scroll.id} className=" bg-gray-100 min-w-[300px] p-4 rounded-lg shadow-md flex flex-col items-center text-center">
                <img src={scroll.image} alt={scroll.title} width={50} height={50} className="mb-4"/>
                <h2 className="text-lg font-bold mb-2">{scroll.title}</h2>
                <p className="text-sm text-gray-700 mb-4">{scroll.subtitle}</p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">{scroll.link}</button>
            </div>
        ))}
    </div>
     {/* Left Scroll Button */}
     <button
          onClick={scrollLeft}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
          aria-label="Scroll Left"
        >
          &#8592;
        </button>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10"
          aria-label="Scroll Right"
        >
          &#8594;
        </button>
  </div>
</div>
);
}

export default Scroll
