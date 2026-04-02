const navItems = [
  ['calculator', 'Calculator'],
  ['results', 'Results'],
  ['rehab', 'Physio education'],
  ['templates', 'Calorie templates'],
  ['weekly-plans', 'Weekly structures'],
  ['faq', 'FAQ'],
  ['cta', 'CTA'],
  ['disclaimer', 'Disclaimer']
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.14em] text-clinical-700">
            BMR Calculator
          </a>
          <a
            href="#calculator"
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-clinical-400 hover:text-clinical-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-2"
          >
            Start calculation
          </a>
        </div>

        <nav className="mt-3 -mx-1 flex gap-2 overflow-x-auto pb-1" aria-label="Page sections">
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-clinical-300 hover:text-clinical-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-2"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
