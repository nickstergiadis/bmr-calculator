export function Hero() {
  return (
    <section id="hero" className="border-b border-slate-200 bg-gradient-to-b from-white to-clinical-50/40 py-12 md:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clinical-700">Adults 18+ • Educational tool</p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            BMR calculator with practical physio context
          </h1>
          <p className="text-base leading-7 text-slate-700 md:text-lg">
            Estimate resting and maintenance calories, then use concise rehab-focused guidance to plan movement,
            nutrition, and progression more confidently.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href="#calculator"
              className="rounded-xl bg-clinical-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-clinical-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-2"
            >
              Start calculator
            </a>
            <a
              href="#results-guide"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-clinical-700 hover:text-clinical-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-2"
            >
              How to use results
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
