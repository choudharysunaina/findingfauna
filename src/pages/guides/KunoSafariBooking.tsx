import { Link } from 'react-router-dom';
import GuideLayout from '../../components/guide/GuideLayout';
import { GuideSection, GuideTable, GuideCallout, GuideList } from '../../components/guide/GuideBits';
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY } from '../../config/site';

// VERIFY before publishing: the Forest Department revises permit rules and the
// private-vehicle allowance between seasons, and the advance-booking window has
// changed more than once. Confirm each of these against the current MP Forest
// notification, then update the copy and the FAQ answers together.
const faqs = [
  {
    question: 'How do I book a safari in Kuno National Park?',
    answer:
      'There are two parts to it. The safari permit is issued by the Madhya Pradesh Forest Department through its online portal, and the safari Gypsy has to be arranged separately through an authorised local operator. Booking through us covers both, plus the driver, the naturalist and the park formalities on the day.',
  },
  {
    question: 'Does the government booking portal include a safari vehicle?',
    answer:
      'No. This is the single most common surprise for first-time visitors. The Forest Department currently issues only the permit; it does not assign a Gypsy with it. If you book the permit yourself and arrive without a registered vehicle arranged, you will not be able to enter.',
  },
  {
    question: 'Are canter safaris available in Kuno National Park?',
    answer:
      'No. Unlike some other tiger reserves, Kuno has no shared canter option. The Gypsy safari is the only official safari vehicle inside the park, which is also why a Kuno safari costs more per person than a canter seat elsewhere.',
  },
  {
    question: 'Can I take my own car on a Kuno safari?',
    answer:
      'Visitors entering through Ahera and Peepalbawri can currently use an eligible private vehicle, subject to Forest Department permission. Tiktoli permits registered Gypsies only. For a first visit we still recommend a registered Gypsy with an experienced driver and naturalist — the open vehicle, the height and a driver who knows the routes make a real difference to what you actually see.',
  },
  {
    question: 'What documents do I need to book a Kuno safari?',
    answer:
      'A government photo ID for every person in the vehicle, with the ID number recorded at the time of booking — Aadhaar, voter ID, PAN, driving licence or passport. Foreign nationals need passport details. Names on the permit must match the IDs carried on the day, and the ID has to be produced at the gate.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'As early as you can fix your dates. The number of vehicles allowed into each zone per slot is capped, and weekends, public holidays and the peak winter months fill first. Bookings are first-come, first-served.',
  },
  {
    question: 'How long does a safari last?',
    answer:
      'A safari in Kuno runs roughly 3.5 to 4 hours. There are morning and evening slots, and the exact timings shift with the season as sunrise and sunset move.',
  },
  {
    question: 'How many safaris should I book?',
    answer:
      'One if you are passing through and want to see Kuno at all. Two or three suits most visitors and lets you cover different routes and habitats. Four to six if you are a photographer or serious wildlife enthusiast — Kuno is large, and each route passes through different terrain with different animals on it.',
  },
];

