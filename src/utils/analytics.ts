import ReactGA from 'react-ga4';

// GA4 Measurement ID. Replace with the real "G-XXXXXXXXXX" from your GA4
// Web data stream (Admin -> Data Streams). Left as a placeholder so tracking
// stays a no-op until a valid ID is provided.
const GA_MEASUREMENT_ID = 'G-Z36LMTW88J';

const isConfigured = /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID);

let initialized = false;

/** Initialise GA4 once, at app startup. Safe to call multiple times. */
export function initGA() {
  if (initialized || !isConfigured) return;
  ReactGA.initialize(GA_MEASUREMENT_ID);
  initialized = true;
}

/** Send a page_view. Called on every route change. */
export function trackPageView(path: string) {
  if (!initialized) return;
  ReactGA.send({ hitType: 'pageview', page: path });
}

export type TrackEventParams = {
  /** GA4 event_category — the section / area (e.g. 'home_hero', 'nav'). */
  category: string;
  /** GA4 event_action — the interaction type ('impression' | 'click' | 'submit'). */
  action: string;
  /** GA4 event_label — the specific element or destination (e.g. 'book_now'). */
  label?: string;
};

/** The single event funnel every tracked interaction flows through. */
export function trackEvent({ category, action, label }: TrackEventParams) {
  if (!initialized) return;
  ReactGA.event({ category, action, label });
}
