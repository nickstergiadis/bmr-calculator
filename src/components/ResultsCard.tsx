import { useMemo, useState } from 'react';
import type { CalculatorInput } from '../types';
import { calculateResult, validateInput } from '../utils/calculator';

export function ResultsCard({ values }: { values: CalculatorInput }) {
  const [copied, setCopied] = useState(false);
  const errors = validateInput(values);
  const isAdult = values.age >= 19;

  const result = useMemo(() => {
    if (!isAdult || errors.length > 0) return null;
    return calculateResult(values);
  }, [errors.length, isAdult, values]);

  const copyResults = async () => {
    if (!result) return;

    const text = [
      `Estimated resting calories: ${result.restingCalories} kcal/day`,
      `Estimated maintenance calories: ${result.maintenanceCalories} kcal/day`,
      `Suggested target range: ${result.targetRange.min}-${result.targetRange.max} kcal/day`,
      `Goal note: ${result.goalSummary}`
    ].join('\n');

    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Your estimate</h3>
          <p className="mt-2 text-sm text-slate-600">
            These numbers are estimates of resting and daily energy needs, not exact requirements.
          </p>
        </div>
        <button
          type="button"
          disabled={!result}
          onClick={copyResults}
          className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-clinical-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {copied ? 'Copied' : 'Copy results'}
        </button>
      </div>

      {!isAdult ? (
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
          <p className="text-sm font-medium">This tool is intended for adults.</p>
        </div>
      ) : null}

      {isAdult && errors.length > 0 ? (
        <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900">
          <p className="text-sm">Please correct the highlighted input values to view a result.</p>
        </div>
      ) : null}

      {result ? (
        <>
          <dl className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-clinical-200 bg-clinical-50 p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-clinical-700">Estimated resting calories</dt>
              <dd className="mt-1 text-2xl font-semibold text-clinical-900">{result.restingCalories} kcal/day</dd>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-100 p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-600">Estimated maintenance calories</dt>
              <dd className="mt-1 text-2xl font-semibold text-slate-900">{result.maintenanceCalories} kcal/day</dd>
            </div>
            <div className="rounded-xl bg-slate-100 p-4 sm:col-span-2">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-600">Suggested target range</dt>
              <dd className="mt-1 text-2xl font-semibold text-slate-900">
                {result.targetRange.min}-{result.targetRange.max} kcal/day
              </dd>
              <p className="mt-2 text-sm text-slate-600">{result.goalSummary}</p>
            </div>
          </dl>

          <p className="mt-4 text-sm text-slate-600">
            Explanatory note: this estimate gives a useful starting point, then adjust based on real-world response over time.
          </p>

          <section className="mt-6 rounded-xl border border-slate-200 p-4">
            <h4 className="text-sm font-semibold text-slate-900">How to use this number</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>• If maintaining: start near maintenance and monitor trends for 2–4 weeks.</li>
              <li>• If reducing: use a modest deficit, not an aggressive crash diet.</li>
              <li>• If building: use a modest surplus and pair it with progressive exercise.</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              Weight trends, symptoms, hunger, performance, and recovery matter more than treating any calculator as exact.
            </p>
          </section>
        </>
      ) : null}
    </article>
  );
}
