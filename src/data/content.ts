import type { MacroTemplateContent, WeeklyPlan } from '../types';

export const macroTemplateContent: MacroTemplateContent = {
  heading: 'Example calorie and macro templates',
  introBody:
    'The examples below are not personalized meal plans. They are simple examples to show what a daily calorie target can look like once it is broken into meals, snacks, and approximate macro totals.',
  introBodyExtended:
    'Calories set the overall intake. Macros change the composition of that intake. Protein is often especially relevant for active adults and people doing resistance exercise, but exact numbers do not need to be perfect to be useful.',
  smallNote:
    'For individualized planning, especially if you have medical, digestive, or complex weight-related concerns, speak with a registered dietitian.',
  featuredExplainerHeading: 'What a 2,000 calorie day can look like',
  featuredExplainerBody: [
    'A 2,000 calorie day does not need to look restrictive, overly clean, or complicated. In many cases, it can simply mean three balanced meals, one or two snacks, regular protein intake, and portions that broadly match your goal.',
    'The point of these examples is not to tell you exactly what to eat. It is to make the number feel more concrete and easier to picture.'
  ],
  templates: [
    {
      title: '1600 kcal example day',
      shortLabel: 'Balanced lower-calorie example',
      calories: 1600,
      macroSplit: '40% carbohydrate / 30% protein / 30% fat',
      proteinG: 120,
      carbsG: 160,
      fatsG: 53,
      mealStructure: ['breakfast', 'lunch', 'dinner', '1 to 2 snacks'],
      exampleDay: [
        { label: 'Breakfast', text: 'Greek yogurt bowl with berries, oats, and chia seeds' },
        { label: 'Lunch', text: 'Chicken wrap with vegetables, hummus, and a piece of fruit' },
        { label: 'Dinner', text: 'Salmon, rice, and roasted vegetables' },
        { label: 'Snack 1', text: 'Apple with peanut butter' },
        {
          label: 'Optional snack 2',
          text: 'Cottage cheese or a protein shake if needed to help reach protein intake'
        }
      ],
      practicalNote:
        'This type of intake may suit a smaller adult, someone in a mild calorie deficit, or someone who simply does better with a lighter overall intake. The goal is still to keep meals balanced and protein reasonably consistent across the day.',
      footerNote:
        'This is an example structure only. Food choices, portions, and macro distribution can vary widely while still fitting the same daily calorie target.'
    },
    {
      title: '2000 kcal example day',
      shortLabel: 'Balanced maintenance-style example',
      calories: 2000,
      macroSplit: '45% carbohydrate / 25% protein / 30% fat',
      proteinG: 125,
      carbsG: 225,
      fatsG: 67,
      mealStructure: ['breakfast', 'lunch', 'dinner', '2 snacks'],
      exampleDay: [
        { label: 'Breakfast', text: 'Eggs on toast with fruit and yogurt' },
        {
          label: 'Lunch',
          text: 'Turkey or chicken rice bowl with mixed vegetables and olive oil-based dressing'
        },
        {
          label: 'Dinner',
          text: 'Lean beef or tofu stir-fry with rice or noodles and vegetables'
        },
        { label: 'Snack 1', text: 'Greek yogurt and granola' },
        { label: 'Snack 2', text: 'Banana with nuts, or crackers with cheese' }
      ],
      practicalNote:
        'For many adults, this is a useful example of what a moderate, balanced day can look like. It usually means regular meals, enough food to support daily activity, and enough protein to make the day feel relevant to strength and exercise goals.',
      footerNote:
        'This is an example structure only. Food choices, portions, and macro distribution can vary widely while still fitting the same daily calorie target.'
    },
    {
      title: '2400 kcal example day',
      shortLabel: 'Higher-intake active-day example',
      calories: 2400,
      macroSplit: '45% carbohydrate / 25% protein / 30% fat',
      proteinG: 150,
      carbsG: 270,
      fatsG: 80,
      mealStructure: ['breakfast', 'lunch', 'dinner', '2 to 3 snacks'],
      exampleDay: [
        {
          label: 'Breakfast',
          text: 'Oatmeal made with milk, banana, peanut butter, and a side of eggs'
        },
        {
          label: 'Lunch',
          text: 'Chicken sandwich or wrap with potatoes or rice and a side salad'
        },
        {
          label: 'Dinner',
          text: 'Pasta with lean meat sauce or tofu, vegetables, and parmesan'
        },
        { label: 'Snack 1', text: 'Protein shake and fruit' },
        { label: 'Snack 2', text: 'Greek yogurt with cereal or granola' },
        {
          label: 'Optional snack 3',
          text: 'Toast with nut butter, or cheese and crackers'
        }
      ],
      practicalNote:
        'This may be a more appropriate example for a larger adult, a more active person, or someone trying to support gym training, performance, or a gradual increase in intake. Higher calories do not have to mean junk food. They often just mean larger portions and one or two extra eating opportunities.',
      footerNote:
        'This is an example structure only. Food choices, portions, and macro distribution can vary widely while still fitting the same daily calorie target.'
    }
  ],
  comparisonBlock: {
    heading: 'Same structure, different portions',
    body: 'Many calorie targets look similar on paper. The biggest difference is often portion size, snack frequency, and how much carbohydrate or fat is included across the day. In other words, a 2,400 calorie day does not need a completely different style of eating than a 1,600 calorie day. It may simply mean larger portions and one extra snack.'
  },
  practicalTakeaways: {
    heading: 'What to notice from these examples',
    items: [
      'A calorie target becomes easier to follow when it is split into normal meals and snacks',
      'Protein can usually be spread across the day instead of packed into one meal',
      'Exact food choices can vary a lot while still landing near the same calorie target',
      'The best structure is usually the one that feels realistic enough to repeat most weeks'
    ]
  }
};

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
