export interface Package {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  highlights: string[];
  maxGroupSize: number;
  description: string;
  features: string[];
  category: string;
  difficulty: string;
  gaCategory: string;
  heroTagline: string;
  heroDescription: string;
  heroImageAlt: string;
  heroStats: { value: string; label: string }[];
  safariInclusionLines: string[];
  tourDays: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
  accommodationOptions: PackageAccommodationOption[];
}

export interface PackageAccommodationOption {
  id: string;
  type: string;
  subtitle: string;
  features: string[];
  tags: string[];
  image: string;
  price: string;
}

export const packageData: Package[] = [
  {
    id: 'kuno-cheetah-safari-package',
    title: 'Cheetah Safari',
    location: 'Kuno National Park, MP',
    duration: '4 Days 3 Nights',
    price: 28000,
    image: `${import.meta.env.BASE_URL}packages/cheetah-package.webp`,
    highlights: [
      'Spot cheetahs in India for the first time',
      'Explore Kuno National Park Safari',
      'See India’s biggest leopards in the forest'
    ],
    maxGroupSize: 4,
    description: 'Six Gypsy safaris across four days in Kuno National Park, the only place in India with free-ranging cheetahs. Permits, naturalist, stay, meals and Gwalior transfers included, from ₹28,000 per person.',
    features: [
      'Expert naturalist guides',
      'Multiple safari zones',
      'Conservation education',
      'Photography guidance',
      'Comfortable accommodation',
      'All meals included'
    ],
    category: 'Wildlife Safari',
    difficulty: 'Easy',
    gaCategory: 'pkg_kuno_cheetah',
    heroTagline: '3N/4D Package',
    heroDescription: 'Experience the thrill of Cheetah Safari at Kuno National Park. Spot India’s reintroduced cheetahs, diverse wildlife, vibrant birdlife, and enjoy guided adventures in nature with unmatched photography opportunities and unforgettable wilderness memories.',
    heroImageAlt: 'Cheetah in Kuno National Park',
    heroStats: [
      { value: '25+', label: 'Cheetahs' },
      { value: '200+', label: 'Bird Species' },
      { value: '160+', label: 'Leopards' }
    ],
    safariInclusionLines: ['6 open Gypsy cheetah tracking safaris in Kuno National Park'],
    tourDays: [
      {
        day: 1,
        title: 'Day 01 : Arrival at Gwalior – Transfer to Pohari',
        description: 'Upon arrival at Gwalior, you will be picked up in a Taxi vehicle and transferred to Pohari, located near the core safari zones of Kuno National Park.',
        activities: [
          'Check-in at your selected accommodation by 12:00 PM',
          'Enjoy lunch at your place of stay',
          'Head for your first Evening Safari in Kuno National Park',
          'Return to your accommodation for dinner and overnight stay',
        ],
      },
      {
        day: 2,
        title: 'Day 02 : Morning & Evening Safaris',
        description: 'Morning and afternoon safaris with wildlife photography sessions and expert naturalist guidance.',
        activities: [
          'Start the day with morning tea',
          'Depart for an early Morning Safari in Kuno National Park',
          'Return for breakfast at your selected accommodation',
          'Relax and recharge or join an optional photography gear session',
          'Enjoy lunch, followed by an exciting Evening Safari',
          'Return for dinner and overnight stay',
        ],
      },
      {
        day: 3,
        title: 'Day 03 : Wildlife Immersion Continues',
        description: 'Morning safari followed by local village visit and cultural program with conservation education.',
        activities: [
          'Head out for Morning Safari in a different zone of the park',
          'Post-safari, return for breakfast',
          'Relax or explore nearby nature trails (optional)',
          'After lunch, enjoy your final Evening Safari.',
          'Return for dinner and overnight stay.',
        ],
      },
      {
        day: 4,
        title: 'Day 04 : Final Safari & Departure',
        description: 'Early morning safari for final wildlife encounters, breakfast, and departure transfer.',
        activities: [
          'Early morning tea, followed by your last safari drive in Kuno',
          'Return for breakfast',
          'Checkout by 11:00 AM from your selected accommodation',
          'Pickup at 11:30 AM and drop to Gwalior by approx. 1:30 PM',
        ],
      },
    ],
    accommodationOptions: [
      {
        id: 'homestay',
        type: 'Budget-Friendly Local Stay',
        subtitle: 'Comfortable & Affordable',
        features: [
          'Clean, comfortable rooms with basic amenities',
          'Local homestay experience with fresh home-cooked meals',
          'Perfect access to both Tiktoli and Ahera zones of Kuno',
          'Exclusive vehicle, guide arrangements and photography guidance',
        ],
        tags: ['Budget Travelers', 'Solo Travelers', 'Cultural Experience'],
        image: `${import.meta.env.BASE_URL}packages/homestay.webp`,
        price: '₹28,000',
      },
      {
        id: 'resort',
        type: 'Premium Safari Lodge',
        subtitle: 'Luxury & Comfort',
        features: [
          'Premium rooms with modern amenities',
          'Professional chefs preparing local and international cuisine',
          'Spa & Wellness: Relaxation facilities after exciting safari days',
          'Exclusive vehicle, guide arrangements and photography guidance',
        ],
        tags: ['Luxury Travelers', 'Couples', 'Families'],
        image: `${import.meta.env.BASE_URL}packages/fort.webp`,
        price: '₹37,000',
      },
    ],
  },
  {
    id: 'big-cat-safari-package',
    title: '3 Big Cat Safari',
    location: 'Kuno and Madhav National Park, MP',
    duration: '4 Days 3 Nights',
    price: 32000,
    image: `${import.meta.env.BASE_URL}home/3bigcats.webp`,
    highlights: [
      'Spot cheetahs, tigers, and leopards',
      'Safaris across Kuno and Madhav National Parks',
      'Capture rare wildlife moments, including birds'
    ],
    maxGroupSize: 4,
    description: 'Cheetah, leopard and tiger on one itinerary — four Gypsy safaris in Kuno plus two in Madhav National Park across four days, from ₹32,000 per person all-inclusive.',
    features: [
      'Big cat tracking',
      'Multiple safari zones',
      'Expert wildlife guides',
      'Premium accommodation',
      'All meals included',
      'Photography workshops'
    ],
    category: 'Big Cat Safari',
    difficulty: 'Moderate',
    gaCategory: 'pkg_big_cat',
    heroTagline: '3N/4D Package',
    heroDescription: 'Discover the untamed beauty with Safari experience of Kuno and Madhav National Park. Spot Cheetahs, Tigers and Leopards. Capture rare wildlife moments, including birds.',
    heroImageAlt: 'Three big cats safari — tiger, leopard and cheetah tracking in Kuno and Madhav National Park',
    heroStats: [
      { value: '5+', label: 'Tigers' },
      { value: '200+', label: 'Leopards' },
      { value: '25+', label: 'Cheetahs' }
    ],
    safariInclusionLines: [
      '4 open gypsy safaris in Kuno National Park',
      '2 open gypsy safaris in Madhav National Park',
    ],
    tourDays: [
      {
        day: 1,
        title: 'Arrival at Gwalior – Transfer to Kuno National Park',
        description: 'Arrival at the park, check-in, and afternoon safari with orientation session.',
        activities: [
          'Check-in at your selected accommodation',
          'Enjoy a warm lunch and settle in',
          'Head for your first Evening Safari in Kuno , home to wild African cheetahs',
          'Return for dinner and overnight stay',
        ],
      },
      {
        day: 2,
        title: 'Day 02: Two Safaris, One Wild Day',
        description: 'Morning and afternoon safaris with wildlife photography sessions and expert naturalist guidance.',
        activities: [
          'Begin with morning tea, followed by a Morning Safari in Kuno',
          'Breakfast after returning, with time to relax',
          'Lunch at accommodation',
          'Set out again for your Evening Safari, perfect for golden light photography',
          'Return for dinner and overnight rest',
        ],
      },
      {
        day: 3,
        title: 'Day 03: Last Safari in Kuno – Transfer to Madhav',
        description: 'Morning safari followed by local village visit and cultural program with conservation education.',
        activities: [
          'Morning tea and your last Kuno safari drive',
          'Breakfast back at accommodation',
          'Transfer to Madhav Tiger Reserve via Taxi',
          'Check-in at accommodation near Madhav by 1:00 PM',
          'Lunch, followed by your first Evening Safari in Madhav—home to tigers and leopards',
          'Return for dinner and overnight stay',
        ],
      },
      {
        day: 4,
        title: 'Day 04: Final Safari – Return to Gwalior',
        description: 'Early morning safari for final wildlife encounters, breakfast, and departure transfer.',
        activities: [
          'Start with morning tea, then head for your final Madhav Safari',
          'Return for breakfast',
          'Check out by 11:30 AM, followed by drop-off at Gwalior around 1:30 PM',
        ],
      },
    ],
    accommodationOptions: [
      {
        id: 'homestay',
        type: 'Budget-Friendly Local Stay',
        subtitle: 'Comfortable & Affordable',
        features: [
          'Clean, comfortable rooms with basic amenities',
          'Local homestay experience with fresh home-cooked meals',
          'Perfect access to both Tiktoli and Ahera zones of Kuno',
          'Exclusive vehicle, guide arrangements and photography guidance',
        ],
        tags: ['Budget Travelers', 'Solo Travelers', 'Cultural Experience'],
        image: `${import.meta.env.BASE_URL}packages/homestay.webp`,
        price: '₹32,000',
      },
      {
        id: 'resort',
        type: 'Premium Safari Lodge',
        subtitle: 'Luxury & Comfort',
        features: [
          'Premium rooms with modern amenities',
          'Professional chefs preparing local and international cuisine',
          'Spa & Wellness: Relaxation facilities after exciting safari days',
          'Exclusive vehicle, guide arrangements and photography guidance',
        ],
        tags: ['Luxury Travelers', 'Couples', 'Families'],
        image: `${import.meta.env.BASE_URL}packages/fort.webp`,
        price: '₹40,000',
      },
    ],
  },
  {
    id: 'photography-package',
    title: '4 in 1 Safari Package',
    location: 'Kuno, Madhav & Chambal, MP',
    duration: '4 Days 3 Nights',
    price: 35000,
    image: `${import.meta.env.BASE_URL}packages/4in1safari.webp`,
    highlights: [
      'Spot tigers, leopards, cheetahs, and gharials',
      'Experience thrilling jungle and boat safaris',
      'Capture wildlife moments across land and river'
    ],
    maxGroupSize: 4,
    description: 'Four habitats, one trip: three Gypsy safaris in Kuno, two in Madhav National Park and a gharial boat safari on the Chambal at Palighat. Built for photographers, from ₹35,000 per person.',
    features: [
      'Professional photography guidance',
      'Specialized equipment',
      'Multiple safari sessions',
      'Post-processing workshops',
      'Portfolio development',
      'Small group size'
    ],
    category: 'Photography Tour',
    difficulty: 'Easy',
    gaCategory: 'pkg_photography',
    heroTagline: '3N/4D Package',
    heroDescription: 'Capture India’s cheetahs, leopards, tigers, and the elusive gharials on this 3 Nights / 4 Days photography tour. Explore Kuno National Park, Palighat Gharial Sanctuary, and Madhav Tiger Reserve through expert-guided safaris, offering rare wildlife encounters, stunning landscapes, and unforgettable photographic opportunities.',
    heroImageAlt: '4-in-1 wildlife photography safari — cheetahs, tigers, leopards and gharials across Kuno, Madhav and Chambal',
    heroStats: [
      { value: '5+', label: 'Tigers' },
      { value: '200+', label: 'Leopards' },
      { value: '27+', label: 'Cheetahs' }
    ],
    safariInclusionLines: [
      '3 open gypsy safaris in Kuno National Park',
      '2 open gypsy safaris in Madhav National Park',
      '1 open gypsy Gharial safari',
    ],
    tourDays: [
      {
        day: 1,
        title: 'Day 01: Arrival in Gwalior – Journey to Kuno',
        description: 'Your wild journey begins with a warm welcome in Gwalior, followed by a comfortable road transfer to Pohari, the gateway to Kuno.',
        activities: [
          'Check-in at your selected accommodation',
          'Enjoy a hearty lunch and settle in amidst rustic jungle surroundings',
          'Head out for your first Evening Safari in Kuno National Park',
          'Return for dinner and rest for the night',
        ],
      },
      {
        day: 2,
        title: 'Day 02: A Day in the Wild – Kuno Safaris',
        description: 'Morning and afternoon safaris with wildlife photography sessions and expert naturalist guidance.',
        activities: [
          'Start with morning tea, then head for your Morning Safari in Kuno',
          'Return for a refreshing breakfast and short break',
          'Enjoy lunch and prep your gear for another Evening Safari, chasing the golden light',
          'Return for dinner and share stories from the field',
        ],
      },
      {
        day: 3,
        title: 'Day 03: Last Safari in Kuno – Transfer to Madhav',
        description: 'Morning safari followed by local village visit and cultural program with conservation education.',
        activities: [
          'Begin with morning tea and depart for Gharial Sanctuary, Palighat',
          'Enjoy a thrilling Gharial Safari, photographing crocodiles, gharials, and river birds',
          'Return for breakfast and prepare for your transfer to Madhav Tiger Reserve',
          'Check in to your accommodation near Madhav by 1:00 PM',
          'Lunch, then get ready for your first Evening Safari in tiger territory',
          'Return to accommodation for dinner and rest',
        ],
      },
      {
        day: 4,
        title: 'Day 04: Final Safari – Return to Gwalior',
        description: 'Early morning safari for final wildlife encounters, breakfast, and departure transfer.',
        activities: [
          'Early morning tea, followed by your final Safari in Madhav',
          'Return for a wholesome breakfast',
          'Check-out by 11:30 AM',
          'Pickup and drop back to Gwalior by around 1:30 PM, closing your unforgettable wildlife journey',
        ],
      },
    ],
    accommodationOptions: [
      {
        id: 'homestay',
        type: 'Budget-Friendly Local Stay',
        subtitle: 'Comfortable & Affordable',
        features: [
          'Clean, comfortable rooms with basic amenities',
          'Local homestay experience with fresh home-cooked meals',
          'Perfect access to both Tiktoli and Ahera zones of Kuno',
          'Exclusive vehicle, guide arrangements and photography guidance',
        ],
        tags: ['Budget Travelers', 'Solo Travelers', 'Cultural Experience'],
        image: `${import.meta.env.BASE_URL}packages/homestay.webp`,
        price: '₹35,000',
      },
      {
        id: 'resort',
        type: 'Premium Safari Lodge',
        subtitle: 'Luxury & Comfort',
        features: [
          'Premium rooms with modern amenities',
          'Professional chefs preparing local and international cuisine',
          'Spa & Wellness: Relaxation facilities after exciting safari days',
          'Exclusive vehicle, guide arrangements and photography guidance',
        ],
        tags: ['Luxury Travelers', 'Couples', 'Families'],
        image: `${import.meta.env.BASE_URL}packages/fort.webp`,
        price: '₹40,000',
      },
    ],
  }
];
