import ResponsiveImage from '../ui/ResponsiveImage';
import TrackedSection from '../tracking/TrackedSection';

const MomentsSection = () => {
  return (
    <TrackedSection id="moments" category="home_moments" label="moments" className="section bg-white">
      <div className="container">
        {/* Two-column layout: image left, box right */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10 mt-16">
          {/* Image Column */}
          <div className="flex-[3] w-full max-w-5xl relative">
            <ResponsiveImage
              src="/home/overlay1.webp"
              width={800}
              height={450}
              alt="Kuno National Park Moment"
              className="w-full h-[450px] object-cover shadow-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 800px"
            />
            {/* Box overlays image on mobile */}
            <div
              className="lg:hidden absolute left-1/2 transform -translate-x-1/2"
              style={{
                top: '50%', // Adjusted to prevent overlap
                width: '90%',
                background: 'rgba(255,255,255,0.92)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                zIndex: 10,
              }}
            >
              <h2 className="text-xl font-bold mb-4 text-black">Moments from Kuno National Park</h2>
              <p className="text-sm text-gray-700 mb-6">
                Experience the unforgettable moments captured at Kuno National Park. From the majestic cheetah to the vibrant wildlife, every visit is a new adventure.
              </p>
            </div>
          </div>
          {/* Box Column (desktop view) */}
          <div className="hidden lg:block flex-1 relative" style={{ minWidth: 0 }}>
            <div
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-50 shadow-xl p-8 h-auto flex flex-col justify-center"
              style={{
                width: '500px',
                zIndex: 2,
                borderRadius: '0.75rem',
              }}
            >
              <h2 className="text-2xl font-bold mb-4 text-black">The Only Place to See Wild Cheetahs in India</h2>
              <p className="text-base text-gray-700 mb-6">
                Kuno National Park is the only place in India to see wild cheetahs—brought back after decades through the landmark “Project Cheetah,” making each sighting a rare and historic moment.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-20"> {/* Added margin to prevent overlap */}
        {/* Two-column layout: box left, image right */}
        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Box Column (desktop view) */}
          <div className="hidden lg:block flex-1 relative" style={{ minWidth: 0 }}>
            <div
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-50 shadow-xl p-8 h-auto flex flex-col justify-center"
              style={{
                width: '500px',
                zIndex: 2,
                borderRadius: '0.75rem',
              }}
            >
              <h2 className="text-2xl font-bold mb-4 text-black">Kuno's Giants: India's Biggest Leopards</h2>
              <p className="text-base text-gray-700 mb-6">
                Kuno National Park is home to some of India’s largest leopards, thriving in its rich habitat. Spotting these elusive predators is a thrilling safari highlight.
              </p>
            </div>
          </div>
          {/* Image Column */}
          <div className="flex-[3] w-full max-w-5xl relative">
            <ResponsiveImage
              src="/home/overlay2.webp"
              width={800}
              height={450}
              alt="Kuno National Park Moment"
              className="w-full h-[450px] object-cover shadow-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 800px"
            />
            {/* Box overlays image on mobile */}
            <div
              className="lg:hidden absolute left-1/2 transform -translate-x-1/2"
              style={{
                top: '50%', // Adjusted to prevent overlap
                width: '90%',
                background: 'rgba(255,255,255,0.92)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.15)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                zIndex: 10,
              }}
            >
              <h2 className="text-xl font-bold mb-4 text-black">Kuno's Giants: India's Biggest Leopards</h2>
              <p className="text-sm text-gray-700 mb-6">
                Kuno National Park is home to some of India’s largest leopards, thriving in its rich habitat. Spotting these elusive predators is a thrilling safari highlight.
              </p>
            </div>
          </div>
        </div>
      </div>
    </TrackedSection>
  );
};

export default MomentsSection;
