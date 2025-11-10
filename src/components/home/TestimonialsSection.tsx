import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Dr.Manish Ranjan',
      role: '',
      image: '/clients/major.jpg',
      text:'My visit to Kuno was planned at a very short notice and relevant searches on the internet did not help me much except that I happened to watch videos posted on YouTube by Mr Nived...I reached out to him and he was way too courteous to explain all that I needed to have my experience of the place a memorable one..With his passion for the preservation of the flora and fauna of the area, he was well informed of the Jungle.. With him driving around, it was more of listening to a story unfurl within the jungle.....Overall I highly recommend that future travellers to this place or others must get in touch with him to have a hassle free genuine experience... Definitely calling this young man again to plan my next jungle adventure..Thanks and keep up the good work',
    },
    {
      id: 2,
      name: 'Chelikani sriharsha',
      role: '',
      image: '/clients/shriharsha.jpg',
      text: 'The Finding Fauna Team is exceptional, especially for wildlife safaris in Kuno. From the very beginning, their follow-ups have been engaging and informative, showing a strong commitment to wildlife sightings. Their knowledge of animals is truly impressive—they not only capture rare moments but also share interesting facts about animal behavior and habitats. Whether you are a wildlife enthusiast or just a casual traveler, a safari with the Finding Fauna Team offers both excitement and valuable learning.',
    },
    {
      id: 3,
      name: 'Saif Khan',
      role: '',
      image: '/clients/saify.jpg',
      text: 'Had the best safari experience at Kuno National Park! Spotted amazing wildlife including deer, leopards, and even the majestic cheetahs. The forest was peaceful and full of life. Special thanks to Nived Bhai for being a fantastic Naturalist—his knowledge and passion made the trip unforgettable!',
    },
    {
      id: 4,
      name: 'Minakshi Sharma',
      role: '',
      image: '/clients/principal.jpg',
      text: 'The safari experience was fantastic! The gypsy ride was smooth, and Nived’s knowledge of flora and fauna was truly impressive. We especially appreciated the insights shared about future plans for other wildlife sanctuaries — made the journey even more enriching!',
    },
    {
      id: 5,
      name: 'Ashfaq Ahmad',
      role: '',
      image: '/clients/ranthamboresome.jpg',
      text: 'Ultimate experience with a successful sightseeing of 3 exclusive Cheetah with Nived. I Highly Recommend team Finding Fauna for Kuno Cheetah Safari.',
    },
    {
      id: 6,
      name: 'Parmeshwar Sharma ',
      role: '',
      image: '/clients/parmeshwar.jpg',
      text: 'I recently visited Kuno National Park with my friends. It was a wonderful experience surrounded by nature and wildlife. My friends Nived is actually working there as a Naturalist. Thanks to him, we got a well-guided tour and explored the park deeply, spotting various animals and enjoying the beauty of the forest. It was both exciting and educational!',

    },
     {
      id: 7,
      name: 'Riya Rele',
      role: '',
      image: '/clients/Riaralay.jpg',
      text: 'Kuno National Park is a beautiful jungle. We were completely new about the safari and hence we connected with finding fauna who guided and did all the arrangements for us. We were grateful of finding fauna @Nived and @Labh who were along with us throughout the trip. We were lucky to spot 5 cheetah ie Gamini and her cubs. It was a nostalgic moment and finding fauna were great and only because of their efforts we were able to spot the cheetah. Thank you so much for all your support and wishing many more trips to Kuna National Park with finding fauna.',
    },

     {
      id: 8,
      name: 'Saurabh Laturkar',
      role: '',
      image: '/clients/saurav.jpg',
      text: 'I discovered Niveed and Laabh from Finding Fauna through their YouTube channel. After watching their videos and learning about their experiences at Kuno National Park, I was immediately inspired to visit. The trip they organized to Kuno was truly unforgettable — an extraordinary, out-of-this-world adventure. We also explored Madhav National Park, with every detail once again thoughtfully arranged by these two passionate young naturalists. If you are looking to experience wildlife in its raw, authentic form, I highly recommend connecting with Finding Fauna for a once-in-a-lifetime journey. Thanks, Niveed and Laabh.',
    },
      {
      id: 9,
      name: 'Dr. Aditya Arvind Manekar',
      role: '',
      image: '/clients/draditya.jpg',
      text: 'I had the absolute pleasure of experiencing a wildlife safari tour curated and guided by Nived Yadav and his brother Laabh, covering the breathtaking landscapes of Kuno National Park, Madhav Tiger Reserve, and the Chambal Gharial Sanctuary. From start to finish, their warm hospitality and seamless arrangements made the entire journey unforgettable. Nived and Laabh are not only incredibly hardworking but also deeply passionate about wildlife and nature conservation. Their extensive knowledge about local fauna, forest ecology, and even wildlife rescue efforts added a fascinating dimension to the trip. Every safari felt more like an immersive learning experience, thanks to their insightful narration and keen eyes for spotting elusive wildlife. Thanks to their sharp instincts and tireless efforts, we were fortunate to witness incredible sightings, including cheetahs and leopard in Kuno and the Gharials at chambal—truly the highlights of the trip! The accommodations arranged were comfortable, ensuring that we had a restful stay. Anil ji, at the stay made sure we dont miss our homefood. Their gracious and ever-helpful demeanor made us feel completely at home. Whether it was navigating rough terrains, patiently tracking animals, or simply sharing stories around a bonfire, Nived and Laabh went above and beyond to make this journey exceptional. I whole heartedly recommend Nived Yadav and his team to anyone seeking an authentic and enriching wildlife experience in India. Their sincerity, dedication, and love for nature truly shine through in every aspect of the tour. An outstanding experience in every way!',
    },
    {
      id: 10,
      name: 'Rahul Mundhra',
      role: '',
      image: '/clients/rahul.jpg',
      text: 'Our safari with the Finding Fauna team was an exceptional experience. From start to finish, their professionalism and dedication stood out. Both Nived and Labh went above and beyond to ensure our journey through Kuno National Park was unforgettable. Their guidance throughout the safari was insightful and engaging, keeping every moment interesting and informative. Though activities at a jungle resort can be limited, they made the most of our time by presenting a well-researched and captivating presentation on Kuno’s rich history and ecological importance. What impressed us further were their visionary plans for the future of the jungle. It’s rare to see such clarity, passion, and purpose in such young individuals, and it’s truly inspiring. I traveled with my family, and we all thoroughly enjoyed the experience—so much so that we’re already looking forward to a second safari with the same team. Wishing the very best to Team Finding Fauna. They are doing an outstanding job in one of India’s untamed national parks. With young, educated, and passionate supporters like them, Kuno National Park is undoubtedly in great hands.Thank you once again, Nived, Labh, and the wonderful guides who made our safari so special!',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="section bg-gradient-to-b from-white to-primary-50">
      <div className="container">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Don't just take our word for it. Hear from some of our satisfied clients."
          center
        />

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Quotation mark decoration */}
            <div className="absolute -top-10 -left-10 text-primary-200">
              <Quote size={80} />
            </div>

            {/* Testimonial slider */}
            <div className="bg-white rounded-xl shadow-soft p-8 md:p-12 relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonials[currentIndex].id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-8 items-center"
                >
                  <div className="md:w-1/3">
                    <div className="relative">
                      <div className="w-24 h-24 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto">
                        <img
                          src={`${import.meta.env.BASE_URL}${testimonials[currentIndex].image.startsWith('/') ? testimonials[currentIndex].image.slice(1) : testimonials[currentIndex].image}`}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 bg-primary-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
                        <Quote size={20} />
                      </div>
                    </div>
                    
                    <div className="text-center mt-4">
                      <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <p className="text-neutral-600 italic font-size:14px line-height: 28px leading-relaxed">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="flex justify-center mt-8 gap-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-primary-600' : 'bg-neutral-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;