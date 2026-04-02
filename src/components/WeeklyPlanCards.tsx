import { weeklyStructures } from '../data/weeklyStructures';

export function WeeklyPlanCards() {
  return (
    <div className="space-y-4">
      <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
        <h3 className="text-base font-semibold text-slate-900">How to read these structures</h3>
        <p className="mt-2 text-sm leading-6 text-slate-700">
          Each weekly structure shows a practical rhythm of activity, strength work, and recovery. The goal is to pick
          a structure that matches your current capacity and can be repeated consistently.
        </p>
      </article>

      <div className="grid gap-4 lg:grid-cols-3">
        {weeklyStructures.map((plan) => (
          <article key={plan.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="inline-flex rounded-full bg-clinical-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-clinical-700">
              {plan.shortLabel}
            </p>
            <h3 className="mt-3 text-base font-semibold leading-6 text-slate-900">{plan.title}</h3>
            {plan.bestFor ? <p className="mt-2 text-sm font-medium text-slate-700">{plan.bestFor}</p> : null}
            <p className="mt-3 text-sm leading-6 text-slate-600">{plan.intro}</p>

            <div className="mt-4 space-y-3">
              <section className="rounded-xl bg-slate-50 p-3">
                <h4 className="text-sm font-semibold text-slate-900">Main goals</h4>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                  {plan.goals.map((goal) => (
                    <li key={`${plan.id}-${goal}`}>• {goal}</li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-slate-200 p-3">
                <h4 className="text-sm font-semibold text-slate-900">Example week</h4>
                <ul className="mt-2 space-y-1 text-sm leading-6 text-slate-700">
                  {plan.exampleWeek.map((session) => (
                    <li key={`${plan.id}-${session.day}`}>
                      <span className="font-medium text-slate-800">{session.day}:</span> {session.activity}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-xl border border-clinical-200 bg-clinical-50 p-3">
                <h4 className="text-sm font-semibold text-slate-900">Practical note</h4>
                <p className="mt-2 text-sm leading-6 text-slate-700">{plan.practicalNote}</p>
              </section>

              <section className="rounded-xl border border-slate-200 p-3">
                <h4 className="text-sm font-semibold text-slate-900">Where physio fits</h4>
                <p className="mt-2 text-sm leading-6 text-slate-700">{plan.physioFit}</p>
              </section>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
