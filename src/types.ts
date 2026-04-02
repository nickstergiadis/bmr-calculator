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

export interface MacroExampleMeal {
  label: string;
  text: string;
}

export interface MacroTemplate {
  title: string;
  shortLabel: string;
  calories: number;
  macroSplit: string;
  proteinG: number;
  carbsG: number;
  fatsG: number;
  mealStructure: string[];
  exampleDay: MacroExampleMeal[];
  practicalNote: string;
  footerNote: string;
}

export interface MacroTemplateContent {
  heading: string;
  introBody: string;
  introBodyExtended: string;
  smallNote: string;
  featuredExplainerHeading: string;
  featuredExplainerBody: string[];
  templates: MacroTemplate[];
  comparisonBlock: {
    heading: string;
    body: string;
  };
  practicalTakeaways: {
    heading: string;
    items: string[];
  };
}

export interface WeeklyPlan {
  title: string;
  intro: string;
  focusPoints: string[];
  exampleWeek: string[];
  wherePhysioFits: string;
}
