export interface CalorieRange {
  min: number;
  max: number;
}

export interface CalculatorResult {
  restingCalories: number;
  maintenanceCalories: number;
  targetRange: CalorieRange;
  goalSummary: string;
}
