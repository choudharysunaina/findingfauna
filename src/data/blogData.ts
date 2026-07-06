export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
  image5?: string;
  image6?: string;
  image7?: string;
  image8?: string;
  image9?: string;
  image10?: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const blogData: BlogPost[] = [
  {
    slug: 'return-of-cheetahs-to-kuno',
    title: 'The Historic Return of Cheetahs to Kuno National Park',
    excerpt:
      'After going extinct in India over 70 years ago, cheetahs are once again roaming free in Kuno. Here is the story of their comeback and what it means for Indian wildlife conservation.',
    content: [
      'In September 2022, India witnessed a conservation milestone that had not been seen anywhere in the world before: the intercontinental translocation of a large carnivore. Cheetahs, declared extinct in India in 1952, were reintroduced to Kuno National Park after being flown in from Namibia and South Africa.',
      'Kuno was chosen for its vast grasslands and scrub forest, an ecosystem well suited to the cheetah\'s hunting style, which relies on speed and open terrain rather than dense cover. The park had already been prepared over two decades as part of India\'s Asiatic lion reintroduction project, giving it existing infrastructure for large carnivore management.',
      '{{image:1}}',
      'Today, visitors to Kuno have a rare chance to witness these cheetahs adapting to their new home, alongside the park\'s existing leopards, and other wildlife. Every safari here is part of a living conservation story, not just a wildlife sighting.',
      'For us at Finding Fauna, guiding travelers through this moment in conservation history is both a privilege and a responsibility. We work closely with local naturalists and forest officials to ensure every safari respects the animals\' space while giving guests a genuine, informed wildlife experience.',
    ].join('\n\n'),
    coverImage: `${import.meta.env.BASE_URL}first_photo_cheetah.jpg`,
    image1: `${import.meta.env.BASE_URL}cheetah.jpg`,
    category: 'Conservation',
    author: 'Nived Yadav',
    date: 'June 18, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'first-wildlife-safari-tips',
    title: '5 Tips for Your First Wildlife Safari at Kuno',
    excerpt:
      'Heading out on your first safari? From what to wear to how to spot wildlife like a naturalist, here is everything first-timers should know before entering the jungle.',
    content: [
      'A wildlife safari rewards patience and preparation. Unlike a regular sightseeing trip, the jungle moves at its own pace, and the best sightings often go to those who know how to look, listen, and wait.',
      '1. Dress in earthy, neutral tones. Bright colors and strong fragrances can alert animals to your presence long before you spot them. Stick to greens, browns, and khakis.',
      '2. Carry binoculars and a zoom lens. Many of the best sightings, including the cheetahs, happen at a distance. A good pair of binoculars will make a huge difference to your experience.',
      '{{image:1}}',
      '3. Listen as much as you look. Alarm calls from deer and langurs often signal a predator nearby well before you can see it. Our naturalists are trained to read these cues.',
      '4. Book the early morning and late evening safaris. Wildlife is most active during cooler hours, making dawn and dusk safaris the most rewarding.',
      '5. Go with an experienced guide. Local naturalists know the terrain, the animal movement patterns, and the safety protocols that make the difference between a good safari and a great one.',
    ].join('\n\n'),
    coverImage: `${import.meta.env.BASE_URL}jungle_cat.jpg`,
    image1: `${import.meta.env.BASE_URL}leopard.jpg`,
    category: 'Travel Tips',
    author: 'Laabh Yadav',
    date: 'May 30, 2026',
    readTime: '4 min read',
  },
  {
    slug: 'beyond-big-cats-kuno-biodiversity',
    title: "Beyond the Big Cats: Kuno's Hidden Biodiversity",
    excerpt:
      'Cheetahs and leopards may headline Kuno National Park, but the ecosystem is home to a rich diversity of birds, reptiles, and smaller mammals that deserve just as much attention.',
    content: [
      'It is easy to plan a trip to Kuno with only cheetahs and leopards in mind, but the park\'s dry deciduous forests and grasslands support a far wider web of life than its famous big cats.',
      'Kuno is home to healthy populations of striped hyenas, jungle cats, and Indian wolves, along with sizeable herds of chital, sambar, and nilgai that form the prey base for its predators. Birdwatchers can spot everything from crested serpent eagles to painted storks across the park\'s wetlands and forest edges.',
      'The park is also a haven for reptiles, including the rock python, whose slow, deliberate presence is a highlight for guests who take the time to look beyond the obvious.',
      'On our safaris, we make it a point to introduce guests to this fuller picture of Kuno. Understanding the whole ecosystem, not just its most famous residents, is what makes conservation sustainable in the long run.',
    ].join('\n\n'),
    coverImage: `${import.meta.env.BASE_URL}rock_python.jpg`,
    category: 'Wildlife',
    author: 'Nived Yadav',
    date: 'May 12, 2026',
    readTime: '5 min read',
  },
];
