import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SITE_URL } from '../../config/site';

export interface Crumb {
  name: string;
  /** Absolute URL — the same value passed to generateBreadcrumbSchema. */
  url: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
  className?: string;
}

/**
 * Visible breadcrumb trail. Pair it with generateBreadcrumbSchema on the same
 * page: Google wants the markup to match something a visitor can actually see,
 * and the trail gives deep pages (/package/*, /blog/*) a crawlable path back to
 * their hub, which the site previously had no signal for at all.
 */
const Breadcrumbs = ({ items, className = '' }: BreadcrumbsProps) => {
  if (items.length < 2) return null;

  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1 text-sm text-neutral-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const path = item.url.replace(SITE_URL, '') || '/';

          return (
            <li key={item.url} className="flex items-center gap-1 min-w-0">
              {index > 0 && <ChevronRight size={14} className="shrink-0 text-neutral-400" />}
              {isLast ? (
                <span aria-current="page" className="truncate max-w-[16rem] text-neutral-700 font-medium">
                  {item.name}
                </span>
              ) : (
                <Link to={path} className="hover:text-primary-700 transition-colors">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
