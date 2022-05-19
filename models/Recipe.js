const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Recipe = new Schema(
  {
    recipeName: { type: String, required: true },
    recipeImage: { type: String },
    recipeOverview: { type: String, required: true },
    recipeInstructions: { type: String, required: true },
    tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    recipeIngredients: { type: Array },
    fire: { type: Boolean, required: true },
    fireLogo: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Recipe', Recipe)
