import type { ActivityLevel, CalculatorInput, Sex } from '../types';

interface CalculatorCardProps {
  values: CalculatorInput;
  onChange: (next: CalculatorInput) => void;
}

const activityOptions: { value: ActivityLevel; label: string; factor: number }[] = [
  { value: 'sedentary', label: 'Sedentary', factor: 1.2 },
  { value: 'light', label: 'Lightly active', factor: 1.375 },
  { value: 'moderate', label: 'Moderately active', factor: 1.55 },
  { value: 'active', label: 'Active', factor: 1.725 }
];

function NumberField({
  label,
  value,
  min,
  onValue
}: {
  label: string;
  value: number;
  min?: number;
  onValue: (value: number) => void;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-700">{label}</span>
      <input
        type="number"
        min={min}
        value={value}
        onChange={(event) => onValue(Number(event.target.value))}
        className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-clinical-500 transition focus:ring-2"
      />
    </label>
  );
}

export function CalculatorCard({ values, onChange }: CalculatorCardProps) {
  const setSex = (sex: Sex) => onChange({ ...values, sex });

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-slate-900">BMR input details</h3>
      <p className="mt-2 text-sm text-slate-600">Use this as a neutral baseline for education and discussion.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-slate-700">Sex</span>
          <div className="grid grid-cols-2 gap-2">
            {(['female', 'male'] as Sex[]).map((sex) => (
              <button
                key={sex}
                type="button"
                onClick={() => setSex(sex)}
                className={`rounded-lg border px-3 py-2 text-sm font-medium capitalize transition ${
                  values.sex === sex
                    ? 'border-clinical-600 bg-clinical-50 text-clinical-800'
                    : 'border-slate-300 text-slate-700 hover:border-clinical-300'
                }`}
              >
                {sex}
              </button>
            ))}
          </div>
        </div>

        <NumberField label="Age (years)" value={values.age} min={18} onValue={(age) => onChange({ ...values, age })} />
        <NumberField
          label="Height (cm)"
          value={values.heightCm}
          min={120}
          onValue={(heightCm) => onChange({ ...values, heightCm })}
        />
        <NumberField
          label="Weight (kg)"
          value={values.weightKg}
          min={35}
          onValue={(weightKg) => onChange({ ...values, weightKg })}
        />

        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-700">Activity level</span>
          <select
            value={values.activity}
            onChange={(event) => onChange({ ...values, activity: event.target.value as ActivityLevel })}
            className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-clinical-500 transition focus:ring-2"
          >
            {activityOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label} ({option.factor}x)
              </option>
            ))}
          </select>
        </label>
      </div>
    </article>
  );
}
