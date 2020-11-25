const getResponse = require('../lib/get-response')
const secretTurkeyRecipe = require('../data/turkey-recipe.json')

/**
 * Converts kg and g to lbs based on user input.
 * Throws error if an invalid unit was passed.
 *
 * @param {string} input User's input
 */
const convertWeightToLbs = (input) => {
  const amount = parseInt(input.replace(/[^0-9]/g, '') || '0')
  const unit = input.toLowerCase().replace(/[^a-z]/g, '')

  if (unit === '' || unit === 'lb' || unit === 'lbs' || unit === 'pounds') return amount
  if (unit === 'kg' || unit === 'kilo' || unit === 'kilograms') return amount * 2.20462262
  if (unit === 'g' || unit === 'gram' || unit === 'grams') return amount * 0.00220462262
  throw new Error('Unknown unit: ' + unit)
}

/**
 * Takes the weight of the turkey, and calcualtes the
 *  ingredients based on the weight (in lbs)
 *
 * @param {number} weight The weight of the turkey in lbs!
 */
const calculateTurkeyRecipe = (weight) => {
  const calculatedRecipe = {}
  Object.keys(secretTurkeyRecipe).forEach(key => {
    const ingredient = secretTurkeyRecipe[key]
    const amount = ingredient.amount * weight
    const unit = ingredient.unit ? (amount < 1 ? ingredient.unit.replace(/s$/, '') : ingredient.unit) : ''

    calculatedRecipe[key] = `${amount} ${unit}`.trim()
  })

  return calculatedRecipe
}

module.exports = async function (context, req) {
  try {
    const { weight } = req.params
    if (!weight) throw new Error('No weight was provided! Please provide a weight as the last route parameter like this: /turkey/2lbs')

    const weightInLbs = convertWeightToLbs(weight)

    context.log(`Calculating turkey recipe - input weight of ${weight} is the same as ${weightInLbs} lbs`)

    const calculatedRecipe = calculateTurkeyRecipe(weightInLbs)
    context.res = getResponse(calculatedRecipe)
  } catch (error) {
    context.res = getResponse({ error: error.message }, 400)
  }
}
