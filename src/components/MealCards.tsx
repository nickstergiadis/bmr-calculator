import { useState } from 'react';
import { macroTemplateContent } from '../data/content';
import type { MacroTemplate } from '../types';

function buildTemplateCopy(template: MacroTemplate) {
  const mealStructure = template.mealStructure.map((meal) => `- ${meal}`).join('\n');
  const exampleDay = template.exampleDay.map((entry) => `- ${entry.label}: ${entry.text}`).join('\n');

  return [
    `${template.title}`,
    `${template.shortLabel}`,
    '',
    `Macro split: ${template.macroSplit}`,
    'Approximate macros:',
    `- Protein: ${template.proteinG} g`,
    `- Carbohydrate: ${template.carbsG} g`,
    `- Fat: ${template.fatsG} g`,
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
  const [copiedTitle, setCopiedTitle] = useState<string | null>(null);

  const copyTemplate = async (template: MacroTemplate) => {
    await navigator.clipboard.writeText(buildTemplateCopy(template));
    setCopiedTitle(template.title);
    window.setTimeout(() => setCopiedTitle(null), 2000);
  };

  return (
    <div className="space-y-6">
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

      <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {macroTemplateContent.templates.map((template) => (
          <article key={template.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-900">{template.title}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-600">{template.shortLabel}</p>
              </div>
              <button
                type="button"
                onClick={() => copyTemplate(template)}
                className="shrink-0 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100"
              >
                {copiedTitle === template.title ? 'Copied' : 'Copy template'}
              </button>
            </div>

            <p className="mt-3 text-sm font-medium text-slate-800">Macro split: {template.macroSplit}</p>

            <dl className="mt-3 space-y-1 text-sm text-slate-700">
              <div className="flex justify-between gap-3">
                <dt>Calories</dt>
                <dd>{template.calories} kcal</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>Protein</dt>
                <dd>{template.proteinG} g</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>Carbohydrate</dt>
                <dd>{template.carbsG} g</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>Fat</dt>
                <dd>{template.fatsG} g</dd>
              </div>
            </dl>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-900">Meal structure</h4>
              <ul className="mt-1 space-y-1 text-sm text-slate-700">
                {template.mealStructure.map((meal) => (
                  <li key={meal}>• {meal}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-semibold text-slate-900">Example day</h4>
              <ul className="mt-1 space-y-1.5 text-sm leading-6 text-slate-700">
                {template.exampleDay.map((entry) => (
                  <li key={`${template.title}-${entry.label}`}>
                    <span className="font-medium text-slate-800">{entry.label}:</span> {entry.text}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-700">{template.practicalNote}</p>
            <p className="mt-3 border-t border-slate-200 pt-3 text-xs leading-5 text-slate-600">{template.footerNote}</p>
          </article>
        ))}
      </div>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
        <h3 className="text-base font-semibold text-slate-900">{macroTemplateContent.comparisonBlock.heading}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-700">{macroTemplateContent.comparisonBlock.body}</p>
      </article>

      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
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
