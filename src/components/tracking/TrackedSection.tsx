import { ComponentPropsWithoutRef, ElementType, ReactNode, useEffect, useRef } from 'react';
import { trackEvent } from '../../utils/analytics';

interface TrackedSectionOwnProps {
  /** GA4 category — the section / area (e.g. 'home_hero'). */
  category: string;
  /** GA4 label — identifies the section (e.g. 'hero'). */
  label?: string;
  /** Which element to render as the wrapper. Defaults to 'section'. */
  as?: ElementType;
  /** Fraction of the element that must be visible before firing (0–1). */
  threshold?: number;
  children: ReactNode;
}

// Own props plus any native attributes of the rendered element (id, style, etc.).
type TrackedSectionProps = TrackedSectionOwnProps &
  Omit<ComponentPropsWithoutRef<'section'>, keyof TrackedSectionOwnProps>;

/**
 * Wraps a page section and fires a single GA4 impression event the first time
 * it scrolls into view. Uses a native IntersectionObserver that disconnects
 * after the first hit, so each section reports at most one impression per visit.
 */
const TrackedSection = ({
  category,
  label,
  as: Tag = 'section',
  threshold = 0.3,
  children,
  ...rest
}: TrackedSectionProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const fired = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || fired.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          trackEvent({ category, action: 'impression', label });
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [category, label, threshold]);

  return (
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  );
};

export default TrackedSection;
