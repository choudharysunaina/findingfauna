/**
 * The planning guides — one page per high-intent search, each owning a single
 * question a traveller types into Google before they book.
 *
 * Registered in one place so that: every guide links to the others (giving the
 * cluster real internal links rather than nav-only entry points), the "Planning
 * your Kuno safari" block on the homepage stays in sync, and adding a guide is
 * a single edit here plus a route in App.tsx and an entry in
 * scripts/generate-sitemap.mjs.
 */
export interface Guide {
  path: string;
  /** Short label for nav, breadcrumbs and cross-link cards. */
  label: string;
  /** One line explaining what the page answers, used on cross-link cards. */
  blurb: string;
}

export const guides: Guide[] = [
  {
    path: '/kuno-safari-booking',
    label: 'Safari booking & permits',
    blurb:
      'How the permit system actually works, why the Gypsy is arranged separately, and what documents you need.',
  },
  {
    path: '/kuno-safari-price',
    label: 'Safari price & cost',
    blurb:
      'Forest Department charges, our package pricing, and what a four-day trip really costs end to end.',
  },
  {
    path: '/kuno-safari-zones',
    label: 'Safari zones & gates',
    blurb:
      'Ahera, Tiktoli and Peepalbawri compared on sightings, roads, vehicles and where to stay.',
  },
  {
    path: '/best-time-to-visit-kuno',
    label: 'Best time to visit',
    blurb: 'Month-by-month weather, sighting odds, safari timings and when the park closes.',
  },
  {
    path: '/how-to-reach-kuno',
    label: 'How to reach Kuno',
    blurb: 'Distances and drive times from Gwalior, Shivpuri, Delhi, Jaipur, Agra and Bhopal.',
  },
  {
    path: '/where-to-stay-near-kuno',
    label: 'Where to stay',
    blurb: 'Homestay versus lodge, distance to each gate, and what to look for in a Kuno stay.',
  },
];

export const getGuide = (path: string) => guides.find((g) => g.path === path);

/** The other guides, for the cross-link block at the foot of each guide page. */
export const otherGuides = (path: string) => guides.filter((g) => g.path !== path);
