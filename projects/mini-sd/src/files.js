// at this file we'll run nodejs command
// jsonlint data/Grocery/grocery.json and other checks
var { resolve } = require('path')

const dataPath = './src/data/'

const pathResolver = (path) => {
  return resolve(__dirname, dataPath + path)
}

// const dataPath = resolve(__dirname, './data/')
const grocery = pathResolver('Grocery/grocery.json')

const departments = pathResolver('Departments/departments.json')

const ingredients = pathResolver('Ingredients/ingredients.json')
const ingredients1 = pathResolver('Ingredients/ingredients1.json')
const ingredients3 = pathResolver('Ingredients/ingredients3.json')

const mealCalendar = pathResolver('MealCalendar/mealcalendar.json')
const firstVeganGLMC = pathResolver('MealCalendar/First-Vegan-Grocery-List-MC.json')

//users
const users = pathResolver('users.json')
// const users = pathResolver('Users/users.json')
//nutritions
// const nutritions1 = pathResolver('Nutrition/nutritions1.json')
// const nutritions2 = pathResolver('Nutrition/nutritions2.json')
const nutritions1 = pathResolver('nutritions1.json')
const nutritions2 = pathResolver('nutritions2.json')

module.exports = {
  grocery,

  departments,

  ingredients,
  ingredients1,
  ingredients3,


  mealCalendar,
  firstVeganGLMC,



  users, nutritions1, nutritions2
}
