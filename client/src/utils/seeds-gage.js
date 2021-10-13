const seeds = {
  breakfasts: [
    {
      name: "French Toast",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Breakfast",
      ingredients: [
        {
          name: "Bread",
          quantity: 4,
          unit: "slices",
        },
        {
          name: "Eggs",
          quantity: 2,
          unit: "",
        },
        {
          name: "Milk",
          quantity: .33,
          unit: "cup",
        },
        {
          name: "Vanilla",
          quantity: .25,
          unit: "tsp",
        },
        {
          name: "Cinnamon",
          quantity: 1,
          unit: "tsp",
        }
      ],
      tags: [
        "egg",
        "french toast",
        "cinnamon",
      ],
      user: { _id: "" },
    }
  ],
  lunches: [
    {
      name: "Caesar Salad",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Lunch",
      ingredients: [
        {
          name: "Cubed Chicken",
          quantity: 6,
          unit: "oz",
        },
        {
          name: "Caesar Dressing",
          quantity: .33,
          unit: "cup",
        },
        {
          name: "Olive Oil",
          quantity: 1,
          unit: "tsp",
        },
        {
          name: "Romaine Hearts",
          quantity: 1,
          unit: "",
        },
        {
          name: "Parmesan Cheese",
          quantity: .25,
          unit: "cup",
        },
        {
          name: "Black Pepper",
          quantity: 1,
          unit: "tsp",
        }
      ],
      servings: 3,
      tags: [
        "chicken",
        "caesar",
        "salad",
        "healthy",
        "low-calorie",
        "low-carb",
      ],
      user: { _id: "" },
    }
  ],
  dinners: [
    {
      name: "Steak with Sherry Shallot Sauce, Roasted Potatoes, and Seared Veggies",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Dinner",
      ingredients: [
        {
          name: "Steak",
          quantity: 1,
          unit: "lb",
        },
        {
          name: "Potatoes",
          quantity: 3,
          unit: "",
        },
        {
          name: "Broccoli",
          quantity: 1.5,
          unit: "crowns",
        },
        {
          name: "Shallot",
          quantity: 1,
          unit: "",
        },
        {
          name: "Sherry Wine",
          quantity: 5,
          unit: "tsp",
        },
        {
          name: "Beef Stock",
          quantity: 5,
          unit: "tsp",
        },
        {
          name: "Sour Cream",
          quantity: 2,
          unit: "tbsp",
        },
        {
          name: "Vegetable Oil",
          quantity: 4,
          unit: "tsp",
        },
        {
          name: "Olive Oil",
          quantity: 7,
          unit: "tsp",
        },
        {
          name: "Butter",
          quantity: 1,
          unit: "tbsp",
        },
        {
          name: "Black Pepper"
        },
        {
          name: "Salt"
        },
      ],
      tags: [
        "steak",
        "potatoes",
        "broccoli",
        "shallot",
        "low-fat",
      ],
      user: { _id: "" },
    },
    {
      name: "Char Siu Pork",
      instructions: [
        "Adjust rack to middle position and preheat oven to 425 degrees. In a small bowl, combine hoisin, ketchup, half the brown sugar, and 1 tsp vinegar (2 tsp for 4 servings). Pat pork dry with paper towels and season with salt and pepper. Place on a lightly oiled baking sheet. Roast until almost cooked through, 18-20 minutes.",
        "Once pork is almost cooked through, remove baking sheet from oven. Heat broiler to high or oven to 500 degrees. Brush pork with a layer of hoisin glaze (save the rest for serving). Broil or roast until pork is cooked through and glaze is tacky and lightly charred, 2-3 minutes more. Set aside on a cutting board to rest.",
        "Thinly slice pork crosswise. Drizzle pork with reserved hoisin glaze. Garnish with sesame seeds as you like."
      ],
      mealOfTheDay: "Dinner",
      ingredients: [
        {
          name: "Pork Tenderloin",
          quantity: 12,
          unit: "oz",
        },
        {
          name: "Hoisin Sauce",
          quantity: 2,
          unit: "tbsp",
        },
        {
          name: "Ketchup",
          quantity: 2,
          unit: "tbsp",
        },
        {
          name: "Brown Sugar",
          quantity: .5,
          unit: "tbsp",
        },
        {
          name: "White Vinegar",
          quantity: 1,
          unit: "tsp",
        },
        {
          name: "Sesame Seeds",
          quantity: 1,
          unit: "tbsp",
        },
        {
          name: "Vegetable Oil",
          quantity: 1,
          unit: "tbsp",
        }
      ],
      tags: [
        "pork",
        "hoisin"
      ],
      user: { _id: "" },
    },
    {
      name: "Poblano Beef Tacos with Lime Crema",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Dinner",
      ingredients: [
        {
          name: "Beef",
          quantity: 10,
          unit: "oz",
        },
        {
          name: "Red Onion",
          quantity: 1,
          unit: "",
        },
        {
          name: "Poblano Pepper",
          quantity: 1,
          unit: "",
        },
        {
          name: "Lime",
          quantity: 1,
          unit: "",
        },
        {
          name: "Sour Cream",
          quantity: 4,
          unit: "tbsp",
        },
        {
          name: "Chipotle Powder",
          quantity: 1,
          unit: "tsp",
        },
        {
          name: "Flour Tortillas",
          quantity: 6,
          unit: "",
        },
        {
          name: "Cheese",
          quantity: .25,
          unit: "cup",
        },
        {
          name: "Vegetable Oil",
          quantity: 1,
          unit: "tsp",
        }
      ],
      tags: [
        "beef",
        "tacos",
        "chipotle",
        "lime",
        "low-fat",
      ],
      user: { _id: "" },
    },
  ],
  snacks: [
    {
      name: "Hard Boiled Eggs",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Snack",
      ingredients: [
        {
          name: "Eggs",
          quantity: 4,
          unit: "",
        }
      ],
      tags: [
        "eggs",
        "healthy",
        "low-calorie",
        "low-carb",
        "low-fat",
      ],
      user: { _id: "" },
    },
    {
      name: "Beef Jerky",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Snack",
      ingredients: [
        {
          name: "Beef jerky",
          quantity: 2,
          unit: "oz",
        }
      ],
      tags: [
        "meat",
        "vegan",
        "low-carb",
      ],
      user: { _id: "" },
    },
  ]
};

const recipeSeeds = [
  ...seeds.breakfasts,
  ...seeds.lunches,
  ...seeds.dinners,
  ...seeds.snacks,
]

module.exports = recipeSeeds;