import { Link } from 'react-router-dom';
import SEOHead from '../components/ui/SEOHead';
import { SITE_URL } from '../config/site';

const suggestions = [
  { to: '/kuno-national-park', label: 'Kuno National Park guide' },
  { to: '/packages', label: 'Safari packages & prices' },
  { to: '/blogs', label: 'Field notes & safari guides' },
  { to: '/contact', label: 'Contact us' },
];

/**
 * Catch-all route. Without one, an unknown URL rendered the Layout around an
 * empty <main> with no SEOHead at all — no title, no description, no robots
 * directive — which crawlers read as a thin indexable page rather than a
 * missing one. GitHub Pages still serves dist/404.html for the HTTP status;
 * this handles the client-side render.
 */
const NotFound = () => (
  <>
    <SEOHead
      title="Page not found"
      description="This page does not exist. Browse our Kuno National Park safari guides, packages and field notes instead."
      canonical={`${SITE_URL}/404`}
      noindex
    />
    <div className="container py-24 text-center">
      <p className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">404</p>
      <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4">
        We couldn't find that page
      </h1>
      <p className="text-neutral-600 max-w-xl mx-auto mb-10">
        The link may be out of date. Here is where most people are heading:
      </p>
      <ul className="flex flex-wrap justify-center gap-3">
        {suggestions.map((item) => (
          <li key={item.to}>
            <Link
              to={item.to}
              className="inline-block rounded-lg border border-neutral-200 px-5 py-3 font-medium hover:border-primary-400 hover:text-primary-700 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </>
);

export default NotFound;
