import { forwardRef } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { trackEvent } from '../../utils/analytics';

interface TrackedLinkProps extends LinkProps {
  /** GA4 category — the area the link lives in (e.g. 'nav', 'home_hero'). */
  category: string;
  /** GA4 label — the specific link (e.g. 'book_now', 'nav_about'). */
  label?: string;
}

/**
 * Drop-in replacement for react-router's <Link> that fires a GA4 click event
 * before navigation proceeds. Accepts every <Link> prop plus category/label.
 */
const TrackedLink = forwardRef<HTMLAnchorElement, TrackedLinkProps>(
  ({ category, label, onClick, ...linkProps }, ref) => {
    return (
      <Link
        ref={ref}
        {...linkProps}
        onClick={(e) => {
          trackEvent({ category, action: 'click', label });
          onClick?.(e);
        }}
      />
    );
  }
);

TrackedLink.displayName = 'TrackedLink';

export default TrackedLink;
