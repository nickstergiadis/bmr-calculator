import { useId, useState, type ReactNode } from 'react';

type DisclosureProps = {
  title: string;
  defaultOpen?: boolean;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200 ease-out ${
        isOpen ? 'rotate-180 text-slate-700' : ''
      }`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

export function Disclosure({ title, defaultOpen = false, children, className = '', contentClassName = '' }: DisclosureProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const id = useId();
  const triggerId = `${id}-trigger`;
  const contentId = `${id}-content`;

  return (
    <section
      className={`rounded-xl border transition-colors duration-200 ${
        isOpen ? 'border-slate-300 bg-slate-50/80' : 'border-slate-200 bg-white'
      } ${className}`}
    >
      <h4>
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={contentId}
          onClick={() => setIsOpen((open) => !open)}
          className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-xl px-4 py-3 text-left transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-1"
        >
          <span className="text-sm font-semibold text-slate-900">{title}</span>
          <span className="flex items-center gap-2">
            <span className="text-[11px] font-medium uppercase tracking-wide text-slate-500">{isOpen ? 'Expanded' : 'Collapsed'}</span>
            <ChevronIcon isOpen={isOpen} />
          </span>
        </button>
      </h4>

      <div
        hidden={!isOpen}
        aria-hidden={!isOpen}
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-200 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-70'
        }`}
      >
        <div id={contentId} role="region" aria-labelledby={triggerId} className="overflow-hidden">
          <div className={`border-t border-slate-200 px-4 pb-4 pt-3 ${contentClassName}`}>{children}</div>
        </div>
      </div>
    </section>
  );
}
