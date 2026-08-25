import { ReactNode } from 'react';
import { Info } from 'lucide-react';
import { slugifyHeading } from '../../utils/blogPosts';

interface GuideSectionProps {
  title: string;
  children: ReactNode;
}

/**
 * An H2 section with an anchor id, so guide pages get a real document outline
 * and can be deep-linked from other pages the way the blog posts now can.
 */
export const GuideSection = ({ title, children }: GuideSectionProps) => (
  <section className="mb-12 scroll-mt-24" id={slugifyHeading(title)}>
    <h2 className="mb-4 font-bold tracking-tight text-2xl md:text-3xl">{title}</h2>
    <div className="space-y-4 text-lg leading-relaxed text-neutral-700">{children}</div>
  </section>
);

interface GuideTableProps {
  caption?: string;
  headers: string[];
  rows: ReactNode[][];
}

/**
 * A comparison table. Competitors rank for "kuno safari price" and "safari
 * timings" partly on the strength of having the numbers in an actual table, so
 * these are real <table> elements, not styled divs. Scrolls inside itself so a
 * wide table never makes the page scroll sideways on mobile.
 */
export const GuideTable = ({ caption, headers, rows }: GuideTableProps) => (
  <div className="my-6 overflow-x-auto rounded-xl border border-neutral-200">
    <table className="w-full min-w-[34rem] border-collapse text-left text-base">
      {caption && (
        <caption className="px-4 pt-4 text-left text-sm text-neutral-500">{caption}</caption>
      )}
      <thead>
        <tr className="bg-neutral-50">
          {headers.map((header) => (
            <th key={header} scope="col" className="px-4 py-3 font-semibold text-neutral-900">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-t border-neutral-200 align-top">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-3 text-neutral-700">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/**
 * Highlighted note for the things people get wrong — the details that make
 * these pages worth reading rather than another aggregated summary.
 */
export const GuideCallout = ({ children }: { children: ReactNode }) => (
  <aside className="my-6 flex gap-3 rounded-xl border border-primary-200 bg-primary-50 p-5 text-base leading-relaxed text-neutral-800">
    <Info className="mt-0.5 shrink-0 text-primary-600" size={20} />
    <div className="space-y-2">{children}</div>
  </aside>
);

/** Checklist / feature list with consistent spacing. */
export const GuideList = ({ items }: { items: ReactNode[] }) => (
  <ul className="my-4 space-y-2">
    {items.map((item, i) => (
      <li key={i} className="flex gap-2.5 text-lg leading-relaxed text-neutral-700">
        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);
