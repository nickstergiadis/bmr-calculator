import { weeklyPlans } from '../data/content';

export function WeeklyPlanCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {weeklyPlans.map((plan) => (
        <article key={plan.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <h3 className="text-base font-semibold text-slate-900">{plan.title}</h3>
          <p className="mt-2 text-sm text-slate-600">{plan.focus}</p>
          <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
            {plan.sessions.map((session) => (
              <li key={session}>• {session}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
