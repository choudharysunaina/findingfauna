import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { Link } from "react-router-dom";

const ExperienceSection = () => {
  const benefits = [
    "Creative and innovative design solutions",
    "Expert team with diverse skill sets",
    "Collaborative approach to projects",
    "Dedicated to meeting client goals",
    "Commitment to quality and excellence",
  ];

  return (
    <section className="section bg-neutral-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <SectionHeading
              title="Experience Kuno Safari Through Our Videos"
              center={false}
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-neutral-600 mb-6"
            >
              Watch real safari adventures, wildlife sightings, and travel
              stories from Kuno National Park and beyond. Browse our latest
              YouTube vlogs to see what awaits on your next safari.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button
                onClick={() =>
                  window.open("https://www.youtube.com/@findingfauna", "_blank")
                }
                className="group inline-flex items-center gap-3 border border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white px-3 py-3 rounded-lg shadow-sm transition-all duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 flex-shrink-0"
                >
                  <path
                    className="fill-red-600 group-hover:fill-white transition-colors duration-300"
                    d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C16 4.9 12 4.9 12 4.9s-4 0-6.9.2c-.4.1-1.3.1-2.1.9C2.4 6.6 2.2 8 2.2 8S2 9.6 2 11.3v1.5C2 14.4 2.2 16 2.2 16s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.8.2 6.6.2 6.6.2s4 0 6.9-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8z"
                  />

                  <polygon
                    points="10,15.5 16,12 10,8.5"
                    className="fill-white group-hover:fill-red-600 transition-colors duration-300"
                  />
                </svg>

                <span>Watch on YouTube</span>
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl group">
              {/* Video Thumbnail */}
              <img
                src={`${import.meta.env.BASE_URL}home/cheetahandme.jpg`}
                alt="Kuno Safari Experience Video"
                className="w-full h-auto object-cover cursor-pointer transition-opacity duration-300 group-hover:opacity-80"
              />
              {/* Play Button Overlay */}
              <button
                className="absolute inset-0 flex items-center justify-center text-white text-5xl bg-black bg-opacity-5 transition group-hover:bg-opacity-60"
                aria-label="Play Video"
                onClick={() =>
                  window.open("https://www.youtube.com/@findingfauna", "_blank")
                }
                style={{ outline: "none", border: "none" }}
              >
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <circle cx="32" cy="32" r="32" fill="rgba(0,0,0,0.6)" />
                  <polygon points="26,20 48,32 26,44" fill="white" />
                </svg>
              </button>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-primary-200 rounded-full opacity-50 z-0"></div>
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-40 h-40 bg-secondary-200 rounded-full opacity-50 z-0"></div>

            {/* Stats card */}
            <div className="absolute bottom-6 right-6  bg-white px-3 py-1 rounded-lg shadow-lg z-20">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">100+</p>
                  <p className="text-sm text-neutral-600">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">130K+</p>
                  <p className="text-sm text-neutral-600">Subscribers</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary-600">10+</p>
                  <p className="text-sm text-neutral-600">Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
