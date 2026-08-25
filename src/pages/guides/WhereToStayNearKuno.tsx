import { Link } from 'react-router-dom';
import GuideLayout from '../../components/guide/GuideLayout';
import { GuideSection, GuideTable, GuideCallout, GuideList } from '../../components/guide/GuideBits';
import { packageData } from '../../data/packageData';

const [budgetStay, premiumStay] = packageData[0].accommodationOptions;

const faqs = [
  {
    question: 'Where should I stay for a Kuno safari?',
    answer:
      'On the Pohari side of the park, near the Ahera gate. That is where most accommodation is, it has the best road access, and it is within reach of both the Ahera and Tiktoli zones. Options near Tiktoli itself are limited, and tourism infrastructure around Peepalbawri is still developing.',
  },
  {
    question: 'What accommodation options do your packages include?',
    answer:
      'Two tiers. A budget-friendly local homestay with clean, comfortable rooms and home-cooked food, or a premium safari lodge with resort facilities including a spa. Safaris, guiding, permits and transfers are identical either way — only the stay changes.',
  },
  {
    question: 'How far is the accommodation from the safari gate?',
    answer:
      'Short drives. Our stays on the Pohari side give access to both the Ahera and Tiktoli zones, and we handle the transfer to whichever gate we are entering that morning, timed to your permit slot.',
  },
  {
    question: 'Is there accommodation inside Kuno National Park?',
    answer:
      'No. Tourist accommodation is outside the park boundary, which is normal for Indian national parks. What matters is how close your stay is to the gate you are entering and how well the transfer is timed to your slot.',
  },
  {
    question: 'Should I book a homestay or a lodge?',
    answer:
      'A homestay if you would rather put the money into extra safaris, and if home-cooked local food and a simpler stay appeal — most of our repeat guests choose this. A lodge if you are travelling with family who want resort facilities, or on a special-occasion trip.',
  },
  {
    question: 'Do I need to book accommodation separately?',
    answer:
      'Not if you travel with us. Every package includes three nights and all meals, so the stay, safaris and transfers arrive as one booking rather than three you have to line up yourself.',
  },
];

const WhereToStayNearKuno = () => (
  <GuideLayout
    path="/where-to-stay-near-kuno"
    category="guide_stay"
    seoTitle="Where to Stay Near Kuno National Park"
    seoDescription="Where to base yourself for a Kuno safari: why the Pohari side near Ahera gate works best, homestay versus premium lodge, and what actually matters when picking a stay."
    heading="Where to Stay Near Kuno National Park"
    intro="Which side of the park you stay on matters more than the star rating. Most accommodation sits on the Pohari side near the Ahera gate, which is also the best-connected and the zone with the strongest sightings."
    heroImage="/packages/homestay.webp"
    heroImageAlt="Homestay accommodation near Kuno National Park on the Pohari side"
    faqs={faqs}
  >
    <GuideSection title="Stay on the Pohari side, near Ahera">
      <p>
        Before comparing properties, decide which side of the park you want to be
        on. It has more effect on your trip than anything about the rooms.
      </p>
      <p>
        The <strong>Pohari side, near the Ahera gate</strong>, is where we base
        our guests. It has the best road access, the most accommodation to choose
        from, the easiest arrival from Gwalior and Shivpuri, and it is within reach
        of both the Ahera and Tiktoli zones — so we can switch gates between drives
        depending on where wildlife is moving.
      </p>
      <p>
        Accommodation immediately around <strong>Tiktoli</strong> is limited.
        Around <strong>Peepalbawri</strong> tourism infrastructure is still
        developing, with fewer places to stay and limited Gypsy availability at the
        gate.{' '}
        <Link to="/kuno-safari-zones" className="text-primary-700 underline">
          Full comparison of the three zones
        </Link>
        .
      </p>
      <GuideCallout>
        <p>
          There is no accommodation inside the park — that is normal for Indian
          national parks. What matters is the drive to your gate and whether the
          transfer is timed to your permit slot, not proximity on a map.
        </p>
      </GuideCallout>
    </GuideSection>

    <GuideSection title="The two options in our packages">
      <p>
        Every package includes three nights and all meals at one of two tiers.
        Safaris, guiding, permits, Gypsy and Gwalior transfers are identical either
        way — the only thing that changes is where you sleep and eat.
      </p>
      <GuideTable
        headers={['', budgetStay.type, premiumStay.type]}
        rows={[
          [
            <strong key="p">Price (Cheetah Safari, per person)</strong>,
            budgetStay.price,
            premiumStay.price,
          ],
          [<strong key="s">Style</strong>, budgetStay.subtitle, premiumStay.subtitle],
          [<strong key="b">Best for</strong>, budgetStay.tags.join(', '), premiumStay.tags.join(', ')],
        ]}
      />
      <h3 className="mt-8 mb-3 font-bold tracking-tight text-xl md:text-2xl" id="homestay">
        {budgetStay.type}
      </h3>
      <GuideList items={budgetStay.features} />
      <h3 className="mt-8 mb-3 font-bold tracking-tight text-xl md:text-2xl" id="lodge">
        {premiumStay.type}
      </h3>
      <GuideList items={premiumStay.features} />
    </GuideSection>

    <GuideSection title="Which should you pick?">
      <p>Our honest advice, having seen both work well for different people:</p>
      <GuideList
        items={[
          <>
            <strong>Homestay</strong> if you would rather put the difference into
            two more safaris. Most of our repeat guests do exactly this — the
            rooms are clean and comfortable, the home-cooked food is genuinely
            good, and you spend most of your waking hours in the park anyway.
          </>,
          <>
            <strong>Premium lodge</strong> if you are travelling with family who
            want resort facilities and a pool and spa between drives, or it is a
            honeymoon or special-occasion trip.
          </>,
          <>
            <strong>Either, for photographers.</strong> What matters far more is
            the number of safaris and being first out of the gate in the morning.
          </>,
        ]}
      />
      <p>
        The full inclusion list and pricing for both tiers is on the{' '}
        <Link to="/kuno-safari-price" className="text-primary-700 underline">
          safari price page
        </Link>
        .
      </p>
    </GuideSection>

    <GuideSection title="What actually matters in a Kuno stay">
      <p>
        Kuno is not a place where you spend much time at your accommodation. You
        leave before sunrise and get back after dark. Judge a stay on:
      </p>
      <GuideList
        items={[
          <>
            <strong>Distance and access to your gate.</strong> A short, reliable
            drive matters more than luxury. Permit slots do not wait.
          </>,
          <>
            <strong>Whether they will feed you at 5am.</strong> Early tea and
            breakfast before a morning safari, and a hot meal when you get back,
            make a bigger difference than any facility.
          </>,
          <>
            <strong>Whether the safari is actually arranged.</strong> A stay that
            books a room but leaves the permit and Gypsy to you is the most common
            way a Kuno trip goes wrong — see{' '}
            <Link to="/kuno-safari-booking" className="text-primary-700 underline">
              how booking works
            </Link>
            .
          </>,
          <>
            <strong>Somewhere to charge and back up.</strong> Rural power is not
            always reliable; if you are shooting, ask.
          </>,
        ]}
      />
      <p>
        We arrange the stay, the safaris and the transfers as one booking, so none
        of it lands on you at 5am.{' '}
        <Link to="/packages" className="text-primary-700 underline">
          See the packages
        </Link>{' '}
        or send us your dates below.
      </p>
    </GuideSection>
  </GuideLayout>
);

export default WhereToStayNearKuno;
