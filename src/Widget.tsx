import { useState } from 'react';
import { CalculatorCard } from './components/CalculatorCard';
import { ResultsCard } from './components/ResultsCard';
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

export function Widget() {
  const [values, setValues] = useState<CalculatorInput>(initialValues);

  return (
    <div className="bmr-widget-root">
      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <CalculatorCard values={values} onChange={setValues} />
        <div className="lg:sticky lg:top-24 lg:self-start">
          <ResultsCard values={values} />
        </div>
      </div>
    </div>
  );
}
