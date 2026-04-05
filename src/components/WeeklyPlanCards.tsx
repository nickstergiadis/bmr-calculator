import { useMemo, useState } from 'react';
import { weeklyStructures } from '../data/weeklyStructures';

export function WeeklyPlanCards() {
  const [activeId, setActiveId] = useState(weeklyStructures[0]?.id ?? '');

  const activePlan = useMemo(
    () => weeklyStructures.find((plan) => plan.id === activeId) ?? weeklyStructures[0],
    [activeId]
  );

  if (!activePlan) return null;

  return (
    <div className="space-y-4">
      <div className="grid gap-2 sm:grid-cols-3">
        {weeklyStructures.map((plan) => (
          <button
            key={plan.id}
            type="button"
            onClick={() => setActiveId(plan.id)}
            className={`rounded-xl border px-4 py-3 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-1 ${
              activePlan.id === plan.id
                ? 'border-clinical-400 bg-clinical-50'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{plan.shortLabel}</p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{plan.title}</p>
          </button>
        ))}
      </div>

      <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <h3 className="text-lg font-semibold text-slate-900">{activePlan.title}</h3>
        {activePlan.bestFor ? <p className="mt-1 text-sm font-medium text-slate-700">{activePlan.bestFor}</p> : null}
        <p className="mt-3 text-sm leading-6 text-slate-600">{activePlan.intro}</p>

        <div className="mt-4 grid gap-3 lg:grid-cols-2">
          <section className="rounded-xl bg-slate-50 p-4">
            <h4 className="text-sm font-semibold text-slate-900">Main goals</h4>
            <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
              {activePlan.goals.map((goal) => (
                <li key={`${activePlan.id}-${goal}`}>• {goal}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl bg-clinical-50 p-4">
            <h4 className="text-sm font-semibold text-slate-900">Where physio fits</h4>
            <p className="mt-2 text-sm leading-6 text-slate-700">{activePlan.physioFit}</p>
          </section>
        </div>

        <details className="mt-4 rounded-xl border border-slate-200 p-4">
          <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">View example week</summary>
          <ul className="mt-3 space-y-1 text-sm leading-6 text-slate-700">
            {activePlan.exampleWeek.map((session) => (
              <li key={`${activePlan.id}-${session.day}`}>
                <span className="font-medium text-slate-800">{session.day}:</span> {session.activity}
              </li>
            ))}
          </ul>
        </details>

        <p className="mt-4 rounded-xl bg-slate-50 p-3 text-sm leading-6 text-slate-700">{activePlan.practicalNote}</p>
      </article>
    </div>
  );
}
