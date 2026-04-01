export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active';

export type Sex = 'female' | 'male';

export interface CalculatorInput {
  age: number;
  sex: Sex;
  heightCm: number;
  weightKg: number;
  activity: ActivityLevel;
}

export interface MacroTemplate {
  title: string;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatsG: number;
  context: string;
}

export interface WeeklyPlan {
  title: string;
  focus: string;
  sessions: string[];
}
