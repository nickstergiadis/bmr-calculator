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
import { macroTemplateContent } from './data/content';
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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <Hero />

        <Section
          id="calculator"
          title="Your starting point"
          subtitle="Calories are only one part of the picture, but they can be useful when you are trying to understand why progress feels slow, why energy is low, or how to better support training and recovery. This calculator gives you a starting estimate, not an exact prescription."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <CalculatorCard values={values} onChange={setValues} />
            <ResultsCard values={values} />
          </div>
        </Section>

        <Section id="rehab" title="Why this matters in rehab and physiotherapy">
          <EducationSection />
        </Section>

        <Section id="physio-role" title="Where physio fits in">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="space-y-3 text-sm leading-6 text-slate-700">
              <p>
                Physiotherapy does not replace nutrition care, but it can help with the exercise and rehab side of the
                plan.
              </p>
              <p>A physiotherapist can help you:</p>
              <ul className="space-y-1">
                <li>• choose exercises that match your current ability</li>
                <li>• modify movements around pain or stiffness</li>
                <li>• build back into walking, gym training, lifting, or sport</li>
                <li>• progress or regress loading when symptoms change</li>
                <li>• improve confidence with movement</li>
                <li>• create a realistic plan you can follow consistently</li>
              </ul>
              <p>
                This is often the missing link for people who know they should exercise, but are unsure what to do, how
                much to do, or how to restart without flaring symptoms.
              </p>
              <p className="font-medium text-slate-800">
                If your main barrier is pain, stiffness, low exercise tolerance, or uncertainty with progression, physio
                can help bridge the gap between “I should be active” and “I know how to do this safely.”
              </p>
            </div>
          </div>
        </Section>

        <Section id="templates" title={macroTemplateContent.heading} subtitle={macroTemplateContent.introBody}>
          <div className="space-y-4">
            <p className="text-sm leading-6 text-slate-700">{macroTemplateContent.introBodyExtended}</p>
            <p className="text-sm font-medium text-slate-700">{macroTemplateContent.smallNote}</p>
            <MealCards />
          </div>
        </Section>

        <Section
          id="weekly-plans"
          title="Example weekly exercise structures"
          subtitle="These are general examples to show how calories, movement, and exercise structure often fit together in real life. They are not diagnosis-specific rehab plans. They are starting frameworks for adults trying to become more active, lose weight, build strength, or return to exercise more confidently."
        >
          <WeeklyPlanCards />
        </Section>

        <Section id="movement-baseline" title="A useful baseline for most adults">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-sm leading-6 text-slate-700">
              For general health, adults are usually encouraged to aim for regular aerobic activity across the week and
              muscle-strengthening work on two or more days per week. That does not mean you need to start there
              immediately. It means those targets can be useful long-term reference points.
            </p>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              If that feels far from your current reality, start smaller. A plan you can repeat is more valuable than
              an ambitious plan you cannot maintain.
            </p>
          </div>
        </Section>

        <Section
          id="faq"
          title="FAQ"
          subtitle="Common questions from adults using calorie estimates while returning to exercise."
        >
          <Faq />
        </Section>

        <Section id="cta" title="Need help building the exercise side of the plan?">
          <div className="rounded-2xl border border-clinical-200 bg-clinical-50 p-6 shadow-soft">
            <p className="text-sm leading-6 text-slate-700">
              If you know the general direction you want to go but are unsure how to exercise around pain, restart
              safely, or progress without flaring symptoms, physiotherapy can help. The goal is to build a plan that is
              practical, progressive, and realistic for your current starting point.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="#physio-role"
                className="rounded-xl bg-clinical-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-clinical-800"
              >
                Book a physio assessment
              </a>
              <p className="text-sm text-slate-700">
                Ideal for people returning to exercise, building strength, or trying to stay active despite pain or
                stiffness.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
