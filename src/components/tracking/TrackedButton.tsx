import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  MouseEvent,
} from 'react';
import { trackEvent } from '../../utils/analytics';

interface TrackingProps {
  /** GA4 category — the area (e.g. 'footer', 'home_experiences'). */
  category: string;
  /** GA4 label — the specific control (e.g. 'watch_youtube', 'footer_instagram'). */
  label?: string;
}

type ButtonProps = TrackingProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type AnchorProps = TrackingProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type TrackedButtonProps = ButtonProps | AnchorProps;

/**
 * Fires a GA4 click event, then runs the original onClick / follows the href.
 * Renders an <a> when `href` is given (external links, tel:, mailto:,
 * window.open triggers) and a <button> otherwise.
 */
const TrackedButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  TrackedButtonProps
>(({ category, label, onClick, ...rest }, ref) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement & HTMLAnchorElement>) => {
    trackEvent({ category, action: 'click', label });
    (onClick as ((e: MouseEvent<HTMLElement>) => void) | undefined)?.(e);
  };

  if ('href' in rest && rest.href !== undefined) {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        onClick={handleClick}
      />
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      onClick={handleClick}
    />
  );
});

TrackedButton.displayName = 'TrackedButton';

export default TrackedButton;
