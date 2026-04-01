export function EducationSection() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {[
        {
          title: 'Energy supports rehab quality',
          text: 'Undereating can reduce training quality, recovery tolerance, and adherence in early rehab phases.'
        },
        {
          title: 'Protein supports lean tissue',
          text: 'Higher protein intake can support muscle retention while rebuilding strength and function.'
        },
        {
          title: 'Consistency beats extremes',
          text: 'A stable weekly routine is usually safer and more sustainable than rapid fat-loss approaches.'
        }
      ].map((item) => (
        <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p>
        </article>
      ))}
    </div>
  );
}
