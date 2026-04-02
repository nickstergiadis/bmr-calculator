export function Footer() {
  return (
    <footer id="disclaimer" className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-lg font-semibold text-slate-900">Important note</h2>
        <div className="mt-3 max-w-4xl space-y-3 text-sm leading-6 text-slate-600">
          <p>
            This calculator is for educational purposes only. It provides a general estimate for adults and does not
            replace individualized medical, nutrition, or physiotherapy advice.
          </p>
          <p>
            It is not intended to diagnose health conditions, prescribe treatment, or provide personalized meal
            planning. If you are pregnant, have a history of an eating disorder, have a major medical condition, or
            have complex weight or nutrition concerns, seek guidance from an appropriate qualified professional.
          </p>
          <p>
            If pain, injury, or reduced exercise tolerance is the main issue, a physiotherapist may help with activity
            modification, exercise selection, and progression. If individualized nutrition advice is needed, a
            registered dietitian is the more appropriate provider.
          </p>
        </div>
        <p className="mt-4 text-sm font-medium text-slate-700">
          Adults only. Estimates only. Real-life progress should be guided by trends, symptoms, tolerance, and
          professional advice when needed.
        </p>
      </div>
    </footer>
  );
}
