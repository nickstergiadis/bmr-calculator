import { weeklyPlans } from '../data/content';

export function WeeklyPlanCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {weeklyPlans.map((plan) => (
        <article key={plan.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <h3 className="text-base font-semibold text-slate-900">{plan.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{plan.intro}</p>

          <h4 className="mt-4 text-sm font-semibold text-slate-900">Focus points</h4>
          <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
            {plan.focusPoints.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>

          <h4 className="mt-4 text-sm font-semibold text-slate-900">Example week</h4>
          <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
            {plan.exampleWeek.map((session) => (
              <li key={session}>• {session}</li>
            ))}
          </ul>

          <h4 className="mt-4 text-sm font-semibold text-slate-900">Where physio fits</h4>
          <p className="mt-2 text-sm leading-6 text-slate-700">{plan.wherePhysioFits}</p>
        </article>
      ))}
    </div>
  );
}
