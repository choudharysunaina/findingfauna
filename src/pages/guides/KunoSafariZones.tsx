import { Link } from 'react-router-dom';
import GuideLayout from '../../components/guide/GuideLayout';
import { GuideSection, GuideTable, GuideCallout, GuideList } from '../../components/guide/GuideBits';

// VERIFY before publishing: gate status changes between seasons and published
// sources disagree — some still describe Tiktoli as closed for the cheetah
// programme. The comparison below reflects our own field experience across the
// last two tourism seasons; confirm current gate status and the private-vehicle
// allowance with the Forest Department before each season and update here.
const faqs = [
  {
    question: 'How many safari zones does Kuno National Park have?',
    answer:
      'Three tourism zones are currently open: Ahera, Tiktoli and Peepalbawri. Each has its own entry gate, its own set of safari routes and a distinctly different landscape.',
  },
  {
    question: 'Which is the best safari gate in Kuno?',
    answer:
      'Ahera, for most visitors. It has the best road connectivity, it is closest to Gwalior airport and Shivpuri railway station and to most accommodation, and across the past two tourism seasons our team has recorded the most cheetah and leopard sightings there of the three gates.',
  },
  {
    question: 'What is the difference between Ahera and Tiktoli gate?',
    answer:
      'Ahera sits on the Pohari side with a mix of open grassland, dry deciduous forest and riverine patches — the habitat where cheetahs are most often seen — and allows either a registered Gypsy or an eligible private vehicle. Tiktoli is forest, rolling hills and open woodland, excellent for birds and deer but with fewer cheetah and leopard sightings in recent seasons, and it permits registered Gypsies only.',
  },
  {
    question: 'Can I use my own vehicle at all three gates?',
    answer:
      'No. Ahera and Peepalbawri currently allow eligible private vehicles subject to Forest Department permission. Tiktoli permits registered safari Gypsies only, so a vehicle has to be arranged in advance there.',
  },
  {
    question: 'Which gate is closest to Gwalior?',
    answer:
      'Ahera. It is the most convenient gate for travellers arriving at Gwalior Airport, Gwalior Junction or Shivpuri Railway Station, and the road approach is the best of the three.',
  },
  {
    question: 'Where is the best place to stay for each gate?',
    answer:
      'Most hotels and homestays are on the Ahera side, around Pohari, which is also within reach of Tiktoli. Accommodation near Tiktoli itself is limited, and tourism infrastructure around Peepalbawri is still developing, so guests entering there usually stay further out and arrange their vehicle in advance.',
  },
];

