import { Link } from "react-router-dom";
import SectionHeading from "../ui/SectionHeading";
import ResponsiveImage from "../ui/ResponsiveImage";
import TrackedSection from "../tracking/TrackedSection";

/**
 * Species named alongside each photograph, so the section says what is in the
 * frame. The alt text used to read "Main Kuno Moment" and "Kuno Moment 2"–"5",
 * which described nothing, and a strong heading sat above five images with no
 * body copy at all.
 */
const species = [
  {
    src: "/home/cheetah.webp",
    name: "Cheetah",
    alt: "Wild cheetah in the open grasslands of Kuno National Park, Madhya Pradesh",
  },
  {
    src: "/home/leopard.webp",
    name: "Leopard",
    alt: "Leopard resting on a branch in dry deciduous forest at Kuno National Park",
  },
  {
    src: "/home/hyena.webp",
    name: "Striped hyena",
    alt: "Striped hyena photographed on an evening safari in Kuno National Park",
  },
  {
    src: "/home/tiger.webp",
    name: "Tiger",
    alt: "Tiger in Madhav National Park, near Kuno in Shivpuri, Madhya Pradesh",
  },
  {
    src: "/home/slothbear.webp",
    name: "Sloth bear",
    alt: "Sloth bear foraging near rocky outcrops in Kuno National Park",
  },
];

const SurpriseSection = () => {
  return (
    <TrackedSection id="services" category="home_wildlife" label="wildlife_encounter" className="section bg-white">
        <SectionHeading
          title="Wildlife You May Encounter on a Kuno Safari"
          subtitle="Cheetahs are the reason most people come. They are not the only reason to stay."
          center
        />
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-4 text-lg leading-relaxed text-neutral-700">
            <p>
              Kuno is the only place in India where you can see free-ranging
              cheetahs, and it is also one of the very few parks where three big
              cats — cheetah, leopard and tiger — share a landscape. Leopards are
              the most frequently sighted large carnivore here, and Kuno's are
              among the biggest in the country.
            </p>
            <p>
              Beyond the big cats, the park's mix of grassland, dry deciduous
              forest, riverine habitat and rocky hills supports sloth bears,
              Indian wolves, dholes, striped hyenas, golden jackals and caracal,
              alongside large herds of chital, sambar, nilgai and chinkara. Mugger
              crocodiles and gharials occupy the rivers, and more than 200 bird
              species have been recorded — including the Forest Owlet, rediscovered
              here after 123 years.
            </p>
            <p>
              <Link to="/blog/wildlife-of-kuno" className="text-primary-700 underline">
                Read our full species guide to Kuno
              </Link>
              , with what to look for and where.
            </p>
          </div>

          {/* 2-column image section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
            {/* First column: 1 large image */}
            <figure className="flex flex-col items-center justify-center">
              <ResponsiveImage
                src={species[0].src}
                alt={species[0].alt}
                width={600}
                height={480}
                className="w-full h-[480px] object-cover shadow-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
              />
              <figcaption className="mt-2 text-sm text-neutral-500">{species[0].name}</figcaption>
            </figure>
            {/* Second column: 4 stacked images */}
            <div className="grid grid-rows-2 grid-cols-2 gap-6 h-[480px]">
              {species.slice(1).map((animal) => (
                <ResponsiveImage
                  key={animal.src}
                  src={animal.src}
                  alt={animal.alt}
                  width={300}
                  height={228}
                  className="w-full h-full object-cover shadow"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 300px"
                />
              ))}
            </div>
          </div>
        </div>
    </TrackedSection>
  );
};

export default SurpriseSection;
