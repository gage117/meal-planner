const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/meal-planner', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

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

  }
];

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

// !IMPORTANT: Adjust Schema before running this seed
db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(mmoSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
