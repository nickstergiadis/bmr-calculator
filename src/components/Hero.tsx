export function Hero() {
  return (
    <section id="hero" className="border-b border-slate-200 bg-gradient-to-b from-clinical-50 to-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-5">
            <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Estimate your calorie needs and see how diet, exercise, and physio fit together
            </h1>
            <p className="max-w-3xl text-base leading-7 text-slate-600">
              This tool gives adults a practical starting point for estimated resting and maintenance calories, with
              simple examples of meals, macros, and weekly exercise structure. It is designed to help connect the
              numbers to real life, especially if you are trying to lose weight, build strength, or return to exercise
              after pain or injury.
            </p>
            <p className="text-sm font-medium text-slate-700">
              Educational tool only. Not individualized medical or nutrition advice.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#calculator"
                className="rounded-xl bg-clinical-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-clinical-800"
              >
                Calculate now
              </a>
              <a
                href="#templates"
                className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-clinical-700 hover:text-clinical-700"
              >
                See example plans
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-lg font-semibold text-slate-900">Adults only</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Use this estimate as a practical guide, then adjust based on trends, tolerance, and qualified professional
              advice when needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
