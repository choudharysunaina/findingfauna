import { Link } from 'react-router-dom';
import GuideLayout from '../../components/guide/GuideLayout';
import { GuideSection, GuideTable, GuideCallout, GuideList } from '../../components/guide/GuideBits';

// VERIFY before publishing: the monsoon closure dates and the exact reopening
// date are set by Forest Department notification each year and have moved
// between mid-October and 1 October in recent seasons. Safari slot timings also
// shift with the season. Confirm both, then update the month table, the timings
// table and the matching FAQ answers together.
const faqs = [
  {
    question: 'What is the best time to visit Kuno National Park?',
    answer:
      'October to March, for comfortable weather and active wildlife through the day — this is peak season. April to June is hot, often above 40°C, but sightings are excellent because animals concentrate around water, and the park is much quieter. The park closes through the monsoon.',
  },
  {
    question: 'When is Kuno National Park closed?',
    answer:
      'Through the monsoon, broadly July to September, reopening in October. Exact dates are set by Forest Department notification each year, so confirm before booking travel around the shoulder weeks.',
  },
  {
    question: 'What are the Kuno safari timings?',
    answer:
      'There are two slots a day, morning and evening, each running about 3.5 to 4 hours. Start times shift through the season with sunrise and sunset — earlier in summer, later in winter. Your exact slot times are confirmed with your permit.',
  },
  {
    question: 'Which month is best for cheetah sightings?',
    answer:
      'The hot months of April to June give the highest concentration of animals around water sources, which makes sightings more predictable. November to February is the most comfortable to travel in and still very good. There is no month with guaranteed sightings — these are free-ranging wild animals.',
  },
  {
    question: 'Is it worth visiting Kuno in summer?',
    answer:
      'Yes, if you can handle the heat. Vegetation thins out, animals gather at waterholes and the early-morning safari in particular can be outstanding. Take the first morning slot, carry water, and expect the middle of the day to be spent indoors.',
  },
  {
    question: 'Should I book the morning or evening safari?',
    answer:
      'Both, if you can. Wildlife is most active in the cooler hours at either end of the day, and the two slots cover different light and often different routes. If you only take one, the morning slot is generally the stronger of the two.',
  },
];

