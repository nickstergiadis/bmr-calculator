export type CalorieTemplate = {
  id: string;
  title: string;
  shortLabel: string;
  calories: number;
  macroSplit: {
    carbsPercent: number;
    proteinPercent: number;
    fatPercent: number;
  };
  macros: {
    proteinGrams: number;
    carbsGrams: number;
    fatGrams: number;
  };
  mealStructure: string[];
  meals: {
    breakfast: string;
    lunch: string;
    dinner: string;
    snack1: string;
    snack2?: string;
    snack3?: string;
  };
  practicalNote: string;
  footerNote: string;
};

export interface WeeklyStructure {
  title: string;
  intro: string;
  focusPoints: string[];
  exampleWeek: string[];
  wherePhysioFits: string;
}
