const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/meal-planner', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

/* userSeed template:
  {
    username: "",
    email: "",
    password: "",
    recipes: {
      personalRecipes: [
        {
          name: "",
          instructions: "",
          ingredients: [
            {
              name: String,
              quantity: Number,
              unit: String,
            },
          ],
        },
      ],
      siteRecipes: [
        {
            _id: Schema.Types.ObjectId,
        }
      ],
    },
  }
*/

const userSeeds = [
  {
    username: 'user1',
    email: "email@email.com",
    password: "password",
    recipes: {
      personalRecipes: [
        {
          name: "Recipe 1",
          instructions: "Instructions 1",
          ingredients: [
            {
              name: "Ingredient 1",
              quantity: 1,
              unit: "unit 1",
            },
            {
              name: "Ingredient 2",
              quantity: 2,
              unit: "unit 2",
            },
          ],
        },
        {
          name: "Recipe 2",
          instructions: "Instructions 2",
          ingredients: [
            {
              name: "Ingredient 1",
              quantity: 1,
              unit: "unit 1",
            },
            {
              name: "Ingredient 2",
              quantity: 2,
              unit: "unit 2",
            },
          ],
        },
      ],
      siteRecipes: [
        {
          _id: "5b9b8f0f5a2c3d1f9c9e0c5b",
        },
        {
          _id: "5b9b8f0f5a2c3d1f9c9e0c5c",
        },
      ],
    },
  },
  {
    username: 'user2',
    email: "moreemail@mail.com",
    password: "password",
    recipes: {
      personalRecipes: [
        {
          name: "Recipe 1",
          instructions: "Instructions 1",
          ingredients: [
            {
              name: "Ingredient 1",
              quantity: 1,
              unit: "unit 1",
            },
            {
              name: "Ingredient 2",
              quantity: 2,
              unit: "unit 2",
            },
          ],
        },
        {
          name: "Recipe 2",
          instructions: "Instructions 2",
          ingredients: [
            {
              name: "Ingredient 1",
              quantity: 1,
              unit: "unit 1",
            },
            {
              name: "Ingredient 2",
              quantity: 2,
              unit: "unit 2",
            },
          ],
        },
      ],
      siteRecipes: [
        {
          _id: "5b9b8f0f5a2c3d1f9c9e0c5b",
        },
        {
          _id: "5b9b8f0f5a2c3d1f9c9e0c5c",
        },
      ],
    },
  },
];

/* siteRecipeSeed template: 
  {
    name: "",
    instructions: "",
    ingredients: [{
      name: String,
      quantity: Number,
      unit: String
    }],
    tags: [String],
    user: _id: Schema.Types.ObjectId,
  }
*/

const siteRecipeSeeds = [
  {
    name: 'ChickenSimply',
    instructions: '',
    ingredients: [{
        name: 'Chicken',
        quantity: 1,
        unit: 'lb'
      }, {
        name: 'Salt',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Pepper',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Onion',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Red Onions',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Celery',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Black Pepper',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Kale',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Cilantro',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Lime',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Lemon',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Sage',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Coriander',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Horseradish',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Turmeric',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Garlic Cleric',
        quantity: 1,
        unit: 'tsp'
      }
    ],
    tags: ['chicken', 'soup', 'healthy', 'low-calorie', 'low-carb', 'low-fat', 'low-sodium', 'low-sugar'],
    user: { _id: ''},
  },
  {
    name: 'Beef With Soy',
    instructions: '',
    ingredients: [{
        name: 'Beef',
        quantity: 1,
        unit: 'lb'
      }, {
        name: 'Salt',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Pepper',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Onion',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Red Onions',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Celery',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Black Pepper',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Cilantro',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Lime',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Lemon',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Sage',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Turmeric',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Garlic Cleric',
        quantity: 1,
        unit: 'tsp'
      }
    ],
    tags: ['beef', 'healthy', 'low-calorie', 'low-carb', 'low-fat', 'high-protein', 'low-sugar'],
    user: { _id: ''},
  },
  {
    name: "Sausage Bolognese",
    instructions: '',
    ingredients: [{
        name: 'Italian Sausage',
        quantity: 1,
        unit: 'lb'
      }, {
        name: 'Salt',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Pepper',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Onion',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Red Onions',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Black Pepper',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Cilantro',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Sage',
        quantity: 1,
        unit: 'tsp'
      }, {
        name: 'Garlic Cloves',
        quantity: 1,
        unit: ''
      }
    ],
    tags: ['italian', 'sausage', 'healthy', 'low-fat', 'low-sugar'],
    user: { _id: ''}
  }
];

// !IMPORTANT: Adjust Schema before running this seed
const seedDB = async () => {
  try {
    // Seed Users
    await db.User.deleteMany({})
    const userData = await db.User.collection.insertMany(userSeeds)
    console.log(userData)
    console.log('Seeded:', userData.ops.length, 'users')
    // Seed SiteRecipes
    await db.SiteRecipe.deleteMany({})
    // Use seeded user IDs to seed recipes with users
    siteRecipeSeeds[0].user = userData.ops[0]._id
    siteRecipeSeeds[1].user = userData.ops[1]._id
    siteRecipeSeeds[2].user = userData.ops[1]._id
    const data = await db.SiteRecipe.collection.insertMany(siteRecipeSeeds)
    console.log('Seeded:', data.ops.length, 'recipes')
    process.exit(0);
  }
  catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedDB()