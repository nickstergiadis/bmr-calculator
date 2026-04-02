import { useState } from 'react';
import { calorieTemplates } from '../data/calorieTemplates';
import { macroTemplateContent } from '../data/content';
import type { CalorieTemplate } from '../types/content';

function buildTemplateCopy(template: CalorieTemplate): string {
  const mealStructure = template.mealStructure.map((meal) => `- ${meal}`).join('\n');
  const macroSplit = `${template.macroSplit.carbsPercent}% carbohydrate / ${template.macroSplit.proteinPercent}% protein / ${template.macroSplit.fatPercent}% fat`;

  const mealEntries: Array<[string, string | undefined]> = [
    ['Breakfast', template.meals.breakfast],
    ['Lunch', template.meals.lunch],
    ['Dinner', template.meals.dinner],
    ['Snack 1', template.meals.snack1],
    ['Optional snack 2', template.meals.snack2],
    ['Optional snack 3', template.meals.snack3]
  ];

  const exampleDay = mealEntries
    .filter(([, text]) => Boolean(text))
    .map(([label, text]) => `- ${label}: ${text}`)
    .join('\n');

  return [
    template.title,
    template.shortLabel,
    '',
    `Macro split: ${macroSplit}`,
    'Approximate macros:',
    `- Protein: ${template.macros.proteinGrams} g`,
    `- Carbohydrate: ${template.macros.carbsGrams} g`,
    `- Fat: ${template.macros.fatGrams} g`,
    '',
    'Meal structure:',
    mealStructure,
    '',
    'Example day:',
    exampleDay,
    '',
    `Practical note: ${template.practicalNote}`,
    '',
    `Footer note: ${template.footerNote}`,
    '',
    'Educational note: This is an educational example, not a personalized meal plan.'
  ].join('\n');
}

export function MealCards() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyTemplate = async (template: CalorieTemplate) => {
    await navigator.clipboard.writeText(buildTemplateCopy(template));
    setCopiedId(template.id);
    window.setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-5">
      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h3 className="text-base font-semibold text-slate-900">{macroTemplateContent.heading}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-700">{macroTemplateContent.introBodyExtended}</p>
        <p className="mt-2 text-sm font-medium text-slate-800">{macroTemplateContent.smallNote}</p>
      </article>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h3 className="text-xl font-semibold tracking-tight text-slate-900">
          {macroTemplateContent.featuredExplainerHeading}
        </h3>
        <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700">
          {macroTemplateContent.featuredExplainerBody.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {calorieTemplates.map((template) => (
          <article
            key={template.id}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition hover:border-slate-300"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-base font-semibold text-slate-900">{template.title}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-600">
                  {template.shortLabel}
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  void copyTemplate(template);
                }}
                className="w-full shrink-0 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-2 sm:w-auto"
              >
                {copiedId === template.id ? 'Copied' : 'Copy template'}
              </button>
            </div>

            <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-sm font-medium text-slate-800">
              Macro split: {template.macroSplit.carbsPercent}% carbohydrate /{' '}
              {template.macroSplit.proteinPercent}% protein / {template.macroSplit.fatPercent}% fat
            </p>

            <dl className="mt-3 space-y-1 text-sm text-slate-700">
              <div className="flex justify-between gap-3">
                <dt>Calories</dt>
                <dd>{template.calories} kcal</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>Protein</dt>
                <dd>{template.macros.proteinGrams} g</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>Carbohydrate</dt>
                <dd>{template.macros.carbsGrams} g</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>Fat</dt>
                <dd>{template.macros.fatGrams} g</dd>
              </div>
            </dl>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-900">Meal structure</h4>
              <ul className="mt-2 space-y-1 text-sm text-slate-700">
                {template.mealStructure.map((meal) => (
                  <li key={`${template.id}-${meal}`}>• {meal}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-900">Example day</h4>
              <ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-700">
                <li>
                  <span className="font-medium text-slate-800">Breakfast:</span> {template.meals.breakfast}
                </li>
                <li>
                  <span className="font-medium text-slate-800">Lunch:</span> {template.meals.lunch}
                </li>
                <li>
                  <span className="font-medium text-slate-800">Dinner:</span> {template.meals.dinner}
                </li>
                <li>
                  <span className="font-medium text-slate-800">Snack 1:</span> {template.meals.snack1}
                </li>
                {template.meals.snack2 ? (
                  <li>
                    <span className="font-medium text-slate-800">Optional snack 2:</span>{' '}
                    {template.meals.snack2}
                  </li>
                ) : null}
                {template.meals.snack3 ? (
                  <li>
                    <span className="font-medium text-slate-800">Optional snack 3:</span>{' '}
                    {template.meals.snack3}
                  </li>
                ) : null}
              </ul>
            </div>

            <p className="mt-4 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm leading-6 text-slate-700">
              {template.practicalNote}
            </p>
            <p className="mt-3 border-t border-slate-200 pt-3 text-xs leading-5 text-slate-600">
              {template.footerNote}
            </p>
          </article>
        ))}
      </div>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h3 className="text-base font-semibold text-slate-900">
          {macroTemplateContent.comparisonBlock.heading}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-700">{macroTemplateContent.comparisonBlock.body}</p>
      </article>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h3 className="text-base font-semibold text-slate-900">
          {macroTemplateContent.practicalTakeaways.heading}
        </h3>
        <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-700">
          {macroTemplateContent.practicalTakeaways.items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}
