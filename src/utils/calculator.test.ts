import { describe, expect, it } from 'vitest';
import type { CalculatorInput } from '../types';
import { calculateGoalRange, calculateRestingCalories, calculateResult, validateInput } from './calculator';

const baseInput: CalculatorInput = {
  age: 35,
  sex: 'male',
  unit: 'metric',
  height: 180,
  weight: 80,
  activity: 'active',
  goal: 'maintain'
};

describe('calculator utilities', () => {
  it('calculates resting calories with the provided equation', () => {
    const resting = calculateRestingCalories(baseInput);
    expect(Math.round(resting)).toBe(1757);
  });

  it('calculates conservative mild fat loss and gain ranges', () => {
    expect(calculateGoalRange(2500, 'mild_fat_loss')).toEqual({ min: 2250, max: 2350 });
    expect(calculateGoalRange(2500, 'gain_build')).toEqual({ min: 2650, max: 2750 });
  });

  it('validates implausible values and adult-only logic', () => {
    const errors = validateInput({ ...baseInput, age: 16, weight: 10 });
    expect(errors.length).toBeGreaterThan(0);
  });

  it('accepts age 18 and blocks under-18 ages', () => {
    expect(validateInput({ ...baseInput, age: 18 })).toEqual([]);
    expect(validateInput({ ...baseInput, age: 17 })).toContain('Age must be between 18 and 100 years for this adult tool.');
  });

  it('returns typed result output shape', () => {
    const result = calculateResult({ ...baseInput, goal: 'maintain' });
    expect(result).toHaveProperty('restingCalories');
    expect(result).toHaveProperty('maintenanceCalories');
    expect(result.targetRange.min).toBeLessThan(result.targetRange.max);
  });
});