const KunoSafariZones = () => (
  <GuideLayout
    path="/kuno-safari-zones"
    category="guide_zones"
    seoTitle="Kuno Safari Zones: Ahera, Tiktoli & Peepalbawri"
    seoDescription="All three Kuno safari gates compared on cheetah sightings, terrain, road access, which vehicles are allowed and where to stay — based on two seasons of guiding in the park."
    heading="Kuno Safari Zones & Entry Gates: Ahera, Tiktoli and Peepalbawri"
    intro="All three gates lead into Kuno, but they are not interchangeable. Terrain, road quality, which vehicles are permitted, where you can stay and — most importantly — what you are likely to see all change with the zone you book."
    heroImage="/kuno-national-park/cheetah.webp"
    heroImageAlt="Grassland and dry deciduous forest inside the Ahera zone of Kuno National Park"
    faqs={faqs}
  >
    <GuideSection title="The three gates at a glance">
      <p>
        Kuno currently opens three tourism zones. If you are visiting for the
        first time, picking the right one materially affects both your comfort and
        your chances of a good sighting.
      </p>
      <GuideTable
        caption="Based on our team's field experience across the last two tourism seasons."
        headers={['', 'Ahera', 'Tiktoli', 'Peepalbawri']}
        rows={[
          [
            <strong key="s">Cheetah sightings</strong>,
            'Highest of the three',
            'Less frequent',
            'Limited data — fewer visitors',
          ],
          [
            <strong key="l">Leopard sightings</strong>,
            'Highest of the three',
            'Comparatively lower',
            'Limited data',
          ],
          [
            <strong key="t">Terrain</strong>,
            'Open grassland, dry deciduous forest, riverine patches',
            'Forest, rolling hills, open woodland',
            'Mixed; scenic',
          ],
          [
            <strong key="r">Road access</strong>,
            'Best of the three',
            'Reasonable',
            'Rural interior roads, rough after monsoon',
          ],
          [
            <strong key="v">Vehicles</strong>,
            'Registered Gypsy or eligible private vehicle',
            'Registered Gypsy only',
            'Registered Gypsy or eligible private vehicle',
          ],
          [
            <strong key="a">Accommodation nearby</strong>,
            'Most hotels and homestays',
            'Limited',
            'Still developing',
          ],
        ]}
      />
    </GuideSection>

    <GuideSection title="Ahera Gate — our recommendation">
      <p>
        When guests ask which gate to book, our answer is almost always Ahera.
      </p>
      <p>
        It sits on the Pohari side of the park and offers the best overall
        combination of sightings, road connectivity and convenience. It is the
        closest gate for most travellers arriving from Gwalior Airport, Gwalior
        Junction or Shivpuri Railway Station, and the easiest to reach.
      </p>
      <p>
        Over the past two tourism seasons our team has spent hundreds of days
        tracking wildlife in this zone. On that record, Ahera has consistently
        produced the highest number of cheetah and leopard sightings of the three
        tourism gates. The habitat explains a lot of it — a mix of open
        grasslands, dry deciduous forest and riverine patches that suits cheetahs,
        leopards, sloth bears, deer and a long list of birds.
      </p>
      <p>Why we point people here:</p>
      <GuideList
        items={[
          'Best road connectivity of the three gates.',
          'Closest to most hotels and homestays.',
          'Straightforward access from Gwalior and Shivpuri.',
          'The habitat where cheetahs and leopards are most reliably seen.',
          'Either a registered Gypsy or an eligible private vehicle is permitted.',
          'Well suited to first-time visitors and to photographers.',
        ]}
      />
      <GuideCallout>
        <p>
          Booking only one or two safaris? Book them at Ahera. With limited drives
          you want the zone with the best odds, not the most novel one.
        </p>
      </GuideCallout>
    </GuideSection>

    <GuideSection title="Tiktoli Gate">
      <p>
        Tiktoli was one of the original tourism gates developed for Kuno and gives
        a genuinely different safari. The landscape here is forest, rolling hills
        and open woodland — beautiful country, and rewarding if you enjoy a forest
        drive rather than open grassland.
      </p>
      <p>
        Deer, nilgai, wild boar, jackals, hyenas and a rich variety of birds are
        seen regularly. Cheetah sightings, though, have generally been less
        frequent here than at Ahera through recent seasons, and leopard sightings
        are comparatively lower too. That can shift as animals expand their
        territories, but it is what our drives have shown so far.
      </p>
      <p>
        Two practical points. Only registered safari Gypsies are currently
        permitted from Tiktoli, so a vehicle has to be arranged in advance.
        Accommodation around Tiktoli is also more limited than on the Ahera side.
      </p>
      <p className="font-semibold text-neutral-900">Tiktoli suits you if:</p>
      <GuideList
        items={[
          'You want to explore a quieter part of Kuno.',
          'You prefer forest landscapes to open grassland.',
          'You are a birdwatcher.',
          'You are already staying on the Tiktoli side of the park.',
        ]}
      />
    </GuideSection>

    <GuideSection title="Peepalbawri Gate">
      <p>
        Peepalbawri opens onto another beautiful section of the park. The approach
        runs through rural villages and interior roads, which is part of its
        appeal — though road conditions can be rough in stretches, particularly
        after the monsoon.
      </p>
      <p>
        Tourism infrastructure here is still developing. There are fewer places to
        stay nearby and limited Gypsy availability at the gate itself, so most
        guests arrange their vehicle before arriving.
      </p>
      <p>
        Eligible private vehicles are currently permitted, as at Ahera, subject to
        Forest Department rules. Because comparatively few visitors enter here,
        there is less consistent sighting data than for the other two zones — but
        the landscapes are excellent and the zone has real potential as tourism
        develops.
      </p>
    </GuideSection>

    <GuideSection title="Which gate should you choose?">
      <GuideList
        items={[
          <>
            <strong>Ahera</strong> — a first visit, the best road access, and
            cheetahs or leopards as the priority.
          </>,
          <>
            <strong>Tiktoli</strong> — quieter forest landscapes and birds, and
            you are happy to travel in a registered Gypsy.
          </>,
          <>
            <strong>Peepalbawri</strong> — a less-visited side of the park, and
            you do not mind rural roads.
          </>,
        ]}
      />
      <p>
        We pick the gate for each of our guests based on the latest wildlife
        movement, the season and their travel plans rather than a fixed rule —
        which is often the difference between a good drive and a quiet one. See{' '}
        <Link to="/kuno-safari-booking" className="text-primary-700 underline">
          how booking and permits work
        </Link>
        , or{' '}
        <Link to="/where-to-stay-near-kuno" className="text-primary-700 underline">
          where to stay for each gate
        </Link>
        .
      </p>
    </GuideSection>
  </GuideLayout>
);

export default KunoSafariZones;
