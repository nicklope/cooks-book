const mongoose = require('mongoose')
const RecipeSchema = require('./Recipe')
const IngredientSchema = require('./Ingredient')
const TagSchema = require('./Tag')

const Recipe = mongoose.model('Recipe', RecipeSchema)
const Ingredient = mongoose.model('Ingredient', IngredientSchema)
const Tag = mongoose.model('Tag', TagSchema)
module.exports = {
  Recipe,
  Ingredient,
  Tag
}
