export function Footer() {
  return (
    <footer id="disclaimer" className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-slate-100/80 p-6">
          <h2 className="text-base font-semibold text-slate-900">Safety and scope</h2>
          <div className="mt-3 grid gap-3 text-sm leading-6 text-slate-600 md:grid-cols-2">
            <p>
              This calculator is for educational purposes only. It provides a general estimate for adults and does not
              replace individualized medical, nutrition, or physiotherapy advice.
            </p>
            <p>
              It is not intended to diagnose conditions or prescribe treatment. If you are pregnant, have an eating
              disorder history, or have complex medical or nutrition needs, seek qualified professional guidance.
            </p>
            <p className="md:col-span-2">
              If pain, injury, or low exercise tolerance is your main barrier, physiotherapy can help with exercise
              selection and progression. For individualized nutrition plans, a registered dietitian is the most
              appropriate provider.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-4 text-xs text-slate-500">
            <p>Adults only. Estimates only. Use trends and tolerance to guide decisions.</p>
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
