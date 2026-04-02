import type { ActivityLevel, CalculatorInput, Goal, Sex, UnitSystem } from '../types';
import { activityHelp, validateInput } from '../utils/calculator';
import { formatMeasurementHelp } from '../utils/unitConversion';

interface CalculatorCardProps {
  values: CalculatorInput;
  onChange: (next: CalculatorInput) => void;
}

const activityOptions: { value: ActivityLevel; label: string }[] = [
  { value: 'sedentary', label: 'Sedentary' },
  { value: 'low_active', label: 'Low active' },
  { value: 'active', label: 'Active' },
  { value: 'very_active', label: 'Very active' }
];

const goalOptions: { value: Goal; label: string }[] = [
  { value: 'maintain', label: 'Maintain' },
  { value: 'mild_fat_loss', label: 'Mild fat loss' },
  { value: 'gain_build', label: 'Gain / build' }
];

function NumberField({
  label,
  value,
  min,
  max,
  onValue
}: {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onValue: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onValue(Number(event.target.value))}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-clinical-500 transition focus:ring-2 focus:ring-offset-1"
      />
    </label>
  );
}

export function CalculatorCard({ values, onChange }: CalculatorCardProps) {
  const setSex = (sex: Sex) => onChange({ ...values, sex });
  const setUnit = (unit: UnitSystem) => onChange({ ...values, unit });
  const labels = formatMeasurementHelp(values.unit);
  const errors = validateInput(values);

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-slate-900">BMR Calculator inputs</h3>
      <p className="mt-2 text-sm text-slate-600">
        This estimates resting calories (resting energy needs). It is educational and not a prescription.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <fieldset className="sm:col-span-2">
          <legend className="mb-2 block text-sm font-medium text-slate-700">Sex</legend>
          <div className="grid grid-cols-2 gap-2">
            {(['female', 'male'] as Sex[]).map((sex) => (
              <button
                key={sex}
                type="button"
                onClick={() => setSex(sex)}
                className={`rounded-lg border px-3 py-2 text-sm font-medium capitalize transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-1 ${
                  values.sex === sex
                    ? 'border-clinical-600 bg-clinical-50 text-clinical-800'
                    : 'border-slate-300 text-slate-700 hover:border-clinical-300'
                }`}
              >
                {sex}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset className="sm:col-span-2">
          <legend className="mb-2 block text-sm font-medium text-slate-700">Units</legend>
          <div className="grid grid-cols-2 gap-2">
            {(['metric', 'imperial'] as UnitSystem[]).map((unit) => (
              <button
                key={unit}
                type="button"
                onClick={() => setUnit(unit)}
                className={`rounded-lg border px-3 py-2 text-sm font-medium capitalize transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinical-600 focus-visible:ring-offset-1 ${
                  values.unit === unit
                    ? 'border-clinical-600 bg-clinical-50 text-clinical-800'
                    : 'border-slate-300 text-slate-700 hover:border-clinical-300'
                }`}
              >
                {unit}
              </button>
            ))}
          </div>
        </fieldset>

        <NumberField label="Age (years)" value={values.age} min={0} max={120} onValue={(age) => onChange({ ...values, age })} />
        <NumberField
          label={labels.heightLabel}
          value={values.height}
          min={values.unit === 'metric' ? 120 : 47}
          max={values.unit === 'metric' ? 230 : 90}
          onValue={(height) => onChange({ ...values, height })}
        />
        <NumberField
          label={labels.weightLabel}
          value={values.weight}
          min={values.unit === 'metric' ? 35 : 77}
          max={values.unit === 'metric' ? 300 : 660}
          onValue={(weight) => onChange({ ...values, weight })}
        />

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Activity level</span>
          <select
            value={values.activity}
            onChange={(event) => onChange({ ...values, activity: event.target.value as ActivityLevel })}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-clinical-500 transition focus:ring-2 focus:ring-offset-1"
          >
            {activityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-slate-500">{activityHelp[values.activity]}</p>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Goal (optional)</span>
          <select
            value={values.goal}
            onChange={(event) => onChange({ ...values, goal: event.target.value as Goal })}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-clinical-500 transition focus:ring-2 focus:ring-offset-1"
          >
            {goalOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {errors.length > 0 ? (
        <ul className="mt-4 space-y-1 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
          {errors.map((error) => (
            <li key={error}>• {error}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
