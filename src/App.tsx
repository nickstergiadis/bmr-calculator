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
          eyebrow="Core tool"
          title="Calculator"
          subtitle="Use this as a practical starting estimate. Keep the numbers in context with your symptoms, energy, and real-life progress over time."
        >
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <CalculatorCard values={values} onChange={setValues} />
            <div id="results" className="lg:sticky lg:top-24 lg:self-start">
              <ResultsCard values={values} />
            </div>
          </div>
        </Section>

        <Section id="rehab" eyebrow="Physio-specific education" title="Why this matters in rehab and physiotherapy">
          <div className="space-y-5">
            <EducationSection />

            <div className="grid gap-4 lg:grid-cols-2">
              <article id="physio-role" className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <h3 className="text-base font-semibold text-slate-900">Where physio fits in</h3>
                <div className="mt-3 space-y-3 text-sm leading-6 text-slate-700">
                  <p>
                    Physiotherapy does not replace nutrition care, but it can help with the exercise and rehab side of
                    the plan.
                  </p>
                  <p>A physiotherapist can help you:</p>
                  <ul className="grid gap-1.5 sm:grid-cols-2">
                    <li>• choose exercises that match your current ability</li>
                    <li>• modify movements around pain or stiffness</li>
                    <li>• build back into walking, gym training, lifting, or sport</li>
                    <li>• progress or regress loading when symptoms change</li>
                    <li>• improve confidence with movement</li>
                    <li>• create a realistic plan you can follow consistently</li>
                  </ul>
                  <p>
                    This is often the missing link for people who know they should exercise, but are unsure what to do,
                    how much to do, or how to restart without flaring symptoms.
                  </p>
                </div>
              </article>

              <article className="rounded-2xl border border-clinical-200 bg-clinical-50 p-6 shadow-soft">
                <h3 className="text-base font-semibold text-slate-900">What physio adds to the plan</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">
                  A weekly structure can look good on paper but still fail in practice if exercises are too painful, the
                  loading is wrong, or progression is unclear. Physiotherapy helps close that gap by matching the plan
                  to your current ability and making it easier to progress with confidence.
                </p>
                <p className="mt-3 rounded-xl bg-white/80 p-3 text-sm font-medium text-slate-800">
                  If your main barrier is pain, stiffness, low exercise tolerance, or uncertainty with progression,
                  physio can help bridge the gap between “I should be active” and “I know how to do this safely.”
                </p>
              </article>
            </div>
          </div>
        </Section>

        <Section
          id="templates"
          eyebrow="Calorie templates"
          title={macroTemplateContent.heading}
          subtitle={macroTemplateContent.introBody}
        >
          <div className="space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700 shadow-soft">
              <p>{macroTemplateContent.introBodyExtended}</p>
              <p className="mt-2 font-medium text-slate-800">{macroTemplateContent.smallNote}</p>
            </div>
            <MealCards />
          </div>
        </Section>

        <Section
          id="weekly-plans"
          eyebrow="Weekly structures"
          title="Example weekly exercise structures"
          subtitle="These are general examples to show how calories, movement, and exercise structure often fit together in real life. They are not diagnosis-specific rehab plans."
        >
          <div className="space-y-4">
            <p className="text-sm font-medium text-slate-700">
              The best weekly plan is usually the one you can repeat consistently, recover from, and adjust over time.
            </p>
            <WeeklyPlanCards />
            <div className="grid gap-4 lg:grid-cols-3">
              <article id="movement-baseline" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <h3 className="text-base font-semibold text-slate-900">A useful baseline for most adults</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  For general health, adults are usually encouraged to aim for regular aerobic activity across the week
                  and muscle-strengthening work on two or more days per week. That does not mean you need to start
                  there immediately.
                </p>
              </article>
              <article id="weekly-plan-use" className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <h3 className="text-base font-semibold text-slate-900">How to use these examples</h3>
                <ul className="mt-2 space-y-1.5 text-sm leading-6 text-slate-700">
                  <li>• choose the structure that feels closest to your current starting point</li>
                  <li>• keep the plan simple enough that you can repeat it most weeks</li>
                  <li>• progress by adding time, load, or volume gradually</li>
                  <li>• adjust the plan when symptoms, fatigue, or schedule require it</li>
                </ul>
              </article>
              <article id="what-physio-adds" className="rounded-2xl border border-clinical-200 bg-clinical-50 p-5 shadow-soft">
                <h3 className="text-base font-semibold text-slate-900">Progress beats perfection</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  If that baseline feels far from your current reality, start smaller. A plan you can repeat is more
                  valuable than an ambitious plan you cannot maintain.
                </p>
              </article>
            </div>
          </div>
        </Section>

        <Section
          id="faq"
          eyebrow="Questions"
          title="FAQ"
          subtitle="Common questions from adults using calorie estimates while returning to exercise."
        >
          <Faq />
        </Section>

        <Section id="cta" eyebrow="Next step" title="Need help building the exercise side of the plan?">
          <div className="rounded-2xl border border-clinical-200 bg-clinical-50 p-6 shadow-soft">
            <p className="text-sm leading-6 text-slate-700">
              If you know the general direction you want to go but are unsure how to exercise around pain, restart
              safely, or progress without flaring symptoms, physiotherapy can help.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="#physio-role"
                className="rounded-xl bg-clinical-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-clinical-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-2"
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
