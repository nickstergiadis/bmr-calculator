import type { WeeklyStructure } from '../types/content';

export const weeklyStructures: WeeklyStructure[] = [
  {
    id: 'beginner-deconditioned-adult',
    title: 'Beginner / deconditioned adult',
    shortLabel: 'Simple consistency-first starting point',
    bestFor: 'Best for: Getting started again',
    intro:
      'A simple structure for someone who has been inactive, feels deconditioned, or is returning to exercise after a long break.',
    goals: [
      'build consistency first',
      'increase general activity gradually',
      'reintroduce strength work without doing too much too soon',
      'avoid the all-or-nothing mindset'
    ],
    exampleWeek: [
      { day: 'Monday', activity: '20 to 30 minute walk' },
      { day: 'Tuesday', activity: 'Basic full-body strength session' },
      { day: 'Wednesday', activity: 'Easy walk or mobility work' },
      { day: 'Thursday', activity: 'Rest' },
      { day: 'Friday', activity: 'Basic full-body strength session' },
      { day: 'Saturday', activity: '20 to 30 minute walk' },
      { day: 'Sunday', activity: 'Rest or light mobility' }
    ],
    practicalNote:
      'This type of week is often enough to create momentum without feeling overwhelming. The goal is not to train hard every day. The goal is to rebuild routine, tolerance, and confidence.',
    physioFit:
      'Physio can help choose appropriate starting exercises, modify painful movements, and make the plan feel more realistic and less intimidating.'
  },
  {
    id: 'fat-loss-strength-foundation',
    title: 'Fat loss + strength foundation',
    shortLabel: 'Balanced weight-management and strength structure',
    bestFor: 'Best for: Weight loss plus strength habits',
    intro:
      'A balanced structure for someone trying to improve body composition while also getting stronger and more consistent with exercise.',
    goals: [
      'combine regular walking or cardio with strength work',
      'avoid relying on diet alone',
      'build sustainable habits across the week',
      'support body composition goals without turning the plan into extremes'
    ],
    exampleWeek: [
      { day: 'Monday', activity: 'Upper-body or full-body strength' },
      { day: 'Tuesday', activity: 'Brisk walk or cardio for 30 to 45 minutes' },
      { day: 'Wednesday', activity: 'Lower-body or full-body strength' },
      { day: 'Thursday', activity: 'Walk and light mobility' },
      { day: 'Friday', activity: 'Strength session' },
      { day: 'Saturday', activity: 'Longer walk, cardio, or general activity day' },
      { day: 'Sunday', activity: 'Rest' }
    ],
    practicalNote:
      'For many adults, this type of week is more realistic than trying to train hard every day. Walking helps increase overall activity, while strength work helps support muscle, function, and long-term progress.',
    physioFit:
      'Physio can help if pain, stiffness, old injuries, or low exercise tolerance are limiting your ability to strength train or increase activity consistently.'
  },
  {
    id: 'return-to-gym-rehab-bridge',
    title: 'Return to gym / rehab bridge',
    shortLabel: 'Symptom-guided return to training',
    bestFor: 'Best for: Returning to the gym after pain or injury',
    intro:
      'A bridge for someone who wants to get back to gym training but still needs symptom-guided progression and a more thoughtful loading plan.',
    goals: [
      'return to training with structure rather than guesswork',
      'modify exercises when needed instead of stopping altogether',
      'build load and volume gradually',
      'manage flare-ups without losing momentum'
    ],
    exampleWeek: [
      { day: 'Monday', activity: 'Strength session with modified lifts' },
      { day: 'Tuesday', activity: 'Walk or easy cardio' },
      { day: 'Wednesday', activity: 'Mobility and recovery work' },
      { day: 'Thursday', activity: 'Strength session with gradual progression' },
      { day: 'Friday', activity: 'Walk or easy cardio' },
      {
        day: 'Saturday',
        activity: 'Optional lighter accessory, technique, or machine-based session'
      },
      { day: 'Sunday', activity: 'Rest' }
    ],
    practicalNote:
      'This type of week works well for someone who is no longer in the very early stage of rehab but is not yet ready to train normally without adjustments. The plan should feel progressive, but still controlled.',
    physioFit:
      'Physio can help identify what to keep, what to modify, how to progress loading, and how to manage flare-ups without abandoning the plan.'
  }
];
