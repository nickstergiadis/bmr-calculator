import type { PropsWithChildren } from 'react';

interface SectionProps extends PropsWithChildren {
  id: string;
  title: string;
  subtitle?: string;
}

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
          {subtitle ? <p className="mt-3 text-base leading-7 text-slate-600">{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}
