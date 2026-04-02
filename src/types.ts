import type { CalorieTemplate } from './types/content';

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

export interface MacroTemplateContent {
  heading: string;
  introBody: string;
  introBodyExtended: string;
  smallNote: string;
  featuredExplainerHeading: string;
  featuredExplainerBody: string[];
  templates: CalorieTemplate[];
  comparisonBlock: {
    heading: string;
    body: string;
  };
  practicalTakeaways: {
    heading: string;
    items: string[];
  };
}
