const faqItems = [
  {
    q: 'Is this number exact?',
    a: 'No. It is an estimate based on your inputs. Real-life calorie needs vary based on activity, body composition, routine, and individual differences. Use it as a starting point, then adjust based on trends.'
  },
  {
    q: 'Is this the same as TDEE?',
    a: 'Not exactly. This tool starts with an estimate of resting calories, then uses activity information to estimate maintenance calories. That maintenance estimate is similar to what many people mean when they say total daily energy expenditure.'
  },
  {
    q: 'What if my weight is not changing?',
    a: 'That usually means your actual intake and output are not matching the estimate as expected. Before making major changes, look at a few weeks of trends, not a few days. Body weight, hunger, energy, recovery, and consistency all matter.'
  },
  {
    q: 'Do I need to track macros?',
    a: 'Not always. Some people find macro tracking helpful. Others do well by focusing on overall calories, regular meals, enough protein, and a repeatable routine. Tracking is a tool, not a requirement.'
  },
  {
    q: 'Why include protein?',
    a: 'Protein is often useful to consider when someone is trying to build strength, maintain muscle while losing weight, or support regular resistance training. It is one part of the overall picture, not the only thing that matters.'
  },
  {
    q: 'When should I see a physio?',
    a: 'A physio may help if pain, stiffness, low confidence, or repeated flare-ups are making it hard to exercise, return to the gym, or build consistency.'
  },
  {
    q: 'When should I see a dietitian?',
    a: 'A registered dietitian is the right professional for individualized nutrition planning, especially if you have digestive concerns, medical conditions, a history of disordered eating, pregnancy, or more complex weight-related goals.'
  },
  {
    q: 'Who is this tool for?',
    a: 'This tool is intended for adults who want a simple educational starting point for calorie needs, meal structure, and exercise planning.'
  }
];

export function Faq() {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {faqItems.map((item) => (
        <details key={item.q} className="group rounded-xl border border-slate-200 bg-white shadow-soft">
          <summary className="flex w-full cursor-pointer list-none items-start justify-between gap-4 rounded-xl p-4 text-left text-sm font-semibold text-slate-900 marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-1">
            {item.q}
            <span className="mt-0.5 text-xs text-slate-500 transition group-open:rotate-45">+</span>
          </summary>
          <p className="mx-4 mb-4 border-t border-slate-200 pt-3 text-sm leading-6 text-slate-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
