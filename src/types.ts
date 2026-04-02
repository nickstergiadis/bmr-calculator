export type ActivityLevel = 'sedentary' | 'low_active' | 'active' | 'very_active';

export type Sex = 'female' | 'male';

export type UnitSystem = 'metric' | 'imperial';

export type Goal = 'maintain' | 'mild_fat_loss' | 'gain_build';

export interface CalculatorInput {
  age: number;
  sex: Sex;
  height: number;
  weight: number;
  unit: UnitSystem;
  activity: ActivityLevel;
  goal: Goal;
}

export interface MacroTemplate {
  title: string;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatsG: number;
}

export interface WeeklyPlan {
  title: string;
  intro: string;
  focusPoints: string[];
  exampleWeek: string[];
  wherePhysioFits: string;
}
