import type { CalorieTemplate } from '../types/content';

export const calorieTemplates: CalorieTemplate[] = [
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
];
