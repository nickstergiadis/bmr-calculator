import { describe, expect, it } from 'vitest';
import type { CalculatorInput } from '../types';
import {
  calculateGoalRange,
  calculateMaintenanceCalories,
  calculateProteinRange,
  calculateRestingCalories,
  calculateResult,
  validateInput
} from './calculator';

const baseInput: CalculatorInput = {
  age: 35,
  sex: 'male',
  unit: 'metric',
  height: 180,
  weight: 80,
  activity: 'active',
  goal: 'maintain'
};

describe('calculateRestingCalories', () => {
  it('calculates resting calories with the provided equation', () => {
    const resting = calculateRestingCalories(baseInput);
    expect(Math.round(resting)).toBe(1757);
  });

  it('uses imperial inputs via unit conversion', () => {
    const imperialInput: CalculatorInput = {
      ...baseInput,
      unit: 'imperial',
      height: 180 / 2.54,
      weight: 80 / 0.45359237
    };
    expect(Math.round(calculateRestingCalories(imperialInput))).toBe(1757);
  });
});

describe('calculateMaintenanceCalories', () => {
  it('applies sedentary multiplier (1.0 for male)', () => {
    const input = { ...baseInput, activity: 'sedentary' } as CalculatorInput;
    const resting = calculateRestingCalories(input);
    expect(calculateMaintenanceCalories(input)).toBeCloseTo(resting * 1.0, 0);
  });

  it('applies low_active multiplier', () => {
    const input = { ...baseInput, activity: 'low_active' } as CalculatorInput;
    const resting = calculateRestingCalories(input);
    expect(calculateMaintenanceCalories(input)).toBeCloseTo(resting * 1.11, 0);
  });

  it('applies active multiplier', () => {
    const input = { ...baseInput, activity: 'active' } as CalculatorInput;
    const resting = calculateRestingCalories(input);
    expect(calculateMaintenanceCalories(input)).toBeCloseTo(resting * 1.25, 0);
  });

  it('applies very_active multiplier', () => {
    const input = { ...baseInput, activity: 'very_active' } as CalculatorInput;
    const resting = calculateRestingCalories(input);
    expect(calculateMaintenanceCalories(input)).toBeCloseTo(resting * 1.48, 0);
  });

  it('uses female-specific multipliers', () => {
    const input = { ...baseInput, sex: 'female', activity: 'very_active' } as CalculatorInput;
    const resting = calculateRestingCalories(input);
    expect(calculateMaintenanceCalories(input)).toBeCloseTo(resting * 1.45, 0);
  });
});

describe('calculateGoalRange', () => {
  it('calculates conservative mild fat loss range', () => {
    expect(calculateGoalRange(2500, 'mild_fat_loss')).toEqual({ min: 2250, max: 2350 });
  });

  it('calculates conservative gain/build range', () => {
    expect(calculateGoalRange(2500, 'gain_build')).toEqual({ min: 2650, max: 2750 });
  });

  it('calculates maintain range centred on maintenance', () => {
    const range = calculateGoalRange(2500, 'maintain');
    expect(range.min).toBe(2400);
    expect(range.max).toBe(2600);
    expect(range.min).toBeLessThan(range.max);
  });
});

describe('validateInput', () => {
  it('validates implausible values and adult-only logic', () => {
    const errors = validateInput({ ...baseInput, age: 16, weight: 10 });
    expect(errors.length).toBeGreaterThan(0);
  });

  it('accepts age 18 and blocks under-18 ages', () => {
    expect(validateInput({ ...baseInput, age: 18 })).toEqual([]);
    expect(validateInput({ ...baseInput, age: 17 })).toContain(
      'Age must be between 18 and 100 years for this adult tool.'
    );
  });

  it('accepts age 100 and blocks age 101', () => {
    expect(validateInput({ ...baseInput, age: 100 })).toEqual([]);
    expect(validateInput({ ...baseInput, age: 101 }).length).toBeGreaterThan(0);
  });

  it('rejects NaN age', () => {
    const errors = validateInput({ ...baseInput, age: NaN });
    expect(errors.some((e) => e.includes('Age'))).toBe(true);
  });

  it('rejects NaN height', () => {
    const errors = validateInput({ ...baseInput, height: NaN });
    expect(errors.some((e) => e.includes('Height'))).toBe(true);
  });

  it('rejects NaN weight', () => {
    const errors = validateInput({ ...baseInput, weight: NaN });
    expect(errors.some((e) => e.includes('Weight'))).toBe(true);
  });

  it('rejects out-of-range imperial values', () => {
    const input: CalculatorInput = { ...baseInput, unit: 'imperial', height: 10, weight: 10 };
    const errors = validateInput(input);
    expect(errors.some((e) => e.includes('in'))).toBe(true);
    expect(errors.some((e) => e.includes('lb'))).toBe(true);
  });
});

describe('calculateResult', () => {
  it('returns typed result output shape', () => {
    const result = calculateResult({ ...baseInput, goal: 'maintain' });
    expect(result).toHaveProperty('restingCalories');
    expect(result).toHaveProperty('maintenanceCalories');
    expect(result).toHaveProperty('proteinRangeGrams');
    expect(result.targetRange.min).toBeLessThan(result.targetRange.max);
  });
});

describe('calculateProteinRange', () => {
  it('returns 1.6–2.2 g/kg range for metric input', () => {
    const range = calculateProteinRange({ ...baseInput, weight: 80 });
    expect(range.min).toBe(Math.round(80 * 1.6));
    expect(range.max).toBe(Math.round(80 * 2.2));
  });

  it('converts imperial weight before calculating', () => {
    const weightLb = 176;
    const weightKg = weightLb * 0.45359237;
    const range = calculateProteinRange({ ...baseInput, unit: 'imperial', weight: weightLb });
    expect(range.min).toBe(Math.round(weightKg * 1.6));
    expect(range.max).toBe(Math.round(weightKg * 2.2));
  });
});
