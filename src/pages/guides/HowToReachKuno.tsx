import { Link } from 'react-router-dom';
import GuideLayout from '../../components/guide/GuideLayout';
import { GuideSection, GuideTable, GuideCallout } from '../../components/guide/GuideBits';
import { CONTACT_PHONE, CONTACT_PHONE_DISPLAY, BUSINESS } from '../../config/site';

const faqs = [
  {
    question: 'Which is the nearest airport to Kuno National Park?',
    answer:
      'Gwalior Airport, roughly 165 km away and about three to three and a half hours by road. Jaipur (290 km) and Bhopal (390 km) are the next nearest options if Gwalior does not have a convenient flight.',
  },
  {
    question: 'Which is the nearest railway station to Kuno National Park?',
    answer:
      'Shivpuri Railway Station is closest at roughly 35 km. Gwalior Junction, about 165 km away, has far better connectivity — direct trains from Delhi, Mumbai, Jaipur and most major Indian cities — and is the station most of our guests use.',
  },
  {
    question: 'How do I get from Gwalior to Kuno National Park?',
    answer:
      'By road, about 165 km and three to three and a half hours. Our packages include pickup and drop from Gwalior by taxi, so most guests fly or take a train into Gwalior and we handle the rest.',
  },
  {
    question: 'How far is Kuno National Park from Delhi?',
    answer:
      'Delhi to Gwalior is about 320 km by road or a few hours by train, then 165 km on to the park. Most travellers from Delhi take an early train to Gwalior and drive from there, arriving in time for an evening safari the same day.',
  },
  {
    question: 'Can I reach Kuno by bus?',
    answer:
      'Yes. State and private buses run to Shivpuri and Pohari from Gwalior and other Madhya Pradesh towns. It is the cheapest way in, but slower and less predictable than a taxi — worth planning a buffer day if you rely on it.',
  },
  {
    question: 'Do I need my own vehicle at Kuno?',
    answer:
      'Not for the safaris — the Ahera and Peepalbawri zones allow eligible private vehicles subject to Forest Department permission, but we recommend a registered Gypsy with a driver who knows the routes. Outside the park, distances between the stays and the gates are short and we arrange local transport.',
  },
];

