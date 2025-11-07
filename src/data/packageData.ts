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
}

export const packageData: Package[] = [
  {
    id: 'kuno-cheetah-safari-package',
    title: 'Cheetah Safari',
    location: 'Kuno National Park, MP',
    duration: '4 Days 3 Nights',
    price: 28000,
    image: 'https://images.unsplash.com/photo-1551969014-7d2c4cddf0b6?auto=format&fit=crop&w=800&h=600',
    highlights: [
      'Spot cheetahs in India for the first time',
      'Explore Kuno National Park Safari',
      'See India’s biggest leopards in the forest'
    ],
    maxGroupSize: 4,
    description: 'Experience the historic return of cheetahs to India at Kuno National Park. This carefully crafted safari offers unparalleled opportunities to witness these magnificent creatures in their natural habitat while learning about conservation efforts.',
    features: [
      'Expert naturalist guides',
      'Multiple safari zones',
      'Conservation education',
      'Photography guidance',
      'Comfortable accommodation',
      'All meals included'
    ],
    category: 'Wildlife Safari',
    difficulty: 'Easy'
  },
  {
    id: 'big-cat-safari-package',
    title: '3 Big Cat Safari',
    location: 'Kuno and Madhav National Park, MP',
    duration: '4 Days 3 Nights',
    price: 32000,
    image: '/3bigcats.png',
    highlights: [
      'Spot cheetahs, tigers, and leopards',
      'Safaris across Kuno and Madhav National Parks',
      'Capture rare wildlife moments, including birds'
    ],
    maxGroupSize: 4,
    description: 'Embark on an thrilling adventure to track big cats in their natural habitat. Our expert guides will lead you through the wilderness to spot leopards, tigers, and other majestic predators of Kuno National Park.',
    features: [
      'Big cat tracking',
      'Multiple safari zones',
      'Expert wildlife guides',
      'Premium accommodation',
      'All meals included',
      'Photography workshops'
    ],
    category: 'Big Cat Safari',
    difficulty: 'Moderate'
  },
  {
    id: 'photography-package',
    title: '4 in one Safari Package',
    location: 'Kuno National Park, MP',
    duration: '4 Days 3 Nights',
    price: 35000,
    image: '/4in1.jpg',
    highlights: [
      'Spot tigers, leopards, cheetahs, and gharials',
      'Experience thrilling jungle and boat safaris',
      'Capture wildlife moments across land and river'
    ],
    maxGroupSize: 4,
    description: 'Capture stunning wildlife moments with our specialized photography package. Learn from professional wildlife photographers while exploring the diverse fauna of Kuno National Park.',
    features: [
      'Professional photography guidance',
      'Specialized equipment',
      'Multiple safari sessions',
      'Post-processing workshops',
      'Portfolio development',
      'Small group size'
    ],
    category: 'Photography Tour',
    difficulty: 'Easy'
  }
];

export interface AccommodationOption {
  id: string;
  name: string;
  type: string;
  priceRange: string;
  features: string[];
  perfectFor: string[];
  image: string;
  description: string;
}

export const accommodationOptions: AccommodationOption[] = [
  {
    id: 'budget-local-stay',
    name: 'Budget-Friendly Local Stay',
    type: 'Local Homestay',
    priceRange: '₹2,500 - ₹4,500/night',
    features: [
      'Clean, comfortable rooms with basic amenities',
      'Local homestay experience with authentic cuisine',
      'Close to park entrance (15-20 minutes drive)',
      '24/7 hot water and WiFi'
    ],
    perfectFor: ['Budget Travelers', 'Solo Travelers', 'Cultural Experience'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&h=600',
    description: 'Comfortable and affordable accommodation option perfect for budget-conscious travelers seeking authentic local experiences.'
  },
  {
    id: 'premium-safari-lodge',
    name: 'Premium Safari Lodge',
    type: 'Luxury Lodge',
    priceRange: '₹8,000 - ₹15,000/night',
    features: [
      'Luxury cottages with private balconies overlooking wilderness',
      'Multi-cuisine restaurant and bar with wildlife viewing deck',
      'Swimming pool, spa, and guided nature walks',
      '24/7 room service and concierge'
    ],
    perfectFor: ['Luxury Travelers', 'Couples', 'Families'],
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&h=600',
    description: 'Ultimate luxury experience with premium amenities and stunning views of the wilderness, perfect for those seeking comfort and elegance.'
  }
];