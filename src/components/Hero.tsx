export function Hero() {
  return (
    <section id="hero" className="border-b border-slate-200 bg-gradient-to-b from-clinical-50 to-slate-50 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-clinical-700">Educational tool</p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Understand your baseline energy needs for recovery-focused planning.
          </h1>
          <p className="max-w-xl text-base leading-7 text-slate-600">
            This BMR calculator gives a starting estimate for calories and protein so adults can better discuss
            nutrition and exercise structure with their physiotherapist or healthcare team.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-slate-900">Who this is for</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <li>• Adults aiming for gradual body composition change without extreme dieting.</li>
            <li>• Deconditioned patients reintroducing movement after inactivity or pain setbacks.</li>
            <li>• Rehab patients wanting clearer context for calories, protein, and weekly exercise structure.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