const HowToReachKuno = () => (
  <GuideLayout
    path="/how-to-reach-kuno"
    category="guide_how_to_reach"
    seoTitle="How to Reach Kuno National Park (Air, Rail & Road)"
    seoDescription="Gwalior Airport is 165 km away and Shivpuri railway station 35 km. Distances, drive times and the best route to Kuno from Delhi, Jaipur, Agra, Bhopal and Gwalior."
    heading="How to Reach Kuno National Park"
    intro="Kuno sits in Sheopur district, Madhya Pradesh. Almost everyone arrives via Gwalior — 165 km and about three hours by road — whether they fly in or take the train. Here are all the routes, with real distances."
    heroImage="/kuno-national-park/gwalior.webp"
    heroImageAlt="Gwalior Fort, the main gateway city for travellers heading to Kuno National Park"
    faqs={faqs}
  >
    <GuideSection title="The short answer">
      <p>
        Get to <strong>Gwalior</strong> — by air or by train — and travel the
        remaining 165 km by road. That is the route most of our guests take, and
        our packages include the Gwalior pickup and drop.
      </p>
      <GuideCallout>
        <p>
          Our base is at {BUSINESS.addressDisplay}, on the Pohari side of the park
          and closest to the{' '}
          <Link to="/kuno-safari-zones" className="text-primary-700 underline">
            Ahera gate
          </Link>
          . If you are arranging your own travel, that is the point to aim for.
        </p>
      </GuideCallout>
    </GuideSection>

    <GuideSection title="By air">
      <GuideTable
        headers={['Airport', 'Distance', 'Notes']}
        rows={[
          [
            <strong key="g">Gwalior (GWL)</strong>,
            '165 km',
            'Nearest airport. Domestic connections to Delhi, Mumbai, Bengaluru, Indore and Hyderabad. About 3–3.5 hours by road.',
          ],
          [
            'Jaipur (JAI)',
            '290 km',
            'Wider choice of flights. Useful if you are combining Kuno with Ranthambore or Rajasthan.',
          ],
          [
            'Bhopal (BHO)',
            '390 km',
            'A long drive, but worth checking if flights into Gwalior are inconvenient.',
          ],
        ]}
      />
      <p>
        Taxis and private vehicles are readily available at all three. If you are
        travelling with us, tell us your flight and we will have a vehicle waiting
        at Gwalior.
      </p>
    </GuideSection>

    <GuideSection title="By rail">
      <GuideTable
        headers={['Station', 'Distance', 'Notes']}
        rows={[
          [
            <strong key="g">Gwalior Junction (GWL)</strong>,
            '165 km',
            'The station to aim for. Direct trains from Delhi, Mumbai, Jaipur, Agra, Bhopal and most major cities.',
          ],
          [
            'Shivpuri (SVPI)',
            '35 km',
            'Physically closest, but far fewer trains stop here. Convenient if a service happens to suit your route.',
          ],
        ]}
      />
      <p>
        Rail is often the better choice than flying. The Delhi–Gwalior corridor
        is well served by fast trains, and an early departure gets you to the park
        with time for an evening safari the same day.
      </p>
    </GuideSection>

    <GuideSection title="By road, from major cities">
      <GuideTable
        headers={['From', 'Distance', 'Approximate drive']}
        rows={[
          ['Shivpuri', '35 km', 'Under an hour'],
          ['Gwalior', '165 km', '3–3.5 hours'],
          ['Jaipur', '290 km', '5–6 hours'],
          ['Agra', '480 km', '8–9 hours'],
          ['Bhopal', '390 km', '7–8 hours'],
        ]}
      />
      <p>
        The highways are well maintained and the drive is straightforward by
        private vehicle, taxi or bus.
      </p>
    </GuideSection>

    <GuideSection title="From Delhi">
      <p>
        Delhi is the most common starting point. The practical route is Delhi to
        Gwalior — about 320 km by road, or a few hours on a fast train — and then
        165 km on to the park.
      </p>
      <p>
        Most people take an early morning train to Gwalior, are picked up at the
        station and reach the park by early afternoon, in time for the evening
        safari on day one. That turns a Kuno trip into a comfortable long weekend
        rather than a week off.
      </p>
    </GuideSection>

    <GuideSection title="From Jaipur, Agra and Ranthambore">
      <p>
        Kuno pairs naturally with a Rajasthan or Golden Triangle itinerary. Jaipur
        is 290 km away and Sawai Madhopur — the base for Ranthambore — is about
        170 km, which makes a combined cheetah-and-tiger trip genuinely practical
        rather than a stretch.
      </p>
      <p>
        Agra is 480 km, so it works as part of a longer route rather than a
        direct hop. If you want a combined itinerary costed out, tell us your
        route and dates.
      </p>
    </GuideSection>

    <GuideSection title="Getting around once you are here">
      <p>
        Distances between the stays and the safari gates are short, and we arrange
        local transport as part of every package — including the drive to whichever
        gate we are entering that morning.
      </p>
      <p>
        For the safaris themselves you want a registered Gypsy with an experienced
        driver rather than your own car, even where private vehicles are
        permitted; see{' '}
        <Link to="/kuno-safari-booking" className="text-primary-700 underline">
          how booking and permits work
        </Link>
        .
      </p>
      <p>
        Unsure which route suits your dates? Call or WhatsApp{' '}
        <a href={`tel:${CONTACT_PHONE}`} className="text-primary-700 underline">
          {CONTACT_PHONE_DISPLAY}
        </a>{' '}
        and we will tell you the quickest way in from where you are starting.
      </p>
    </GuideSection>
  </GuideLayout>
);

export default HowToReachKuno;
