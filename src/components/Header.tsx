const navItems = [
  ['hero', 'Home'],
  ['calculator', 'Calculator'],
  ['rehab', 'Rehab context'],
  ['templates', 'Templates'],
  ['weekly-plans', 'Exercise structure'],
  ['physio-role', 'Physio role'],
  ['faq', 'FAQ'],
  ['disclaimer', 'Disclaimer']
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clinical-700">BMR Calculator</p>
        <nav className="hidden gap-4 md:flex">
          {navItems.map(([id, label]) => (
            <a key={id} href={`#${id}`} className="text-sm text-slate-600 transition hover:text-clinical-700">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
