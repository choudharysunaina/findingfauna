import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ResponsiveImage from "../ui/ResponsiveImage";
import TrackedSection from "../tracking/TrackedSection";
import TrackedLink from "../tracking/TrackedLink";

const images = [
  "/home/cheetah.webp",
  "/home/leopard.webp",
  "/home/hyena.webp",
  "/home/tiger.webp",
  "/home/slothbear.webp",
];

const SurpriseSection = () => {
  return (
    <TrackedSection id="services" category="home_wildlife" label="wildlife_encounter" className="section bg-white">
      <div className="container">
        <SectionHeading
          title="Wildlife You May Encounter on a Kuno Safari"
          subtitle="Explore the remarkable biodiversity of Kuno National Park through these incredible wildlife sightings."
          center
        />
        <div className="container">
          {/* 2-column image section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {/* First column: 1 large image */}
            <div className="flex items-center justify-center">
              <ResponsiveImage
                src={images[0]}
                alt="Main Kuno Moment"
                className="w-full h-[480px] object-cover shadow-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
            </div>
            {/* Second column: 4 stacked images */}
            <div className="grid grid-rows-2 grid-cols-2 gap-6 h-[480px]">
              {images.slice(1, 5).map((src, idx) => (
                <ResponsiveImage
                  key={idx}
                  src={src}
                  alt={`Kuno Moment ${idx + 2}`}
                  className="w-full h-full object-cover shadow"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                />
              ))}
            </div>
          </div>

          {/* ...rest of your section (buttons, overlays, etc.) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <TrackedLink category="home_wildlife" label="book_now" to="/contact" className="btn-primary">
              Book Now
            </TrackedLink>
          </motion.div>
        </div>
      </div>
    </TrackedSection>
  );
};

export default SurpriseSection;
