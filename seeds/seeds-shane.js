const template = {
  breakfasts: [
    {
      name: "Keto Egg Muffins",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Breakfast",
      ingredients: [
        {
          name: "Sweet Potato",
          quantity: 1,
          unit: "",
        },
        {
          name: "Grated Cheddar",
          quantity: .25,
          unit: "cup",
        },
        {
          name: "Bacon",
          quantity: 2,
          unit: "strips",
        },
        {
          name: "Egg",
          quantity: 1,
          unit: "",
        },
        {
          name: "Heavy Whipping Cream",
          quantity: 1,
          unit: "tbsp",
        }
      ],
      tags: [
        "egg",
        "muffins",
        "healthy",
        "low-calorie",
        "low-carb",
        "low-fat",
      ],
      user: { _id: "" },
    },
    {
        name: "Fried Eggs",
        instructions: [
          "Write out step 1",
          "Write out step 2",
          "Write out step 3"
        ],
        mealOfTheDay: "Breakfast",
        ingredients: [
          {
            name: "Egg",
            quantity: 2,
            unit: "",
          },
          {
            name: "Butter",
            quantity: 1,
            unit: "tbsp",
          },
        ],
        tags: [
          "egg",
          "butter",
          "healthy",
          "low-calorie",
          "low-carb",
          "low-fat",
        ],
        user: { _id: "" },
    },
    {
        name: "Omelette",
        instructions: [
          "Write out step 1",
          "Write out step 2",
          "Write out step 3"
        ],
        mealOfTheDay: "Breakfast",
        ingredients: [
          {
            name: "Eggs",
            quantity: 4,
            unit: "",
          },
          {
            name: "Butter",
            quantity: 2.5,
            unit: "tbsp",
          },
          {
            name: "Cheese",
            quantity: 4,
            unit: "oz",
          },
          {
            name: "Bell Pepper (Diced)",
            quantity: 1,
            unit: "",
          },
        ],
        tags: [
          "egg",
          "healthy",
          "low-calorie",
          "low-carb",
          "low-fat",
        ],
        user: { _id: "" },
    },
    {
        name: "Fancy Yogurt",
        instructions: [
          "Write out step 1",
          "Write out step 2",
          "Write out step 3"
        ],
        mealOfTheDay: "Breakfast",
        ingredients: [
          {
            name: "Plain Yogurt",
            quantity: 6,
            unit: "oz",
          },
          {
            name: "Coconut Flakes",
            quantity: 1,
            unit: "oz",
          },
          {
            name: "Blueberries",
            quantity: 2,
            unit: "oz",
          },
          {
            name: "Walnuts",
            quantity: 1,
            unit: "oz",         
          }
        ],
        tags: [
          "yogurt",
          "vegan",
          "healthy",
          "low-calorie",
          "low-carb",
          "low-fat",
          "nuts"
        ],
        user: { _id: "" },
    },
    {
      name: "Egg Bake",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Breakfast",
      ingredients: [
        {
          name: "Egg",
          quantity: 12,
          unit: "",
        },
        {
          name: "Cream Cheese",
          quantity: 8,
          unit: "oz",
        },
        {
          name: "Italian Sausage",
          quantity: 8,
          unit: "oz",
        },
        {
          name: "Riced Caulifower",
          quantity: 8,
          unit: "oz",
        },
        {
          name: "Heavy Whipping Cream",
          quantity: 8,
          unit: "oz",
        }
      ],
      tags: [
        "egg",
        "meal prep",
        "healthy",
        "family size",
        "low-carb",
        "low-fat",
      ],
      user: { _id: "" },
    }
  ],
  lunches: [
    {
      name: "Tuna Lunch Salad",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Lunch",
      ingredients: [
        {
          name: "Tuna (in brine)",
          quantity: 1,
          unit: "can",
        },
        {
          name: "Olive Oil",
          quantity: 1,
          unit: "tsp",
        },
        {
          name: "Spinach",
          quantity: 1,
          unit: "cup",
        },
        {
          name: "Feta Cheese chunks",
          quantity: .25,
          unit: "cup",
        },
        {
          name: "Dijon Mustard",
          quantity: 1,
          unit: "tsp",
        },
        {
          name: "Avocado",
          quantity: 1,
          unit: "tsp",
        }
      ],
      tags: [
        "tuna",
        "salad",
        "healthy",
        "low-calorie",
        "low-carb",
        "low-fat",
      ],
      user: { _id: "" },
    },
    {
        name: "Keto Lettuce Wraps",
        instructions: [
          "Write out step 1",
          "Write out step 2",
          "Write out step 3"
        ],
        mealOfTheDay: "Lunch",
        ingredients: [
          {
            name: "Egg (Hard Boiled)",
            quantity: 2,
            unit: "",
          },
          {
            name: "Avocado",
            quantity: .25,
            unit: "",
          },
          {
            name: "Tomato",
            quantity: .25,
            unit: "",
          },
          {
            name: "Lettuce (Leaf)",
            quantity: 2,
            unit: "",
          },
          {
            name: "Deli Meat",
            quantity: 2,
            unit: "oz",
          },
          {
            name: "Cheese",
            quantity: 4,
            unit: "slice",
          },
          {
            name: "Mayonnaise",
            quantity: 1,
            unit: "tbsp",
          }
        ],
        tags: [
          "lettuce",
          "avocado",
          "healthy",
          "low-calorie",
          "low-carb",
          "low-fat",
          "dairy",
        ],
        user: { _id: "" },
    },
    {
      name: "Bacon Wrapped Asparagus",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Lunch",
      ingredients: [
        {
          name: "Bacon",
          quantity: 6,
          unit: "strips",
        },
        {
          name: "Asparagus",
          quantity: 6,
          unit: "stalks",
        },
      ],
      tags: [
        "bacon",
        "asparagus",
        "low-carb",
      ],
      user: { _id: "" },
    },
    {
      name: "Keto Taquitos",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Lunch",
      ingredients: [
        {
          name: "Provalone",
          quantity: 6,
          unit: "slices",
        },
        {
          name: "Jalapeno",
          quantity: 3,
          unit: "",
        },
        {
          name: "Cream Cheese",
          quantity: 8,
          unit: "oz",
        },
        {
          name: "Bacon",
          quantity: 6,
          unit: "strips",
        },
      ],
      tags: [
        "dairy",
        "spicy",
        "healthy",
        "low-calorie",
        "low-carb",
      ],
      user: { _id: "" },
    }
  ],
  dinners: [
    {
      name: "Baked Salmon",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Dinner",
      ingredients: [
        {
          name: "Salmon",
          quantity: 4,
          unit: "oz",
        },
        {
          name: "Asparagus",
          quantity: 3,
          unit: "oz",
        },
        {
          name: "Parmesan Cheese",
          quantity: .25,
          unit: "cup",
        }
      ],
      tags: [
        "salmon",
        "asparagus",
        "healthy",
        "low-calorie",
        "low-carb",
        "low-fat",
      ],
      user: { _id: "" },
    },
    {
        name: "Keto Chili",
        instructions: [
          "Write out step 1",
          "Write out step 2",
          "Write out step 3"
        ],
        mealOfTheDay: "Dinner",
        ingredients: [
          {
            name: "Garlic",
            quantity: 2,
            unit: "cloves",
          },
          {
            name: "Onion",
            quantity: .5,
            unit: "",
          },
          {
            name: "Ground Beef",
            quantity: 1,
            unit: "lb",
          }
          {
            name: "Diced Tomato",
            quantity: 8,
            unit: "oz",
          }
          {
            name: "Cumin",
            quantity: 1,
            unit: "tsp",
          }
          {
            name: "Paprika",
            quantity: .25,
            unit: "tsp",
          }
          {
            name: "Oregano",
            quantity: .25,
            unit: "tsp",
          }
          {
            name: "Chipotle Powder",
            quantity: .25,
            unit: "tsp",
          }
          {
            name: "Beef Broth",
            quantity: 16,
            unit: "fl oz",
          }
        ],
        tags: [
          "chili",
          "beef",
          "healthy",
          "low-calorie",
          "low-carb",
          "low-fat",
        ],
        user: { _id: "" },
    },
    {
      name: "Meatball Paremesan Casserole",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Dinner",
      ingredients: [
        {
          name: "Ground Beef",
          quantity: 1,
          unit: "lb",
        },
        {
          name: "Ground Sausage",
          quantity: 1,
          unit: "lb",
        },
        {
          name: "Ground Beef",
          quantity: 1,
          unit: "lb",
        }
        {
          name: "Egg",
          quantity: 3,
          unit: "",
        }
        {
          name: "Zucchini (Shredded)",
          quantity: 1,
          unit: "",
        }
        {
          name: "Shredded Cheese",
          quantity: 8,
          unit: "oz",
        }
        {
          name: "Marinara Sauce",
          quantity: 12,
          unit: "oz",
        }
      ],
      tags: [
        "casserole",
        "beef",
        "meal prep",
        "family size",
        "low-carb",
        "low-fat",
      ],
      user: { _id: "" },
    }
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
    {
      name: "String Cheese",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Snack",
      ingredients: [
        {
          name: "String Cheese",
          quantity: 1,
          unit: "",
        }
      ],
      tags: [
        "dairy",
        "healthy",
        "low-calorie",
        "low-carb",
        "low-fat",
        "snack"
      ],
      user: { _id: "" },
    },
    {
      name: "Pork Rinds",
      instructions: [
        "Write out step 1",
        "Write out step 2",
        "Write out step 3"
      ],
      mealOfTheDay: "Snack",
      ingredients: [
        {
          name: "Pork Rinds",
          quantity: 4,
          unit: "oz",
        }
      ],
      tags: [
        "snack",
        "low-carb"
      ],
      user: { _id: "" },
    },
  ]
};