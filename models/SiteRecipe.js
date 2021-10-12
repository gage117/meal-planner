const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  mealOfTheDay: {
    type: String
  },
  instructions: {
    type: String,
    required: true
  },
  ingredients: [{
    name: String,
    quantity: Number,
    unit: String
  }],
  servings: {
    type: Number
  },
  tags: [String],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const SiteRecipe = model('SiteRecipe', recipeSchema);

module.exports = SiteRecipe;