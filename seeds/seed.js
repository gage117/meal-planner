const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/meal-planner', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const recipe = {
  name: 'Recipe',
  ingredients: [
    {
      name: 'Ingredient 1',
      amount: '1',
      unit: 'unit',
    },
    {
      name: 'Ingredient 2',
      amount: '2',
      unit: 'unit',
    },
  ],
  instructions: [
    {
      step: 'Step 1',
      description: 'Description',
    },
    {
      step: 'Step 2',
      description: 'Description',
    },
  ],
};



// !IMPORTANT: Adjust Schema before running this seed
db.Mmo.deleteMany({})
  .then(() => db.Mmo.collection.insertMany(mmoSeed))
  .then((data) => {
    console.log(data.result.n + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
