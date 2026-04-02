import { macroTemplates } from '../data/content';

export function MealCards() {
  return (
    <div className="space-y-6">
      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">What a 2,000 calorie day can look like</h3>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          A 2,000 calorie day does not need to look restrictive, overly clean, or complicated. In many cases, it can
          simply mean three balanced meals, one or two snacks, regular protein intake, and portions that broadly match
          your goal.
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          The point of these examples is not to tell you exactly what to eat. It is to make the number feel more
          concrete and easier to picture.
        </p>
      </article>

      <div className="grid gap-4 md:grid-cols-3">
        {macroTemplates.map((template) => (
          <article key={template.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <h3 className="text-base font-semibold text-slate-900">{template.title}</h3>
            <dl className="mt-4 space-y-1 text-sm text-slate-700">
              <div className="flex justify-between">
                <dt>Calories</dt>
                <dd>{template.calories} kcal</dd>
              </div>
              <div className="flex justify-between">
                <dt>Protein</dt>
                <dd>{template.proteinG} g</dd>
              </div>
              <div className="flex justify-between">
                <dt>Carbohydrate</dt>
                <dd>{template.carbsG} g</dd>
              </div>
              <div className="flex justify-between">
                <dt>Fat</dt>
                <dd>{template.fatsG} g</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <p className="text-sm leading-6 text-slate-600">
        This is an example structure only. Food choices, portions, and macro distribution can vary widely while still
        fitting the same daily calorie target.
      </p>
    </div>
  );
}
