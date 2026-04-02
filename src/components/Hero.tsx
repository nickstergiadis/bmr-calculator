export function Hero() {
  return (
    <section id="hero" className="border-b border-slate-200 bg-gradient-to-b from-clinical-50 to-slate-50 py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-clinical-700">Adult education tool</p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Estimate your calorie needs and connect them to practical rehab planning
            </h1>
            <p className="max-w-3xl text-base leading-7 text-slate-700">
              This tool gives adults a practical starting point for estimated resting and maintenance calories, plus
              simple examples for meals, macros, and weekly exercise structure.
            </p>
            <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
              <li>• Keep calculator estimates grounded in real-life trends</li>
              <li>• Pair calorie planning with a realistic exercise structure</li>
              <li>• Use physio support when pain limits consistency</li>
              <li>• Educational only, not individualized medical advice</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href="#calculator"
                className="rounded-xl bg-clinical-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-clinical-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-2"
              >
                Calculate now
              </a>
              <a
                href="#templates"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-clinical-700 hover:text-clinical-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-2"
              >
                Explore templates
              </a>
            </div>
          </div>
          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-slate-900">How to use this page</h2>
            <ol className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              <li>
                <span className="font-semibold text-slate-800">1.</span> Enter your details in the calculator.
              </li>
              <li>
                <span className="font-semibold text-slate-800">2.</span> Review the results as a starting range.
              </li>
              <li>
                <span className="font-semibold text-slate-800">3.</span> Use the education and plans to turn numbers
                into action.
              </li>
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}