const KunoSafariBooking = () => (
  <GuideLayout
    path="/kuno-safari-booking"
    category="guide_booking"
    seoTitle="Kuno Safari Booking: Permits, Gypsy & Zones"
    seoDescription="The permit and the Gypsy are booked separately in Kuno — the Forest Department portal does not assign a vehicle. Zones, documents, timings and how to book, explained by local guides."
    heading="Kuno Safari Booking: Permits, Gypsy Safari & Zones"
    intro="Booking a safari in Kuno is not quite like booking one at Bandhavgarh or Ranthambore. There is no canter, the permit and the vehicle come from two different places, and which gate you pick changes what you are likely to see. Here is how it actually works."
    heroImage="/home/cheetah.webp"
    heroImageAlt="Cheetah walking across open grassland in Kuno National Park during a morning safari"
    faqs={faqs}
  >
    <GuideSection title="How the Kuno permit system actually works">
      <p>
        A Kuno safari has two separate bookings behind it, and understanding that
        upfront saves most of the confusion.
      </p>
      <p>
        The <strong>safari permit</strong> is issued by the Madhya Pradesh Forest
        Department. It covers your entry, the vehicle's entry and the compulsory
        forest guide, and it is tied to a specific zone and a specific
        morning or evening slot. Names and government ID numbers for every person
        in the vehicle go onto the permit at the time of booking.
      </p>
      <p>
        The <strong>safari Gypsy</strong> does not come with it. The Forest
        Department currently issues only the permit — the government portal does
        not assign a vehicle. A registered safari Gypsy has to be arranged
        separately through an authorised local operator.
      </p>
      <GuideCallout>
        <p>
          <strong>This is the mistake we see most often.</strong> Visitors book a
          permit online, arrive at the gate, and discover they have no vehicle. In
          peak season there is rarely a spare Gypsy waiting at the gate, and a
          permit is tied to its slot — miss it and it is gone.
        </p>
      </GuideCallout>
      <p>
        When you book through us, both halves are handled together: the permit for
        your chosen zone and slot, a registered Gypsy, an experienced driver who
        knows the routes, and a naturalist in the vehicle with you.
      </p>
    </GuideSection>

    <GuideSection title="Gypsy safari only — there are no canter safaris">
      <p>
        The open Gypsy is the only official safari vehicle inside Kuno National
        Park. There is no shared canter option of the kind you may have taken at
        other reserves.
      </p>
      <p>
        That has two consequences worth planning around. The per-person cost is
        higher than a canter seat, because you are paying for a vehicle rather
        than a seat on a bus. But the experience is considerably better: a small
        group, an unobstructed view on all sides, and a driver who can stop, wait
        and reposition for a sighting instead of keeping to a fixed route.
      </p>
      <p>
        We cap our safaris at four guests per Gypsy, so everyone gets a window
        seat and a clear line of sight.
      </p>
    </GuideSection>

    <GuideSection title="Which zone should you book?">
      <p>
        Kuno currently opens three tourism zones, and they are genuinely
        different — in terrain, in road quality, in which vehicles are allowed,
        and in what our team actually sees on drives.
      </p>
      <GuideTable
        headers={['Gate', 'Best for', 'Vehicles allowed']}
        rows={[
          [
            <strong key="a">Ahera</strong>,
            'First visits, cheetah and leopard sightings, easiest access from Gwalior and Shivpuri',
            'Registered Gypsy or eligible private vehicle',
          ],
          [
            <strong key="t">Tiktoli</strong>,
            'Quieter forest landscapes, birdwatching',
            'Registered Gypsy only',
          ],
          [
            <strong key="p">Peepalbawri</strong>,
            'A less-visited side of the park, if you do not mind rough rural roads',
            'Registered Gypsy or eligible private vehicle',
          ],
        ]}
      />
      <p>
        If you are booking only one or two safaris, we recommend Ahera. Over the
        past two tourism seasons our team has spent hundreds of days tracking
        wildlife across these zones, and Ahera has consistently produced the most
        cheetah and leopard sightings of the three.{' '}
        <Link to="/kuno-safari-zones" className="text-primary-700 underline">
          Full gate-by-gate comparison
        </Link>
        .
      </p>
    </GuideSection>

    <GuideSection title="What you need to book">
      <GuideList
        items={[
          <>
            <strong>A government photo ID for every person</strong> in the
            vehicle — Aadhaar, voter ID, PAN, driving licence or passport. The
            number goes on the permit and the ID must be carried on the day.
          </>,
          <>
            <strong>Passport details</strong> for foreign nationals.
          </>,
          <>
            <strong>Fixed dates.</strong> Vehicle numbers per zone per slot are
            capped and bookings are first-come, first-served, so dates drive
            everything else.
          </>,
          <>
            <strong>Your preferred slot</strong> — morning or evening. Most
            visitors doing multiple safaris take both.
          </>,
        ]}
      />
    </GuideSection>

    <GuideSection title="What a Kuno safari is actually like">
      <p>
        A safari runs about three and a half to four hours. The landscape changes
        constantly across that time — dense Kardhai forest gives way to open
        grassland where cheetahs sit scanning the horizon, then seasonal streams,
        rocky plateaus, river crossings and dry deciduous woodland.
      </p>
      <p>
        You might find a cheetah resting under a tree, a leopard walking a forest
        track, a sloth bear digging for termites, or a herd of chital suddenly
        alarm-calling because something is moving that you cannot see yet.
      </p>
      <p>
        For photographers, Kuno is unusually generous. Much of the park is open
        enough for a clean line of sight, which is not true of many Indian
        forests, and there are far fewer vehicles crowding a sighting than at the
        better-known reserves.
      </p>
    </GuideSection>

    <GuideSection title="Is one safari enough?">
      <p>
        Honestly, no — not if you want to see what Kuno actually has. The tourism
        area is large and each route crosses different habitat. One drive might be
        entirely grassland and cheetah country; the next is tracking a leopard
        through woodland or watching sloth bears near rocky outcrops.
      </p>
      <p>Based on guiding here through the season, what we suggest:</p>
      <GuideTable
        headers={['Safaris', 'Who it suits']}
        rows={[
          ['1', 'Short on time and want to experience Kuno once.'],
          [
            '2–3',
            'Most visitors. Covers different routes and meaningfully improves your chances of a good sighting.',
          ],
          [
            '4–6',
            'Photographers, filmmakers and enthusiasts who want cheetahs and leopards across varying light and habitat.',
          ],
        ]}
      />
      <p>
        Wildlife moves, and every drive unfolds differently with the season, the
        weather and animal behaviour. Most people leave wishing they had booked
        one more.
      </p>
    </GuideSection>

    <GuideSection title="Book through us">
      <p>
        We handle the permit, the registered Gypsy, the driver and the naturalist
        as one booking, and we pick the zone and slot based on where wildlife is
        actually moving that week. Our{' '}
        <Link to="/packages" className="text-primary-700 underline">
          safari packages
        </Link>{' '}
        bundle that with accommodation, meals and Gwalior transfers; see{' '}
        <Link to="/kuno-safari-price" className="text-primary-700 underline">
          what it costs
        </Link>
        .
      </p>
      <p>
        Call or WhatsApp{' '}
        <a href={`tel:${CONTACT_PHONE}`} className="text-primary-700 underline">
          {CONTACT_PHONE_DISPLAY}
        </a>{' '}
        with your dates, or send the form below and we will come back within a
        business day.
      </p>
    </GuideSection>
  </GuideLayout>
);

export default KunoSafariBooking;
