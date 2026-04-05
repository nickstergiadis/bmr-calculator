import { useMemo, useState } from 'react';
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
  const [activeId, setActiveId] = useState(calorieTemplates[0]?.id ?? '');

  const activeTemplate = useMemo(
    () => calorieTemplates.find((template) => template.id === activeId) ?? calorieTemplates[0],
    [activeId]
  );

  const copyTemplate = async (template: CalorieTemplate) => {
    await navigator.clipboard.writeText(buildTemplateCopy(template));
    setCopiedId(template.id);
    window.setTimeout(() => setCopiedId(null), 2000);
  };

  if (!activeTemplate) return null;

  return (
    <div className="space-y-5">
      <div className="max-w-3xl space-y-3 text-sm leading-6 text-slate-700">
        <p>{macroTemplateContent.featuredExplainerBody[0]}</p>
        <p>{macroTemplateContent.comparisonBlock.body}</p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft sm:p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Select a template</p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
          {calorieTemplates.map((template) => (
            <button
              key={template.id}
              type="button"
              onClick={() => setActiveId(template.id)}
              className={`rounded-xl border px-3 py-2 text-left text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-1 ${
                template.id === activeTemplate.id
                  ? 'border-clinical-400 bg-clinical-50 text-clinical-900'
                  : 'border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <p className="font-semibold">{template.title}</p>
              <p className="mt-0.5 text-xs text-slate-500">{template.shortLabel}</p>
            </button>
          ))}
        </div>
      </div>

      <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{activeTemplate.title}</h3>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">{activeTemplate.shortLabel}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              void copyTemplate(activeTemplate);
            }}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-2"
          >
            {copiedId === activeTemplate.id ? 'Copied' : 'Copy template'}
          </button>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-clinical-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-clinical-700">Macro split</p>
            <p className="mt-1 text-sm text-slate-800">
              {activeTemplate.macroSplit.carbsPercent}% carbohydrate / {activeTemplate.macroSplit.proteinPercent}%
              protein / {activeTemplate.macroSplit.fatPercent}% fat
            </p>
          </div>
          <dl className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700">
            <div className="flex justify-between gap-3">
              <dt>Calories</dt>
              <dd>{activeTemplate.calories} kcal</dd>
            </div>
            <div className="mt-1 flex justify-between gap-3">
              <dt>Protein</dt>
              <dd>{activeTemplate.macros.proteinGrams} g</dd>
            </div>
            <div className="mt-1 flex justify-between gap-3">
              <dt>Carbohydrate</dt>
              <dd>{activeTemplate.macros.carbsGrams} g</dd>
            </div>
            <div className="mt-1 flex justify-between gap-3">
              <dt>Fat</dt>
              <dd>{activeTemplate.macros.fatGrams} g</dd>
            </div>
          </dl>
        </div>

        <div className="mt-4 space-y-3">
          <details open className="rounded-xl border border-slate-200 p-4">
            <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">Meal structure</summary>
            <ul className="mt-3 space-y-1 text-sm text-slate-700">
              {activeTemplate.mealStructure.map((meal) => (
                <li key={`${activeTemplate.id}-${meal}`}>• {meal}</li>
              ))}
            </ul>
          </details>

          <details className="rounded-xl border border-slate-200 p-4">
            <summary className="cursor-pointer list-none text-sm font-semibold text-slate-900">Example day</summary>
            <ul className="mt-3 space-y-1.5 text-sm leading-6 text-slate-700">
              <li>
                <span className="font-medium text-slate-800">Breakfast:</span> {activeTemplate.meals.breakfast}
              </li>
              <li>
                <span className="font-medium text-slate-800">Lunch:</span> {activeTemplate.meals.lunch}
              </li>
              <li>
                <span className="font-medium text-slate-800">Dinner:</span> {activeTemplate.meals.dinner}
              </li>
              <li>
                <span className="font-medium text-slate-800">Snack 1:</span> {activeTemplate.meals.snack1}
              </li>
              {activeTemplate.meals.snack2 ? (
                <li>
                  <span className="font-medium text-slate-800">Optional snack 2:</span> {activeTemplate.meals.snack2}
                </li>
              ) : null}
              {activeTemplate.meals.snack3 ? (
                <li>
                  <span className="font-medium text-slate-800">Optional snack 3:</span> {activeTemplate.meals.snack3}
                </li>
              ) : null}
            </ul>
          </details>
        </div>

        <p className="mt-4 rounded-xl bg-slate-50 p-3 text-sm text-slate-700">{activeTemplate.practicalNote}</p>
        <p className="mt-3 text-xs leading-5 text-slate-500">{activeTemplate.footerNote}</p>
      </article>

      <article className="rounded-2xl bg-slate-100/70 p-5">
        <h3 className="text-base font-semibold text-slate-900">{macroTemplateContent.practicalTakeaways.heading}</h3>
        <ul className="mt-2 space-y-2 text-sm leading-6 text-slate-700">
          {macroTemplateContent.practicalTakeaways.items.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </article>
    </div>
  );
}
