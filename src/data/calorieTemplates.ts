import type { CalorieTemplate } from '../types/content';

export const calorieTemplates: CalorieTemplate[] = [
  {
    id: '1600-kcal-example-day',
    title: '1600 kcal example day',
    shortLabel: 'Balanced lower-calorie example',
    calories: 1600,
    macroSplit: {
      carbsPercent: 40,
      proteinPercent: 30,
      fatPercent: 30
    },
    macros: {
      proteinGrams: 120,
      carbsGrams: 160,
      fatGrams: 53
    },
    mealStructure: ['breakfast', 'lunch', 'dinner', '1 to 2 snacks'],
    meals: {
      breakfast: 'Greek yogurt bowl with berries, oats, and chia seeds',
      lunch: 'Chicken wrap with vegetables, hummus, and a piece of fruit',
      dinner: 'Salmon, rice, and roasted vegetables',
      snack1: 'Apple with peanut butter',
      snack2: 'Cottage cheese or a protein shake if needed to help reach protein intake'
    },
    practicalNote:
      'This type of intake may suit a smaller adult, someone in a mild calorie deficit, or someone who simply does better with a lighter overall intake. The goal is still to keep meals balanced and protein reasonably consistent across the day.',
    footerNote:
      'This is an example structure only. Food choices, portions, and macro distribution can vary widely while still fitting the same daily calorie target.'
  },
  {
    id: '2000-kcal-example-day',
    title: '2000 kcal example day',
    shortLabel: 'Balanced maintenance-style example',
    calories: 2000,
    macroSplit: {
      carbsPercent: 45,
      proteinPercent: 25,
      fatPercent: 30
    },
    macros: {
      proteinGrams: 125,
      carbsGrams: 225,
      fatGrams: 67
    },
    mealStructure: ['breakfast', 'lunch', 'dinner', '2 snacks'],
    meals: {
      breakfast: 'Eggs on toast with fruit and yogurt',
      lunch: 'Turkey or chicken rice bowl with mixed vegetables and olive oil-based dressing',
      dinner: 'Lean beef or tofu stir-fry with rice or noodles and vegetables',
      snack1: 'Greek yogurt and granola',
      snack2: 'Banana with nuts, or crackers with cheese'
    },
    practicalNote:
      'For many adults, this is a useful example of what a moderate, balanced day can look like. It usually means regular meals, enough food to support daily activity, and enough protein to make the day feel relevant to strength and exercise goals.',
    footerNote:
      'This is an example structure only. Food choices, portions, and macro distribution can vary widely while still fitting the same daily calorie target.'
  },
  {
    id: '2400-kcal-example-day',
    title: '2400 kcal example day',
    shortLabel: 'Higher-intake active-day example',
    calories: 2400,
    macroSplit: {
      carbsPercent: 45,
      proteinPercent: 25,
      fatPercent: 30
    },
    macros: {
      proteinGrams: 150,
      carbsGrams: 270,
      fatGrams: 80
    },
    mealStructure: ['breakfast', 'lunch', 'dinner', '2 to 3 snacks'],
    meals: {
      breakfast: 'Oatmeal made with milk, banana, peanut butter, and a side of eggs',
      lunch: 'Chicken sandwich or wrap with potatoes or rice and a side salad',
      dinner: 'Pasta with lean meat sauce or tofu, vegetables, and parmesan',
      snack1: 'Protein shake and fruit',
      snack2: 'Greek yogurt with cereal or granola',
      snack3: 'Toast with nut butter, or cheese and crackers'
    },
    practicalNote:
      'This may be a more appropriate example for a larger adult, a more active person, or someone trying to support gym training, performance, or a gradual increase in intake. Higher calories do not have to mean junk food. They often just mean larger portions and one or two extra eating opportunities.',
    footerNote:
      'This is an example structure only. Food choices, portions, and macro distribution can vary widely while still fitting the same daily calorie target.'
  }
];
