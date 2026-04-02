import type { CalculatorResult } from '../models/calculatorResult';
import type { ActivityLevel, CalculatorInput, Goal, Sex, UnitSystem } from '../types';
import { toCm, toKg } from './unitConversion';

const activityMultipliers: Record<Sex, Record<ActivityLevel, number>> = {
  male: {
    sedentary: 1.0,
    low_active: 1.11,
    active: 1.25,
    very_active: 1.48
  },
  female: {
    sedentary: 1.0,
    low_active: 1.12,
    active: 1.27,
    very_active: 1.45
  }
};

const GOAL_OFFSET = 250;

function getBounds(unit: UnitSystem) {
  if (unit === 'metric') {
    return {
      height: { min: 120, max: 230 },
      weight: { min: 35, max: 300 }
    };
  }

  return {
    height: { min: 47, max: 90 },
    weight: { min: 77, max: 660 }
  };
}

export function validateInput(input: CalculatorInput): string[] {
  const errors: string[] = [];
  const bounds = getBounds(input.unit);

  if (!Number.isFinite(input.age) || input.age < 19 || input.age > 100) {
    errors.push('Age must be between 19 and 100 years for this adult tool.');
  }

  if (!Number.isFinite(input.height) || input.height < bounds.height.min || input.height > bounds.height.max) {
    errors.push(
      `Height must be between ${bounds.height.min} and ${bounds.height.max} ${input.unit === 'metric' ? 'cm' : 'in'}.`
    );
  }

  if (!Number.isFinite(input.weight) || input.weight < bounds.weight.min || input.weight > bounds.weight.max) {
    errors.push(
      `Weight must be between ${bounds.weight.min} and ${bounds.weight.max} ${input.unit === 'metric' ? 'kg' : 'lb'}.`
    );
  }

  return errors;
}

export function calculateRestingCalories(input: CalculatorInput): number {
  const weightKg = toKg(input.weight, input.unit);
  const heightCm = toCm(input.height, input.unit);
  const sexAdjustment = input.sex === 'male' ? 5 : -161;

  return (9.99 * weightKg) + (6.25 * heightCm) - (4.92 * input.age) + sexAdjustment;
}

export function calculateMaintenanceCalories(input: CalculatorInput): number {
  return calculateRestingCalories(input) * activityMultipliers[input.sex][input.activity];
}

function getGoalSummary(goal: Goal): string {
  if (goal === 'mild_fat_loss') return 'Mild fat loss: a conservative deficit to avoid crash dieting.';
  if (goal === 'gain_build') return 'Gain/build: a conservative surplus to support training and recovery.';
  return 'Maintain: use maintenance as a practical starting estimate.';
}

export function calculateGoalRange(maintenanceCalories: number, goal: Goal) {
  if (goal === 'mild_fat_loss') {
    return {
      min: Math.round(maintenanceCalories - GOAL_OFFSET),
      max: Math.round(maintenanceCalories - 150)
    };
  }

  if (goal === 'gain_build') {
    return {
      min: Math.round(maintenanceCalories + 150),
      max: Math.round(maintenanceCalories + GOAL_OFFSET)
    };
  }

  return {
    min: Math.round(maintenanceCalories - 100),
    max: Math.round(maintenanceCalories + 100)
  };
}

export function calculateResult(input: CalculatorInput): CalculatorResult {
  const restingCalories = Math.round(calculateRestingCalories(input));
  const maintenanceCalories = Math.round(calculateMaintenanceCalories(input));

  return {
    restingCalories,
    maintenanceCalories,
    targetRange: calculateGoalRange(maintenanceCalories, input.goal),
    goalSummary: getGoalSummary(input.goal)
  };
}

export const activityHelp: Record<ActivityLevel, string> = {
  sedentary: 'Mostly sitting, minimal intentional exercise.',
  low_active: 'Some movement daily, light exercise 1–3 days/week.',
  active: 'Regular training or physical work most days.',
  very_active: 'Hard training/physical labor with high weekly volume.'
};
