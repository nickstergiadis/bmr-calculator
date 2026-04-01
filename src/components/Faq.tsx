const faqItems = [
  {
    q: 'Is this calculator a diagnosis or treatment plan?',
    a: 'No. It is educational and should not replace individualized clinical assessment.'
  },
  {
    q: 'Can I use this for rapid fat loss?',
    a: 'This tool is designed around gradual, sustainable behavior change and rehab-compatible planning.'
  },
  {
    q: 'Should I follow these numbers exactly?',
    a: 'Treat them as initial estimates. Your physiotherapist or dietitian can help adjust based on symptoms and progress.'
  },
  {
    q: 'Does higher protein fix pain or injuries?',
    a: 'Protein can support tissue goals, but rehab outcomes depend on many factors including loading, sleep, and adherence.'
  }
];

export function Faq() {
  return (
    <div className="space-y-3">
      {faqItems.map((item) => (
        <details key={item.q} className="rounded-xl border border-slate-200 bg-white p-4 shadow-soft">
          <summary className="cursor-pointer text-sm font-semibold text-slate-900">{item.q}</summary>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
