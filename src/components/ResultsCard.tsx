import type { ActivityLevel, CalculatorInput } from '../types';

const factors: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725
};

function calculateBmr({ sex, age, heightCm, weightKg }: CalculatorInput) {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return sex === 'male' ? base + 5 : base - 161;
}

export function ResultsCard({ values }: { values: CalculatorInput }) {
  const bmr = Math.max(Math.round(calculateBmr(values)), 0);
  const maintenance = Math.round(bmr * factors[values.activity]);
  const gentleDeficit = Math.round(maintenance - 250);
  const proteinLower = Math.round(values.weightKg * 1.4);
  const proteinUpper = Math.round(values.weightKg * 1.8);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-slate-900">Estimated outputs</h3>
      <p className="mt-2 text-sm text-slate-600">
        These are non-diagnostic estimates for planning conversations with a clinician.
      </p>

      <dl className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl bg-clinical-50 p-4">
          <dt className="text-xs font-semibold uppercase tracking-wide text-clinical-700">BMR estimate</dt>
          <dd className="mt-1 text-2xl font-semibold text-clinical-900">{bmr} kcal/day</dd>
        </div>
        <div className="rounded-xl bg-slate-100 p-4">
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-600">Maintenance range</dt>
          <dd className="mt-1 text-2xl font-semibold text-slate-900">{maintenance} kcal/day</dd>
        </div>
        <div className="rounded-xl bg-slate-100 p-4">
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-600">Gentle deficit example</dt>
          <dd className="mt-1 text-2xl font-semibold text-slate-900">{gentleDeficit} kcal/day</dd>
        </div>
        <div className="rounded-xl bg-slate-100 p-4">
          <dt className="text-xs font-semibold uppercase tracking-wide text-slate-600">Protein guide</dt>
          <dd className="mt-1 text-2xl font-semibold text-slate-900">
            {proteinLower}-{proteinUpper} g/day
          </dd>
        </div>
      </dl>
    </article>
  );
}
