import { macroTemplates } from '../data/content';

export function MealCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {macroTemplates.map((template) => (
        <article key={template.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <h3 className="text-base font-semibold text-slate-900">{template.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{template.context}</p>
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
  );
}