const KunoSafariTimings = () => (
  <GuideLayout
    path="/best-time-to-visit-kuno"
    category="guide_best_time"
    seoTitle="Best Time to Visit Kuno National Park (Month by Month)"
    seoDescription="Month-by-month weather, sighting odds and crowd levels for Kuno National Park, plus safari timings by season and exactly when the park closes for the monsoon."
    heading="Best Time to Visit Kuno National Park"
    intro="Kuno is open from October to June and closed through the monsoon. Winter is the most comfortable time to travel; the hot months give the most reliable sightings. Here is the year, month by month."
    heroImage="/home/leopard.webp"
    heroImageAlt="Leopard resting in dry deciduous forest at Kuno National Park in winter light"
    faqs={faqs}
  >
    <GuideSection title="Month by month">
      <GuideTable
        caption="Closure dates are set by Forest Department notification each year — confirm before booking travel in late June or October."
        headers={['Month', 'Weather', 'Sightings', 'Crowds']}
        rows={[
          ['October', 'Pleasant, post-monsoon green', 'Good — season opens', 'Building'],
          ['November', 'Cool, clear', 'Very good', 'Busy'],
          ['December', 'Cold mornings, clear days', 'Very good', 'Peak'],
          ['January', 'Coldest; cold early safaris', 'Very good', 'Peak'],
          ['February', 'Mild and comfortable', 'Very good', 'Busy'],
          ['March', 'Warming up', 'Very good', 'Moderate'],
          ['April', 'Hot', 'Excellent — animals at water', 'Quiet'],
          ['May', 'Very hot, often above 40°C', 'Excellent', 'Quiet'],
          ['June', 'Very hot, humid late in the month', 'Excellent', 'Very quiet'],
          [<strong key="j">July</strong>, 'Monsoon', <strong key="c1">Park closed</strong>, '—'],
          [<strong key="a">August</strong>, 'Monsoon', <strong key="c2">Park closed</strong>, '—'],
          [
            <strong key="s">September</strong>,
            'Monsoon tailing off',
            <strong key="c3">Park closed</strong>,
            '—',
          ],
        ]}
      />
    </GuideSection>

    <GuideSection title="Winter: October to March">
      <p>
        This is the season most people should book. Temperatures are pleasant,
        skies are clear, and wildlife stays active through much of the day rather
        than retreating from the heat — which makes both safari slots productive
        and the conditions good for photography and birdwatching.
      </p>
      <p>
        It is also peak season, so permits for weekends, public holidays and the
        December–January stretch go first. If your dates are fixed and fall in
        that window, book as early as you can.
      </p>
      <p>
        Carry a jacket. December and January mornings in an open Gypsy at speed
        are genuinely cold, and the first hour is often the best hour.
      </p>
    </GuideSection>

    <GuideSection title="Summer: April to June">
      <p>
        Temperatures pass 40°C, and this is nonetheless one of the best times for
        sightings. Water becomes scarce, so animals concentrate predictably around
        the remaining sources, and thinner vegetation means you can see further
        into the forest.
      </p>
      <p>
        Early morning safaris in these months are frequently excellent. The
        trade-off is real, though — the middle of the day is not usable, and the
        evening slot can be uncomfortable.
      </p>
      <GuideCallout>
        <p>
          Summer is also the quietest and, at{' '}
          <Link to="/kuno-safari-price" className="text-primary-700 underline">
            the same package price
          </Link>
          , the best value. Fewer vehicles at a sighting changes the experience
          more than most people expect.
        </p>
      </GuideCallout>
    </GuideSection>

    <GuideSection title="Monsoon: July to September — the park is closed">
      <p>
        Kuno closes to tourism through the monsoon, reopening in October. The
        rains rejuvenate the grasslands and riverine habitats and the wildlife is
        left undisturbed through the breeding season.
      </p>
      <p>
        Exact closing and reopening dates are notified by the Forest Department
        each year and have shifted between seasons, so if you are looking at late
        June or early October, check with us before booking flights.
      </p>
    </GuideSection>

    <GuideSection title="Safari timings">
      <p>
        Two slots a day, each about three and a half to four hours. Start times
        move through the season, tracking sunrise and sunset — earlier in summer,
        later in winter. Your exact times are confirmed with your permit.
      </p>
      <GuideTable
        headers={['Season', 'Morning slot', 'Evening slot']}
        rows={[
          ['October – December', 'Shortly after sunrise', 'Mid-afternoon until sunset'],
          ['January – March', 'Shortly after sunrise', 'Mid-afternoon until sunset'],
          ['April – June', 'Earliest starts of the year', 'Latest starts of the year'],
        ]}
      />
      <p>
        If you are taking only one drive, take the morning. If you are taking
        several, alternate — different light, and often different routes.
      </p>
    </GuideSection>

    <GuideSection title="How long should you stay?">
      <p>
        Kuno rewards time more than most parks, because the tourism area is large
        and each route crosses different habitat.
      </p>
      <GuideList
        items={[
          <>
            <strong>Two nights, two to three safaris</strong> — the practical
            minimum for a real chance at cheetahs and leopards.
          </>,
          <>
            <strong>Three nights, four to six safaris</strong> — what our packages
            are built around, and what we would book ourselves.
          </>,
          <>
            <strong>Longer</strong> — worth it for photographers, or to add{' '}
            <Link to="/packages" className="text-primary-700 underline">
              Madhav National Park and the Chambal gharial sanctuary
            </Link>
            .
          </>,
        ]}
      />
      <p>
        Next:{' '}
        <Link to="/how-to-reach-kuno" className="text-primary-700 underline">
          how to reach Kuno
        </Link>{' '}
        from Gwalior, Delhi, Jaipur or Bhopal.
      </p>
    </GuideSection>
  </GuideLayout>
);

export default KunoSafariTimings;
