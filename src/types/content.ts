export interface CalorieTemplateMeal {
  label: string;
  text: string;
}

export interface CalorieTemplate {
  title: string;
  shortLabel: string;
  calories: number;
  macroSplit: string;
  proteinG: number;
  carbsG: number;
  fatsG: number;
  mealStructure: string[];
  exampleDay: CalorieTemplateMeal[];
  practicalNote: string;
  footerNote: string;
}

export interface WeeklyStructure {
  title: string;
  intro: string;
  focusPoints: string[];
  exampleWeek: string[];
  wherePhysioFits: string;
}
