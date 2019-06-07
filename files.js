// at this file we'll run nodejs command
// jsonlint data/Grocery/grocery.json and other checks
var { resolve } = require('path')

const grocery = resolve(__dirname, './src/data/Grocery/grocery.json')
// @TODO change import & path(change extension of file from js to json)
// add to each variable
const cookingTimes = resolve(__dirname, './src/data/CookingTimes/cookingTimes.json')

const cup1 = resolve(__dirname, './src/data/Cup1/cup1.json')
const halfCup = resolve(__dirname, './src/data/HalfCup/halfCup.json')
const quaterCup = resolve(__dirname, './src/data/QuaterCup/quaterCup.json')
const cup18 = resolve(__dirname, './src/data/Cup1_8/cup1_8.json')
const cup34 = resolve(__dirname, './src/data/Cup3_4/cup3_4.json')

const dash = resolve(__dirname, './src/data/Dash/dash.json')
const gallon = resolve(__dirname, './src/data/Gallon/gallon.json')
const holiday = resolve(__dirname, './src/data/Holiday/holidays.json')

const allergies = resolve(__dirname, './src/data/Allergy/allergies.json')
const course = resolve(__dirname, './src/data/Course/courses.json')
const cuisine = resolve(__dirname, './src/data/Cuisine/cuisines.json')
const departments = resolve(__dirname, './src/data/Departments/departments.json')
const diet = resolve(__dirname, './src/data/Diet/diets.json')

const ingredients = resolve(__dirname, './src/data/Ingredients/ingredients.json')
const ingredients1 = resolve(__dirname, './src/data/Ingredients/ingredients1.json')
const ingredients3 = resolve(__dirname, './src/data/Ingredients/ingredients3.json')

const favorites = resolve(__dirname, './src/data/Favorites/favorites.json')
const items = resolve(__dirname, './src/data/Items/items.json')

const mealCalendar = resolve(__dirname, './src/data/MealCalendar/mealcalendar.json')
const firstVeganGLMC = resolve(__dirname, './src/data/MealCalendar/First-Vegan-Grocery-List-MC.json')

const measurements = resolve(__dirname, './src/data/Measurement/measurements.json')
const menu = resolve(__dirname, './src/data/Menu/menu.json')

const nutritions = resolve(__dirname, './src/data/Nutrition/nutritions1.json')
const nutritions2 = resolve(__dirname, './src/data/Nutrition/nutritions2.json')

const pinch = resolve(__dirname, './src/data/Pinch/pinch.json')
const pint = resolve(__dirname, './src/data/Pint/pint.json')
const quart = resolve(__dirname, './src/data/Quart/quart.json')

const recipe4 = resolve(__dirname, './src/data/Recipe4/recipe.json')

const tablespoon = resolve(__dirname, './src/data/Tablespoon/tablespoon.json')
const teaspoon = resolve(__dirname, './src/data/Teaspoon/teaspoon.json')
const types = resolve(__dirname, './src/data/Types/types.json')

const users = resolve(__dirname, './src/data/Users/users.json')
const usersGrocery = resolve(__dirname, './src/data/UserGrocery/userGrocery.json')

const ultimateGroceryList = resolve(__dirname, './src/data/Grocery/example/ultimate-gl-from-loopback-server-example.json')
const groceryListWithUserRelations = resolve(__dirname, './src/data/Grocery/example/grocery-with-user-relations.json')

const dbIngredients = resolve(__dirname, './src/data/Ingredients/example/gs-loopback-sample.json')
const recipes = resolve(__dirname, './src/data/Recipe4/recipe.json')
// console.log(path.resolve(__dirname, './data/Grocery/grocery.json'));
const measurementSystem = resolve(__dirname, './src/data/Units/measurementSystems.json')
const generatedMeasurementSystem = resolve(__dirname, './src/data/MeasurementSystem/measurementSystem.json')
const measurementUnits = resolve(__dirname, './src/data/Units/measurementUnits.json')
const generatedMeasurementUnits = resolve(__dirname, './src/data/MeasurementUnits/measurementUnits.json')

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
