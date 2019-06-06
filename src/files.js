// at this file we'll run nodejs command
// jsonlint data/Grocery/grocery.json and other checks
var { resolve } = require('path')

const dataPath = resolve(__dirname, './data')
const grocery = dataPath + 'Grocery/grocery.json'
// @TODO change import & path(change extension of file from js to json)
// add to each variable
const cookingTimes = dataPath + 'CookingTimes/cookingTimes.json'

const cup1 = dataPath + 'Cup1/cup1.json'
const halfCup = dataPath + 'HalfCup/halfCup.json'
const quaterCup = dataPath + 'QuaterCup/quaterCup.json'
const cup18 = dataPath + 'Cup1_8/cup1_8.json'
const cup34 = dataPath + 'Cup3_4/cup3_4.json'

const dash = dataPath + 'Dash/dash.json'
const gallon = dataPath + 'Gallon/gallon.json'
const holiday = dataPath + 'Holiday/holidays.json'

const allergies = dataPath + 'Allergy/allergies.json'
const course = dataPath + 'Course/courses.json'
const cuisine = dataPath + 'Cuisine/cuisines.json'
const departments = dataPath + 'Departments/departments.json'
const diet = dataPath + 'Diet/diets.json'

const ingredients = dataPath + 'Ingredients/ingredients.json'
const ingredients1 = dataPath + 'Ingredients/ingredients1.json'
const ingredients3 = dataPath + 'Ingredients/ingredients3.json'

const favorites = dataPath + 'Favorites/favorites.json'
const items = dataPath + 'Items/items.json'

const mealCalendar = dataPath + 'MealCalendar/mealcalendar.json'
const firstVeganGLMC = dataPath + 'MealCalendar/First-Vegan-Grocery-List-MC.json'

const measurements = dataPath + 'Measurement/measurements.json'
const menu = dataPath + 'Menu/menu.json'

const nutritions = dataPath + 'Nutrition/nutritions1.json'
const nutritions2 = dataPath + 'Nutrition/nutritions2.json'

const pinch = dataPath + 'Pinch/pinch.json'
const pint = dataPath + 'Pint/pint.json'
const quart = dataPath + 'Quart/quart.json'

const recipe4 = dataPath + 'Recipe4/recipe.json'

const tablespoon = dataPath + 'Tablespoon/tablespoon.json'
const teaspoon = dataPath + 'Teaspoon/teaspoon.json'
const types = dataPath + 'Types/types.json'

const users = dataPath + 'Users/users.json'
const usersGrocery = dataPath + 'UserGrocery/userGrocery.json'

const ultimateGroceryList = dataPath + 'Grocery/example/ultimate-gl-from-loopback-server-example.json'
const groceryListWithUserRelations = dataPath + 'Grocery/example/grocery-with-user-relations.json'

const dbIngredients = dataPath + 'Ingredients/example/gs-loopback-sample.json'
const recipes = dataPath + 'Recipe4/recipe.json'
const measurementSystem = dataPath + 'Units/measurementSystems.json'
const generatedMeasurementSystem = dataPath + 'MeasurementSystem/measurementSystem.json'
const measurementUnits = dataPath + 'Units/measurementUnits.json'
const generatedMeasurementUnits = dataPath + 'MeasurementUnits/measurementUnits.json'

module.exports = {
  grocery,
  allergies,
  course,
  cuisine,
  departments,
  diet,
  ingredients,
  ingredients1,
  ingredients3,
  favorites,
  mealCalendar,
  firstVeganGLMC,
  measurements,
  menu,
  nutritions,
  nutritions2,
  usersGrocery,
  ultimateGroceryList,
  groceryListWithUserRelations,
  dbIngredients,
  recipes,
  items,
  users,
  measurementSystem,
  measurementUnits,
  generatedMeasurementSystem,
  generatedMeasurementUnits,
  cookingTimes,
  cup1,
  halfCup,
  quaterCup,
  cup18,
  cup34,
  dash,
  gallon,
  holiday,
  pinch,
  pint,
  quart,
  recipe4,
  tablespoon,
  teaspoon,
  types
}
