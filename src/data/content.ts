import type { MacroTemplate, WeeklyPlan } from '../types';

export const macroTemplates: MacroTemplate[] = [
  {
    title: 'Balanced day example',
    calories: 2000,
    proteinG: 130,
    carbsG: 220,
    fatsG: 67
  },
  {
    title: 'Higher-protein day example',
    calories: 2000,
    proteinG: 145,
    carbsG: 205,
    fatsG: 70
  },
  {
    title: 'Higher-carb training day example',
    calories: 2000,
    proteinG: 130,
    carbsG: 240,
    fatsG: 58
  }
];

export const weeklyPlans: WeeklyPlan[] = [
  {
    title: 'Beginner / deconditioned adult',
    intro:
      'A simple starting structure for someone who has been inactive, feels deconditioned, or is returning to exercise after a long break.',
    focusPoints: [
      'build consistency first',
      'prioritize walking and basic strength work',
      'keep sessions manageable',
      'avoid the all-or-nothing mindset'
    ],
    exampleWeek: [
      'Monday: 20 to 30 minute walk',
      'Tuesday: Basic full-body strength session',
      'Wednesday: Easy walk or mobility work',
      'Thursday: Rest',
      'Friday: Basic full-body strength session',
      'Saturday: 20 to 30 minute walk',
      'Sunday: Rest or light mobility'
    ],
    wherePhysioFits:
      'Physio can help choose appropriate exercises, modify painful movements, and make the starting point feel less intimidating and more realistic.'
  },
  {
    title: 'Fat loss + strength foundation',
    intro:
      'A balanced structure for someone trying to improve body composition while also getting stronger and more consistent with exercise.',
    focusPoints: [
      'combine regular walking or cardio with strength work',
      'avoid relying on diet alone',
      'build habits that can be sustained most weeks',
      'consistency matters more than perfect tracking'
    ],
    exampleWeek: [
      'Monday: Upper-body or full-body strength',
      'Tuesday: Brisk walk or cardio 30 to 45 minutes',
      'Wednesday: Lower-body or full-body strength',
      'Thursday: Walk and light mobility',
      'Friday: Strength session',
      'Saturday: Longer walk or cardio',
      'Sunday: Rest'
    ],
    wherePhysioFits:
      'Physio can help if pain, stiffness, old injuries, or poor exercise tolerance are limiting your ability to strength train or increase activity.'
  },
  {
    title: 'Return to gym / rehab bridge',
    intro:
      'A bridge for someone who wants to get back to gym training but still needs symptom-guided progression and a more thoughtful loading plan.',
    focusPoints: [
      'use progressive loading, not random trial and error',
      'substitute or modify movements when needed',
      'expect some adjustment period',
      'build volume gradually'
    ],
    exampleWeek: [
      'Monday: Strength session with modified lifts',
      'Tuesday: Walk or easy cardio',
      'Wednesday: Mobility and recovery work',
      'Thursday: Strength session with gradual progression',
      'Friday: Walk or easy cardio',
      'Saturday: Optional lighter accessory or technique session',
      'Sunday: Rest'
    ],
    wherePhysioFits:
      'Physio can help identify what to keep, what to modify, how to progress loading, and how to manage flare-ups without abandoning the plan.'
  }
];
