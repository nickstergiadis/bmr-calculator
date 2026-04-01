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
  heightCm: 168,
  weightKg: 79,
  activity: 'light'
};

export default function App() {
  const [values, setValues] = useState<CalculatorInput>(initialValues);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />

        <Section
          id="calculator"
          title="Calculator"
          subtitle="Use this estimate to support clinician-led discussions around energy intake, protein, and realistic progress pacing."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <CalculatorCard values={values} onChange={setValues} />
            <ResultsCard values={values} />
          </div>
        </Section>

        <Section
          id="rehab"
          title="Why this matters in rehab and physiotherapy"
          subtitle="Nutrition and exercise structure can influence adherence, tolerance, and confidence while returning to activity."
        >
          <EducationSection />
        </Section>

        <Section
          id="templates"
          title="Example calorie and macro templates"
          subtitle="These sample templates are educational references, not individualized prescriptions."
        >
          <MealCards />
        </Section>

        <Section
          id="weekly-plans"
          title="Example weekly exercise structures"
          subtitle="Simple structure examples to discuss with your physio based on current capacity and symptom response."
        >
          <WeeklyPlanCards />
        </Section>

        <Section
          id="physio-role"
          title="Where physiotherapy fits"
          subtitle="Physiotherapists help align exercise progression with pain behavior, function goals, and sustainable habits."
        >
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <ul className="space-y-3 text-sm leading-6 text-slate-700">
              <li>• Clarify what level of discomfort is expected vs. what needs modification.</li>
              <li>• Progress strength and cardio volume based on symptoms, not all-or-nothing thinking.</li>
              <li>• Coordinate with nutrition professionals when energy intake may limit recovery.</li>
              <li>• Keep goals realistic and behavior-based to improve long-term adherence.</li>
            </ul>
          </div>
        </Section>

        <Section
          id="faq"
          title="FAQ"
          subtitle="Common questions from adults using calorie estimates while returning to exercise."
        >
          <Faq />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
