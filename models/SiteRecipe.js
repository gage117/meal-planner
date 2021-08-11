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
  instructions: {
    type: String,
    required: true
  },
  ingredients: [{
    name: String,
    quantity: Number,
    unit: String
  }],
  tags: [String],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

const SiteRecipe = model('SiteRecipe', recipeSchema);

module.exports = SiteRecipe;