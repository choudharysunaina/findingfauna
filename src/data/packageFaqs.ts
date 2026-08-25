import { Faq } from '../components/ui/FaqSection';

/**
 * Per-package FAQs, keyed by package id.
 *
 * Kept out of packageData.ts so that file stays a straight product record (and
 * so the id matcher in scripts/generate-sitemap.mjs stays simple). These exist
 * for two reasons: they make each package page eligible for FAQ rich results,
 * and they are the main thing distinguishing the three pages from each other —
 * roughly 60% of each page is the shared inclusion, exclusion and accommodation
 * text, which is what made all three read as thin, near-duplicate pages.
 *
 * VERIFY: sighting expectations below reflect our own field record. Review each
 * season rather than leaving stale claims up.
 */
export const packageFaqs: Record<string, Faq[]> = {
  'kuno-cheetah-safari-package': [
    {
      question: 'Will I definitely see a cheetah on this package?',
      answer:
        'No one can promise a sighting of a free-ranging wild animal, and we will not. What we can do is maximise the odds: six safari sessions rather than one or two, the Ahera zone where our sighting record is strongest, and a driver and naturalist who track cheetah movement daily. Across six drives, most of our guests see cheetahs.',
    },
    {
      question: 'Why six safaris instead of two or three?',
      answer:
        'Kuno has a large tourism area and each route crosses different habitat — grassland on one drive, woodland and rocky outcrops on another. Six sessions let us cover several routes and both morning and evening light, which is a much bigger jump in what you see than the first drive alone.',
    },
    {
      question: 'Is this package suitable for children?',
      answer:
        'Yes, and families are a large part of who we take out. The pace is manageable, the driver is used to travelling with children, and the Kuno history session works well for older kids. Bear in mind the morning safari means a very early start, and December and January mornings in an open vehicle are cold.',
    },
    {
      question: 'What happens on arrival day?',
      answer:
        'We pick you up at Gwalior and drive to Pohari — roughly three to three and a half hours. Check-in is from 12:00 PM. If your arrival is early enough we can usually fit in the evening safari the same day.',
    },
    {
      question: 'Can I add extra safaris?',
      answer:
        'Yes, subject to permit availability for your dates. Extra safaris are charged separately and are worth booking at the same time as the package, because vehicle numbers per zone per slot are capped.',
    },
  ],

  'big-cat-safari-package': [
    {
      question: 'What are the chances of seeing all three big cats?',
      answer:
        'Cheetah and leopard sightings in Kuno are both reasonably common across four drives. Tiger sightings in Madhav are less frequent — the population is small and the reserve is still developing as a tourism destination. Treat the tiger as the bonus rather than the plan, and this package is a genuinely good trip.',
    },
    {
      question: 'How is this different from the Cheetah Safari package?',
      answer:
        'The Cheetah Safari runs all six drives inside Kuno. This one splits them: four Gypsy safaris in Kuno plus two in Madhav National Park, India’s 58th Tiger Reserve, about 35 km away near Shivpuri. You trade two Kuno drives for a second park and a shot at tiger.',
    },
    {
      question: 'Where is Madhav National Park and how do we get there?',
      answer:
        'Near Shivpuri, roughly 35 km and about an hour from the Kuno side. Day three transfers there, and the drive itself is part of the trip — the route passes the Chhatris of Shivpuri and the Jal Mandir at Pohari.',
    },
    {
      question: 'Do we change accommodation mid-trip?',
      answer:
        'Tell us your preference. Some guests keep one base and travel out for the Madhav drives; others prefer to move for a night. We plan it either way around your dates.',
    },
    {
      question: 'Is two parks in four days too rushed?',
      answer:
        'It is a full itinerary, not a rushed one — six drives with the travel between them built into the schedule rather than squeezed. If you would rather go slower, we can stretch it to five days.',
    },
  ],

  'photography-package': [
    {
      question: 'What does "4 in 1" mean?',
      answer:
        'Four habitats and four headline species groups in one trip: cheetahs and leopards in Kuno, tiger in Madhav National Park, and gharials and mugger crocodiles on a boat safari on the Chambal at Palighat. Three Gypsy safaris in Kuno, two in Madhav, one river safari.',
    },
    {
      question: 'Is this only for professional photographers?',
      answer:
        'No. It is built around light and habitat variety rather than gear, which suits serious amateurs just as well. If you are travelling with a camera and want more than one kind of subject, this is the package. There is no equipment requirement.',
    },
    {
      question: 'Why is Kuno good for wildlife photography?',
      answer:
        'It is unusually open for an Indian forest. Much of the park is grassland or light dry deciduous cover rather than dense jungle, so you get clean lines of sight and workable backgrounds. Vehicle numbers are also far lower than at the better-known reserves, so you are rarely shooting past three other Gypsies.',
    },
    {
      question: 'What is the gharial safari like?',
      answer:
        'A boat safari at the Palighat gharial sanctuary on the Chambal — a completely different setting from the forest drives, and one of the few places in India to photograph wild gharials alongside mugger crocodiles, skimmers and river terns.',
    },
    {
      question: 'Are professional camera fees included?',
      answer:
        'Still cameras and phones are fine at no extra charge. Professional video equipment needs prior Forest Department permission and attracts a separate fee, which is not in the package price — tell us in advance and we will arrange the permission.',
    },
    {
      question: 'Which season is best for photography?',
      answer:
        'April to June for the highest concentration of animals around water and the thinnest vegetation, if you can take the heat. November to February for comfortable conditions, soft light and good bird activity. Both work; they produce different images.',
    },
  ],
};
