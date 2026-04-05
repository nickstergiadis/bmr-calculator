import { useState } from 'react';
import { CalculatorCard } from './components/CalculatorCard';
import { EducationSection } from './components/EducationSection';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MealCards } from './components/MealCards';
import { ResultsCard } from './components/ResultsCard';
import { Section } from './components/Section';
import { WeeklyPlanCards } from './components/WeeklyPlanCards';
import type { CalculatorInput } from './types';

const initialValues: CalculatorInput = {
  age: 38,
  sex: 'female',
  unit: 'metric',
  height: 168,
  weight: 79,
  activity: 'low_active',
  goal: 'maintain'
};

export default function App() {
  const [values, setValues] = useState<CalculatorInput>(initialValues);

  return (
    <div id="top" className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />

        <Section
          id="calculator"
          eyebrow="Step 1"
          title="Enter your details"
          subtitle="Use the calculator to get a practical estimate. Keep your numbers in context with symptoms, recovery, and real-world trends over time."
        >
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <CalculatorCard values={values} onChange={setValues} />
            <div id="results" className="lg:sticky lg:top-24 lg:self-start">
              <ResultsCard values={values} />
            </div>
          </div>
        </Section>

        <Section
          id="results-guide"
          eyebrow="Step 2"
          title="Use your estimate in practice"
          subtitle="Use your result as a starting point, then adjust gradually based on weekly trends, training tolerance, and symptom response."
          tone="muted"
        >
          <div className="grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">Start simple</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Pick a realistic calorie target and stick with it for 2-4 weeks before making major changes.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">Track useful signals</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Watch weight trends, energy, hunger, exercise tolerance, and recovery instead of relying on a single day.
              </p>
            </article>
            <article className="rounded-2xl bg-white p-5">
              <h3 className="text-base font-semibold text-slate-900">Adjust gradually</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Make small adjustments when needed. Sustainable progress usually beats aggressive short-term changes.
              </p>
            </article>
          </div>
        </Section>

        <Section
          id="physio-guidance"
          eyebrow="Step 3"
          title="Physio guidance and planning"
          subtitle="Use these sections to connect your calorie estimate to exercise structure, recovery, and a realistic weekly rhythm."
        >
          <div className="space-y-8">
            <EducationSection />

            <div className="rounded-2xl border border-clinical-200 bg-clinical-50 p-5">
              <h3 className="text-base font-semibold text-slate-900">Where physiotherapy can help</h3>
              <ul className="mt-3 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                <li>• Choose exercises that match your current capacity</li>
                <li>• Modify movement around pain or stiffness</li>
                <li>• Progress loading safely when symptoms change</li>
                <li>• Build confidence returning to activity and strength training</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section
          id="templates"
          eyebrow="Reference"
          title="Calorie and meal templates"
          subtitle="Browse one template at a time for easier comparison. These are educational examples, not individualized meal plans."
          tone="muted"
        >
          <MealCards />
        </Section>

        <Section
          id="weekly-plans"
          eyebrow="Reference"
          title="Example weekly structures"
          subtitle="Choose a structure close to your current baseline, then scale it with tolerance and consistency."
        >
          <WeeklyPlanCards />
        </Section>

        <Section
          id="faq"
          eyebrow="Support"
          title="FAQ"
          subtitle="Common questions from adults using calorie estimates while returning to exercise."
          tone="muted"
        >
          <Faq />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
