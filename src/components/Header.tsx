const navItems = [
  ['calculator', 'Calculator'],
  ['results-guide', 'Results guide'],
  ['physio-guidance', 'Physio guidance'],
  ['faq', 'FAQ']
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#hero" className="text-sm font-semibold tracking-wide text-clinical-700">
          BMR Calculator
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Page sections">
          {navItems.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-full px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-2"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#calculator"
          className="rounded-lg bg-clinical-700 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-clinical-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-2"
        >
          Start
        </a>
      </div>

      <nav className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 pb-2 md:hidden sm:px-6 lg:px-8" aria-label="Mobile page sections">
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
    </header>
  );
}
