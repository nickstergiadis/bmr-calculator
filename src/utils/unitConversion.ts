import type { UnitSystem } from '../types';

const LB_TO_KG = 0.45359237;
const IN_TO_CM = 2.54;

export function toKg(weight: number, unit: UnitSystem): number {
  return unit === 'metric' ? weight : weight * LB_TO_KG;
}

export function toCm(height: number, unit: UnitSystem): number {
  return unit === 'metric' ? height : height * IN_TO_CM;
}

export function formatMeasurementHelp(unit: UnitSystem): { heightLabel: string; weightLabel: string } {
  return unit === 'metric'
    ? { heightLabel: 'Height (cm)', weightLabel: 'Weight (kg)' }
    : { heightLabel: 'Height (in)', weightLabel: 'Weight (lb)' };
}
