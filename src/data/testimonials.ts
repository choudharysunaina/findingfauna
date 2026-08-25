export interface Testimonial {
  id: number;
  name: string;
  /** Occupation, where the guest gave one. Shown on /packages cards. */
  role: string;
  image: string;
  /** The full review, as written by the guest. */
  quote: string;
  /**
   * Trimmed version for the compact cards on /packages, which previously kept
   * its own shortened copies of three of these reviews — the same text existed
   * twice on the site in two variants.
   */
  shortQuote?: string;
  rating: number;
}

/**
 * Guest reviews, the single source for the homepage carousel, the /packages
 * cards, and the Review/AggregateRating JSON-LD (generateReviewSchema).
 *
 * These are real reviews and must stay verbatim — no editing for keywords.
 * Ratings are 5 because every one of these is an unambiguously positive
 * review; if a mixed review is ever added, score it honestly rather than
 * inflating the aggregate.
 */
export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Dr. Manish Ranjan',
    role: 'Army Major',
    image: '/clients/major.webp',
    quote:
      'My visit to Kuno was planned at a very short notice and relevant searches on the internet did not help me much except that I happened to watch videos posted on YouTube by Mr Nived...I reached out to him and he was way too courteous to explain all that I needed to have my experience of the place a memorable one..With his passion for the preservation of the flora and fauna of the area, he was well informed of the Jungle.. With him driving around, it was more of listening to a story unfurl within the jungle.....Overall I highly recommend that future travellers to this place or others must get in touch with him to have a hassle free genuine experience... Definitely calling this young man again to plan my next jungle adventure..Thanks and keep up the good work',
    shortQuote:
      'My visit to Kuno was planned at a very short notice and relevant searches on the internet did not help me much except that I happened to watch videos posted on YouTube by Mr Nived...I reached out to him and he was way too courteous to explain all that I needed to have my experience of the place a memorable one. Overall I highly recommend that future travellers to this place or others must get in touch with him to have a hassle free genuine experience.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Chelikani Sriharsha',
    role: '',
    image: '/clients/shriharsha.webp',
    quote:
      'The Finding Fauna Team is exceptional, especially for wildlife safaris in Kuno. From the very beginning, their follow-ups have been engaging and informative, showing a strong commitment to wildlife sightings. Their knowledge of animals is truly impressive—they not only capture rare moments but also share interesting facts about animal behavior and habitats. Whether you are a wildlife enthusiast or just a casual traveler, a safari with the Finding Fauna Team offers both excitement and valuable learning.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Saif Khan',
    role: '',
    image: '/clients/saify.webp',
    quote:
      'Had the best safari experience at Kuno National Park! Spotted amazing wildlife including deer, leopards, and even the majestic cheetahs. The forest was peaceful and full of life. Special thanks to Nived Bhai for being a fantastic Naturalist—his knowledge and passion made the trip unforgettable!',
    rating: 5,
  },
  {
    id: 4,
    name: 'Minakshi Sharma',
    role: 'Principal',
    image: '/clients/principal.webp',
    quote:
      'The safari experience was fantastic! The gypsy ride was smooth, and Nived’s knowledge of flora and fauna was truly impressive. We especially appreciated the insights shared about future plans for other wildlife sanctuaries — made the journey even more enriching!',
    rating: 5,
  },
  {
    id: 5,
    name: 'Ashfaq Ahmad',
    role: '',
    image: '/clients/ranthamboresome.webp',
    quote:
      'Ultimate experience with a successful sightseeing of 3 exclusive Cheetah with Nived. I Highly Recommend team Finding Fauna for Kuno Cheetah Safari.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Parmeshwar Sharma',
    role: '',
    image: '/clients/parmeshwar.webp',
    quote:
      'I recently visited Kuno National Park with my friends. It was a wonderful experience surrounded by nature and wildlife. My friends Nived is actually working there as a Naturalist. Thanks to him, we got a well-guided tour and explored the park deeply, spotting various animals and enjoying the beauty of the forest. It was both exciting and educational!',
    rating: 5,
  },
  {
    id: 7,
    name: 'Riya Rele',
    role: '',
    image: '/clients/Riaralay.webp',
    quote:
      'Kuno National Park is a beautiful jungle. We were completely new about the safari and hence we connected with finding fauna who guided and did all the arrangements for us. We were grateful of finding fauna @Nived and @Labh who were along with us throughout the trip. We were lucky to spot 5 cheetah ie Gamini and her cubs. It was a nostalgic moment and finding fauna were great and only because of their efforts we were able to spot the cheetah. Thank you so much for all your support and wishing many more trips to Kuna National Park with finding fauna.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Saurabh Laturkar',
    role: '',
    image: '/clients/saurav.webp',
    quote:
      'I discovered Niveed and Laabh from Finding Fauna through their YouTube channel. After watching their videos and learning about their experiences at Kuno National Park, I was immediately inspired to visit. The trip they organized to Kuno was truly unforgettable — an extraordinary, out-of-this-world adventure. We also explored Madhav National Park, with every detail once again thoughtfully arranged by these two passionate young naturalists. If you are looking to experience wildlife in its raw, authentic form, I highly recommend connecting with Finding Fauna for a once-in-a-lifetime journey. Thanks, Niveed and Laabh.',
    rating: 5,
  },
  {
    id: 9,
    name: 'Dr. Aditya Arvind Manekar',
    role: 'Doctor',
    image: '/clients/draditya.webp',
    quote:
      'I had the absolute pleasure of experiencing a wildlife safari tour curated and guided by Nived Yadav and his brother Laabh, covering the breathtaking landscapes of Kuno National Park, Madhav Tiger Reserve, and the Chambal Gharial Sanctuary. From start to finish, their warm hospitality and seamless arrangements made the entire journey unforgettable. Nived and Laabh are not only incredibly hardworking but also deeply passionate about wildlife and nature conservation. Their extensive knowledge about local fauna, forest ecology, and even wildlife rescue efforts added a fascinating dimension to the trip. Every safari felt more like an immersive learning experience, thanks to their insightful narration and keen eyes for spotting elusive wildlife. Thanks to their sharp instincts and tireless efforts, we were fortunate to witness incredible sightings, including cheetahs and leopard in Kuno and the Gharials at chambal—truly the highlights of the trip! The accommodations arranged were comfortable, ensuring that we had a restful stay. Anil ji, at the stay made sure we dont miss our homefood. Their gracious and ever-helpful demeanor made us feel completely at home. Whether it was navigating rough terrains, patiently tracking animals, or simply sharing stories around a bonfire, Nived and Laabh went above and beyond to make this journey exceptional. I whole heartedly recommend Nived Yadav and his team to anyone seeking an authentic and enriching wildlife experience in India. Their sincerity, dedication, and love for nature truly shine through in every aspect of the tour. An outstanding experience in every way!',
    shortQuote:
      'I had the absolute pleasure of experiencing a wildlife safari tour curated and guided by Nived Yadav and his brother Laabh, covering the breathtaking landscapes of Kuno National Park, Madhav Tiger Reserve, and the Chambal Gharial Sanctuary. From start to finish, their warm hospitality and seamless arrangements made the entire journey unforgettable. The accommodations arranged were comfortable, ensuring that we had a restful stay. Anil ji, at the stay made sure we dont miss our homefood.',
    rating: 5,
  },
  {
    id: 10,
    name: 'Rahul Mundhra',
    role: '',
    image: '/clients/rahul.webp',
    quote:
      'Our safari with the Finding Fauna team was an exceptional experience. From start to finish, their professionalism and dedication stood out. Both Nived and Labh went above and beyond to ensure our journey through Kuno National Park was unforgettable. Their guidance throughout the safari was insightful and engaging, keeping every moment interesting and informative. Though activities at a jungle resort can be limited, they made the most of our time by presenting a well-researched and captivating presentation on Kuno’s rich history and ecological importance. What impressed us further were their visionary plans for the future of the jungle. It’s rare to see such clarity, passion, and purpose in such young individuals, and it’s truly inspiring. I traveled with my family, and we all thoroughly enjoyed the experience—so much so that we’re already looking forward to a second safari with the same team. Wishing the very best to Team Finding Fauna. They are doing an outstanding job in one of India’s untamed national parks. With young, educated, and passionate supporters like them, Kuno National Park is undoubtedly in great hands.Thank you once again, Nived, Labh, and the wonderful guides who made our safari so special!',
    rating: 5,
  },
];

/** The three used on /packages — the ones whose authors gave an occupation. */
export const featuredTestimonials = testimonials.filter((t) => t.role !== '').slice(0, 3);
