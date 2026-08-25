import { Link } from 'react-router-dom';
import GuideLayout from '../../components/guide/GuideLayout';
import { GuideSection, GuideTable, GuideCallout, GuideList } from '../../components/guide/GuideBits';
import { packageData } from '../../data/packageData';

// VERIFY before publishing — every figure in the Forest Department table below.
// Published third-party sources for the 2025 season quote ₹4,500 per Gypsy and
// ₹1,200 per private light vehicle, but these are revised between seasons and we
// should only publish numbers we can confirm against the current MP Forest
// notification. Until then the table states the components without inventing
// amounts. Our own package prices come from src/data/packageData.ts.
const faqs = [
  {
    question: 'How much does a Kuno safari cost?',
    answer:
      'There are two ways to count it. A single safari is priced per Gypsy rather than per seat, because Kuno has no canter option — so a small group pays more per head than a large one. A complete trip through us starts at ₹28,000 per person for four days and three nights, which covers six safari sessions, accommodation, all meals, a naturalist, every permit and Gypsy charge, and return transfers from Gwalior.',
  },
  {
    question: 'Why is a Kuno safari more expensive per person than other parks?',
    answer:
      'Because there is no shared canter. The Gypsy is the only official safari vehicle in Kuno, so you are paying for a vehicle and its permit rather than a seat on a bus. You get an open vehicle, a maximum of four guests and a driver who can wait out a sighting instead of running a fixed route.',
  },
  {
    question: 'What is included in your package price?',
    answer:
      'Three nights accommodation, all meals, a professional naturalist throughout, all park entrance fees, permits, guide and Gypsy charges and taxes, and pickup and drop from Gwalior by taxi.',
  },
  {
    question: 'What is not included?',
    answer:
      'Airfare and travel to Gwalior, travel insurance, alcohol, shopping, tips, meals and snacks beyond the fixed menu, and any extra safaris or professional camera fees you add on.',
  },
  {
    question: 'What is the difference between the homestay and lodge price?',
    answer:
      'Accommodation only — the safaris, guiding, permits and transfers are identical. The homestay is a clean, comfortable local stay with home-cooked food and excellent access to both the Ahera and Tiktoli zones. The premium lodge adds resort facilities including a spa. On the Cheetah Safari package that is ₹28,000 versus ₹37,000 per person.',
  },
  {
    question: 'Are there extra charges for cameras?',
    answer:
      'Still cameras and phones are fine. Professional video equipment needs prior permission from the Forest Department and attracts a separate fee, which is not included in the package price.',
  },
];

