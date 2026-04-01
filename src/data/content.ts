import type { MacroTemplate, WeeklyPlan } from '../types';

export const macroTemplates: MacroTemplate[] = [
  {
    title: 'Gentle Deficit Template',
    calories: 1800,
    proteinG: 120,
    carbsG: 180,
    fatsG: 60,
    context: 'For adults starting gradual fat loss while rebuilding consistency with movement.'
  },
  {
    title: 'Rehab Support Template',
    calories: 2100,
    proteinG: 130,
    carbsG: 240,
    fatsG: 65,
    context: 'For patients in moderate rehab blocks who need enough energy for sessions and recovery.'
  },
  {
    title: 'Maintenance & Capacity Template',
    calories: 2300,
    proteinG: 140,
    carbsG: 260,
    fatsG: 70,
    context: 'For deconditioned adults increasing weekly training volume without pursuing aggressive weight change.'
  }
];

export const weeklyPlans: WeeklyPlan[] = [
  {
    title: 'Foundation Week',
    focus: 'Rebuild routine with low joint irritation risk.',
    sessions: [
      '2 x strength rehab sessions (30-40 min)',
      '2 x low-impact cardio sessions (20-30 min)',
      'Daily mobility and breathing (10 min)'
    ]
  },
  {
    title: 'Progressive Week',
    focus: 'Increase work tolerance with planned recovery.',
    sessions: [
      '3 x strength sessions (40-45 min)',
      '2 x zone-2 cardio sessions (25-35 min)',
      '1 x recovery walk + flexibility session'
    ]
  },
  {
    title: 'Return-to-Activity Week',
    focus: 'Blend rehab with functional exercise habits.',
    sessions: [
      '2 x structured rehab sessions',
      '2 x full-body strength sessions',
      '2 x cardio sessions at conversational pace'
    ]
  }
];
