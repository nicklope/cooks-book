const db = require('../db')
const Ingredient = require('../models/Ingredient')

const main = async () => {
  const ingredients = [
    { ingredientName: 'broccoli' },
    { ingredientName: 'shrimp' },
    { ingredientName: 'linguini' },
    { ingredientName: 'garlic' },
    { ingredientName: 'chicken stock' },
    { ingredientName: 'olive oil' },
    { ingredientName: 'red pepper' },
    { ingredientName: 'garlic powder' },
    { ingredientName: 'chardonnay' },
    { ingredientName: 'salmon' },
    { ingredientName: 'sesame oil' },
    { ingredientName: 'soy sauce' },
    { ingredientName: 'black pepper' },
    { ingredientName: 'teriyaki sauce' }
  ]
  await Ingredient.insertMany(ingredients)
  console.log('Here come some ingredients!')
}
const run = async () => {
  await main()
  db.close()
}
run()
