const sections = [
  {
    title: 'Why calorie intake matters in rehab',
    summary: 'A practical calorie target can support energy, consistency, and training tolerance while rebuilding function.',
    paragraphs: [
      'When intake is too low, people often notice lower energy, poorer training tolerance, and difficulty progressing exercise consistently. When intake is much higher than needed, weight-management goals can become harder and day-to-day habits may drift away from the plan.',
      'A sensible calorie target can help create a better starting point for rehab and exercise. It can support energy, recovery, consistency, and gradual progress while you work on strength, mobility, walking tolerance, and overall function.',
      'The goal is not perfection. The goal is to use the estimate as a guide, then adjust based on real-life trends such as body weight, symptoms, hunger, energy, and performance.'
    ],
    callout:
      'In practice: a useful calorie target is one you can follow consistently while still feeling able to move, train, and recover.'
  },
  {
    title: 'Why protein and overall diet matter',
    summary: 'Calories set quantity; protein, carbs, fats, and food quality shape how sustainable your plan feels.',
    paragraphs: [
      'Calories affect the overall amount you eat. Protein, carbohydrate, fat, and food quality affect what that intake looks like in practice.',
      'For many active adults, protein is especially relevant because it helps support muscle maintenance and strength-focused training. Carbohydrates often help with energy for walking, gym sessions, and higher-volume activity. Fats still matter for a balanced diet and overall intake.',
      'You do not need a perfect macro split to make progress. In most cases, a balanced intake with enough total calories, enough protein, and consistent eating habits is more useful than chasing exact numbers.'
    ],
    callout:
      'A practical approach: get the overall calorie range roughly right, include protein in regular meals, and build a routine you can repeat most weeks.'
  },
  {
    title: 'Diet and exercise work better together',
    summary: 'Most progress comes from pairing a realistic intake target with repeatable activity and strength work.',
    paragraphs: [
      'People often focus on only one side of the equation. In reality, progress usually comes from combining a manageable intake with a realistic activity plan.',
      'Walking and general activity can help increase overall movement and improve consistency. Strength training helps build or maintain muscle, improve function, and support long-term progress. A balanced diet supports the work you are asking your body to do.',
      'This is especially important when returning to exercise after pain or injury. The goal is usually not to do everything at once. It is to build a routine that is tolerable, repeatable, and easy to progress over time.'
    ],
    bullets: [
      'Calories set the overall intake target',
      'Protein and meal structure help support recovery and consistency',
      'Walking and strength work help turn the plan into real-world progress'
    ]
  }
];

export function EducationSection() {
  return (
    <div className="space-y-3">
      {sections.map((section, index) => (
        <details
          key={section.title}
          open={index === 0}
          className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold text-slate-900">{section.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{section.summary}</p>
            </div>
            <span className="pt-1 text-xs text-slate-500 transition group-open:rotate-45">+</span>
          </summary>

          <div className="mt-4 space-y-2.5 border-t border-slate-200 pt-4 text-sm leading-6 text-slate-700">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {section.callout ? (
              <p className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-medium text-slate-800">
                {section.callout}
              </p>
            ) : null}

            {section.bullets ? (
              <div className="rounded-xl border border-clinical-200 bg-clinical-50 p-3">
                <h4 className="text-sm font-semibold text-slate-900">Quick scan summary</h4>
                <ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-700">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </details>
      ))}
    </div>
  );
}
