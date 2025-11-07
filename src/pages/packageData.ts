export interface ContactFormData {
  name: string;
  email: string;
  country: string;
  message: string;
  phone: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  text: string;
}

export interface TourDay {
  day: number;
  title: string;
  description: string;
  includes: string;
}

export interface WildlifeStory {
  title: string;
  description: string;
  image: string;
}

export interface AccommodationOption {
  type: string;
  description: string;
  features: string[];
  image: string;
}

export interface PackageData {
  packageName: string;
  testimonials: Testimonial[];
  tourDays: TourDay[];
  wildlifeStories: WildlifeStory[];
  accommodationOptions: AccommodationOption[];
  heroImage: string;
  heroDescription: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Wildlife Photographer',
    company: 'National Geographic',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&h=400',
    text: 'The Kuno National Park experience was absolutely breathtaking. Witnessing cheetahs in their natural habitat was a dream come true. The guides were incredibly knowledgeable and the conservation efforts are truly inspiring.',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    role: 'Conservation Biologist',
    company: 'Wildlife Conservation Society',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=400',
    text: 'This tour exceeded all expectations. The opportunity to see the historic return of cheetahs to India while learning about conservation efforts makes this more than just a safari - it\'s a journey through wildlife history.',
  },
  {
    id: 3,
    name: 'Emily Chen',
    role: 'Nature Documentary Filmmaker',
    company: 'BBC Wildlife',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400',
    text: 'The attention to detail and passionate commitment to wildlife conservation made this experience unforgettable. Every moment was carefully planned to maximize wildlife encounters while respecting the natural environment.',
  },
];

const tourDays: TourDay[] = [
  {
    day: 1,
    title: 'Arrival at Gwalior – Transfer to Pohari',
    description: 'Arrival at the park, check-in, and afternoon safari with orientation session.',
    includes: 'Airport transfer, Welcome lunch, First safari'
  },
  {
    day: 2,
    title: 'Morning & Evening Safaris',
    description: 'Morning and afternoon safaris with wildlife photography sessions and expert naturalist guidance.',
    includes: '2 safaris, Photography workshop, All meals'
  },
  {
    day: 3,
    title: 'Wildlife Immersion Continues',
    description: 'Morning safari followed by local village visit and cultural program with conservation education.',
    includes: 'Safari, Village visit, Cultural evening'
  },
  {
    day: 4,
    title: 'Final Safari & Departure',
    description: 'Early morning safari for final wildlife encounters, breakfast, and departure transfer.',
    includes: 'Final safari, Breakfast, Airport transfer'
  }
];

const wildlifeStories: WildlifeStory[] = [
  {
    title: "Cheetahs Return to India: A Historic First Glimpse",
    description: "We proudly captured India's first wild cheetah photos—a milestone in conservation showcasing these majestic animals in their natural home.",
    image: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?auto=format&fit=crop&w=600&h=400",
  },
  {
    title: "Rare Melanistic Indian Gray Wolf Puppies Spotted",
    description: "An extraordinary discovery—capturing the rare black-furred wolf pups thriving in the wild was a breathtaking experience.",
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=600&h=400",
  },
  {
    title: "Rare Melanistic Jungle Cat Captured in Kuno",
    description: "A remarkable discovery of this elusive, dark-coated jungle cat reveals the hidden marvels of India's forests.",
    image: "https://images.unsplash.com/photo-1573160103600-a9e57eb97ea1?auto=format&fit=crop&w=600&h=400",
  },
  {
    title: "Indian Rock Python Hatchlings Spotted",
    description: "A rare glimpse of hatchlings emerging—offering a powerful reminder of nature's delicate balance and the wonder of new life.",
    image: "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&w=600&h=400",
  },
];

const accommodationOptions: AccommodationOption[] = [
  {
    type: "Budget-Friendly Local Stay",
    description: "Experience authentic rural Madhya Pradesh with comfortable homestays and local hospitality.",
    features: [
      "Budget-Friendly: Affordable safari experience without compromising on thrill",
      "Central Location: Perfect access to both Tiktoli and Ahera zones of Kuno",
      "More Time in the Wild: Less travel time means more time for safaris and photography",
      "Cultural Experience: Stay with locals, eat fresh home-cooked meals",
      "Simple but Comfortable: Clean, quiet, and practical for wilderness lovers"
    ],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&h=500"
  },
  {
    type: "Premium Safari Lodge",
    description: "Luxury accommodation with modern amenities while staying close to nature.",
    features: [
      "Luxury Accommodation: Premium rooms with modern amenities",
      "Gourmet Dining: Professional chefs preparing local and international cuisine",
      "Spa & Wellness: Relaxation facilities after exciting safari days",
      "Private Safaris: Exclusive vehicle and guide arrangements",
      "Photography Support: Professional equipment and guidance available"
    ],
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&h=500"
  }
];

export const packageData = {
  kunoCheetah: {
    packageName: "Kuno Cheetah Safari",
    testimonials,
    tourDays,
    wildlifeStories,
    accommodationOptions,
    heroImage: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?auto=format&fit=crop&w=800&h=600",
    heroDescription: "Experience the historic return of cheetahs to India. Witness these magnificent creatures in their natural habitat at Kuno National Park, where conservation meets adventure."
  },
  bigCat: {
    packageName: "Big Cat Safari",
    testimonials,
    tourDays,
    wildlifeStories,
    accommodationOptions,
    heroImage: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?auto=format&fit=crop&w=800&h=600",
    heroDescription: "Experience the thrill of tracking big cats in their natural habitat. Our expert guides will take you through the wilderness to spot leopards, tigers and other majestic predators."
  },
  photography: {
    packageName: "Wildlife Photography Package",
    testimonials,
    tourDays,
    wildlifeStories,
    accommodationOptions,
    heroImage: "https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?auto=format&fit=crop&w=800&h=600",
    heroDescription: "Capture stunning wildlife moments with our specialized photography package. Learn from professional wildlife photographers while exploring the diverse fauna of Kuno National Park."
  }
};