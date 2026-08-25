import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import TrackedSection from "../tracking/TrackedSection";
import TrackedLink from "../tracking/TrackedLink";

export interface AccommodationOption {
  id: string;
  type: string;
  subtitle?: string;
  description?: string;
  image: string;
  features: string[];
  tags?: string[];
  price?: string;
  buttonLabel?: string;
  buttonColorClass?: string;
  bookLink?: string;
}

interface AccommodationOptionsProps {
  category: string;
  title?: string;
  subtitle?: string;
  options: AccommodationOption[];
}

const AccommodationOptions = ({
  category,
  title = "Accommodation Options",
  subtitle = "Choose from our carefully selected accommodation options to complement your wildlife adventure",
  options,
}: AccommodationOptionsProps) => {
  return (
    <TrackedSection category={category} label="accommodation" className="section bg-white">
      <div className="container">
        <SectionHeading title={title} subtitle={subtitle} center />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {options.map((option, index) => (
            <motion.div
              key={option.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img loading="lazy" decoding="async"
                  src={option.image}
                  alt={`${option.type} accommodation near Kuno National Park`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{option.type}</h3>
                  {option.subtitle && (
                    <p className="text-blue-100 text-sm">{option.subtitle}</p>
                  )}
                </div>
              </div>

              <div className="p-4">
                {option.description && (
                  <p className="text-gray-600 mb-4 leading-relaxed">{option.description}</p>
                )}

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {option.tags ? "Features:" : "Why Choose This Package?"}
                  </h4>
                  <ul className="space-y-2">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {option.tags && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Perfect For:</h4>
                    <div className="flex flex-wrap gap-2">
                      {option.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {option.price ? (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Packages starting from</p>
                        <p className="text-2xl font-bold text-forest-600">
                          {option.price}
                          <span className="text-sm font-normal text-gray-500">/person</span>
                        </p>
                      </div>
                      <TrackedLink
                        category={category}
                        label={`book_now_${option.id}`}
                        to={option.bookLink || "/contact"}
                        className="btn-primary"
                      >
                        {option.buttonLabel || "Book now"}
                      </TrackedLink>
                    </div>
                  </div>
                ) : (
                  <TrackedLink
                    category={category}
                    label={`book_now_${option.id}`}
                    to={option.bookLink || "/contact"}
                    className={
                      option.buttonColorClass ||
                      "w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    }
                  >
                    {option.buttonLabel || "Book now"}
                  </TrackedLink>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </TrackedSection>
  );
};

export default AccommodationOptions;
