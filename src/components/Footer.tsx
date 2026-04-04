export function Footer() {
  return (
    <footer id="disclaimer" className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-soft">
          <h2 className="text-lg font-semibold text-slate-900">Important note</h2>
          <div className="mt-4 grid gap-4 text-sm leading-6 text-slate-700 md:grid-cols-2">
            <p>
              This calculator is for educational purposes only. It provides a general estimate for adults and does not
              replace individualized medical, nutrition, or physiotherapy advice.
            </p>
            <p>
              It is not intended to diagnose health conditions, prescribe treatment, or provide personalized meal
              planning. If you are pregnant, have a history of an eating disorder, have a major medical condition, or
              have complex weight or nutrition concerns, seek guidance from an appropriate qualified professional.
            </p>
            <p className="md:col-span-2">
              If pain, injury, or reduced exercise tolerance is the main issue, a physiotherapist may help with
              activity modification, exercise selection, and progression. If individualized nutrition advice is needed,
              a registered dietitian is the more appropriate provider.
            </p>
          </div>
          <p className="mt-4 rounded-xl border border-slate-200 bg-white p-3 text-sm font-medium text-slate-800">
            Adults only. Estimates only. Real-life progress should be guided by trends, symptoms, tolerance, and
            professional advice when needed.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-4 text-xs text-slate-500">
            <p>Educational content only.</p>
            <a
              href="#top"
              className="font-medium text-slate-600 underline decoration-slate-300 underline-offset-2 transition hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-1"
            >
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
