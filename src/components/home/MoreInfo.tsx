

import ResponsiveImage from '../ui/ResponsiveImage';

const MoreInfo = () => {
  return (
    <section className="section bg-neutral-50">
      <div className="container">
      {/* Text Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
         <div className="order-2 lg:order-1">
        <h2 className="text-3xl font-bold mb-6">Witness the Indian Cheetah</h2>
        <p className="text-neutral-600 text-lg md:text-s mb-8 max-w-xl">
          Be among the privileged few to witness these magnificent cheetahs in their natural habitat, a powerful testament to India's remarkable conservation success. Our expertly guided safaris offer you the unparalleled opportunity to spot these swift and elusive predators, alongside Kuno's diverse and fascinating wildlife. Traverse the scenic landscapes of Kuno National Park, home to thriving populations of leopards, sloth bears, hyenas, wolves, various deer species, and a vibrant array of birdlife, all while experiencing the thrill of the search – with your camera, of course! Book your unforgettable cheetah safari today and create memories that will last a lifetime.
        </p>
       
        <div className="mt-4">
          <a
            href="/contact"
            className="btn-primary"
          >
            More info
          </a>
        </div>
         </div>
     

      {/* Image Section */}
      <div className="flex order-1 lg:order-2 relative">
        <ResponsiveImage
          src="/more_info_kb.jpg"
          alt="Kuno National Park Wildlife"
          className="rounded-tl-3xl rounded-bl-3xl shadow-lg object-cover w-full"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
        />
      </div>
       </div>
      </div>
    </section>
  );
};

export default MoreInfo;