const KunoSafariPrice = () => (
  <GuideLayout
    path="/kuno-safari-price"
    category="guide_price"
    seoTitle="Kuno Safari Price & Cost — What a Trip Really Costs"
    seoDescription="What a Kuno safari actually costs: how Forest Department charges are structured, our 4D/3N packages from ₹28,000 per person, what is included, and a worked total for a full trip."
    heading="Kuno Safari Price: What a Trip Really Costs"
    intro="Safari costs in Kuno are quoted per Gypsy, not per seat, which makes per-person pricing depend on your group size. Here is how the charges break down, what our packages cover, and a worked total for a four-day trip."
    heroImage="/packages/cheetah-package.webp"
    heroImageAlt="Open Gypsy safari vehicle on a forest track in Kuno National Park"
    faqs={faqs}
  >
    <GuideSection title="How Kuno safari charges are structured">
      <p>
        Book a safari directly and you are paying for several separate things. It
        helps to see them apart, because a single quoted figure usually bundles
        some of them and not others.
      </p>
      <GuideTable
        caption="Components of a single Kuno safari. Forest Department rates are revised between seasons — ask us for the current figures for your dates."
        headers={['Charge', 'Basis', 'Who collects it']}
        rows={[
          ['Safari permit / entry', 'Per vehicle, per slot, per zone', 'MP Forest Department'],
          ['Compulsory forest guide', 'Per vehicle, per safari', 'MP Forest Department'],
          [
            'Safari Gypsy + driver',
            'Per vehicle, per safari — booked separately from the permit',
            'Authorised local operator',
          ],
          [
            'Private vehicle entry',
            'Per vehicle, where the zone permits it (Ahera and Peepalbawri)',
            'MP Forest Department',
          ],
          [
            'Professional video permission',
            'Per camera, on prior approval',
            'MP Forest Department',
          ],
          ['Naturalist', 'Per trip — this is what we add', 'Finding Fauna'],
        ]}
      />
      <GuideCallout>
        <p>
          <strong>The Gypsy is not included in the permit.</strong> The Forest
          Department portal issues the permit only; the vehicle has to be arranged
          separately. Any price you see quoted for "a Kuno safari permit" is
          therefore not the cost of taking a safari.{' '}
          <Link to="/kuno-safari-booking" className="text-primary-700 underline">
            How booking works
          </Link>
          .
        </p>
      </GuideCallout>
      <p>
        There is also no canter in Kuno, so there is no cheap per-seat option. A
        Gypsy costs what it costs whether two people or six are in it, which is
        why the per-person figure moves so much with group size.
      </p>
    </GuideSection>

    <GuideSection title="Our package prices">
      <p>
        Rather than quote safaris individually, we price complete trips — four
        days, three nights, six safari sessions, with everything on the park side
        handled. Prices are per person.
      </p>
      <GuideTable
        headers={['Package', 'Where', 'Homestay', 'Premium lodge']}
        rows={packageData.map((pkg) => [
          <Link key={pkg.id} to={`/package/${pkg.id}`} className="text-primary-700 underline">
            {pkg.title}
          </Link>,
          pkg.location,
          pkg.accommodationOptions[0]?.price ?? '—',
          pkg.accommodationOptions[1]?.price ?? '—',
        ])}
      />
      <p>
        The difference between the two columns is accommodation only. Safaris,
        guiding, permits, Gypsy and transfers are identical either way.
      </p>
    </GuideSection>

    <GuideSection title="What the price includes">
      <GuideList
        items={[
          'Three nights accommodation at your chosen tier.',
          'All meals through the trip.',
          'A professional naturalist with you throughout, not just a gate guide.',
          'All park entrance fees, permits, compulsory guide charges, Gypsy charges and taxes.',
          'Pickup and drop from Gwalior by taxi.',
          'Six safari sessions across the stay.',
        ]}
      />
      <p className="font-semibold text-neutral-900">Not included:</p>
      <GuideList
        items={[
          'Airfare and travel to Gwalior.',
          'Travel insurance.',
          'Alcohol, shopping and tips.',
          'Meals and snacks beyond the fixed menu.',
          'Extra safaris beyond the six included, and professional camera fees.',
        ]}
      />
    </GuideSection>

    <GuideSection title="What a four-day trip actually costs, end to end">
      <p>
        Two people travelling from Delhi on the Cheetah Safari package, staying at
        the homestay:
      </p>
      <GuideTable
        headers={['Item', 'Cost for two']}
        rows={[
          ['Package (₹28,000 × 2) — safaris, stay, meals, permits, Gwalior transfers', '₹56,000'],
          ['Delhi to Gwalior return, by train', 'From roughly ₹2,000'],
          ['Tips, drinks, incidentals', '₹2,000–4,000'],
          [<strong key="t">Approximate total</strong>, <strong key="v">₹60,000–62,000</strong>],
        ]}
      />
      <p>
        Add two extra safaris and it moves up; take the premium lodge and it moves
        up by ₹18,000 for two. If you would like a costed itinerary for your exact
        dates, group size and starting city, send us the details and we will put
        real numbers against them.
      </p>
    </GuideSection>

    <GuideSection title="Getting the most out of the money">
      <p>
        Three things make the biggest difference to value, in our experience of
        running these trips:
      </p>
      <GuideList
        items={[
          <>
            <strong>Book more than one safari.</strong> Kuno is large and each
            route crosses different habitat. The marginal cost of a second or
            third drive buys a much larger increase in what you see than the
            first drive alone.
          </>,
          <>
            <strong>Fill the vehicle.</strong> Because the Gypsy is priced per
            vehicle, four people travelling together pay meaningfully less per
            head than two.
          </>,
          <>
            <strong>Travel in the shoulder months.</strong>{' '}
            <Link to="/best-time-to-visit-kuno" className="text-primary-700 underline">
              April to June
            </Link>{' '}
            is hot, but animals concentrate around water and sightings are
            excellent — and it is quieter than peak winter.
          </>,
        ]}
      />
    </GuideSection>
  </GuideLayout>
);

export default KunoSafariPrice;
