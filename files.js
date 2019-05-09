// at this file we'll run nodejs command
// jsonlint data/Grocery/grocery.json and other checks
var path = require('path')

const grocery = path.resolve(__dirname, './src/data/Grocery/grocery.json')
// @TODO change import & path(change extension of file from js to json)
// add to each variable 
const cooking_times = path.resolve(__dirname, './src/data/Cooking_times/cooking_times.json')

const cup1 = path.resolve(__dirname, './src/data/Cup1/cup1.json')
const cup1_2 = path.resolve(__dirname, './src/data/Cup1_2/cup1_2.json')
const cup1_4 = path.resolve(__dirname, './src/data/Cup1_4/cup1_4.json')
const cup1_8 = path.resolve(__dirname, './src/data/Cup1_8/cup1_8.json')
const cup3_4 = path.resolve(__dirname, './src/data/Cup3_4/cup3_4.json')

const dash = path.resolve(__dirname, './src/data/Dash/dash.json')
const gallon1 = path.resolve(__dirname, './src/data/Gallon1/gallon1.json')
const holiday = path.resolve(__dirname, './src/data/Holiday/holidays.json')

const allergies = path.resolve(__dirname, './src/data/Allergy/allergies.json')
const course = path.resolve(__dirname, './src/data/Course/courses.json')
const cuisine = path.resolve(__dirname, './src/data/Cuisine/cuisines.json')
const departments = path.resolve(__dirname, './src/data/Departments/departments.json')
const diet = path.resolve(__dirname, './src/data/Diet/diets.json')

const ingredients = path.resolve(__dirname, './src/data/Ingredients/ingredients.json')
const ingredients1 = path.resolve(__dirname, './src/data/Ingredients/ingredients1.json')
const ingredients3 = path.resolve(__dirname, './src/data/Ingredients/ingredients3.json')

const favorites = path.resolve(__dirname, './src/data/Favorites/favorites.json')
const items = path.resolve(__dirname, './src/data/Items/items.json')

const mealCalendar = path.resolve(__dirname, './src/data/MealCalendar/mealcalendar.json')
const firstVeganGLMC = path.resolve(__dirname, './src/data/MealCalendar/First-Vegan-Grocery-List-MC.json')

const measurements = path.resolve(__dirname, './src/data/Measurement/measurements.json')
const menu = path.resolve(__dirname, './src/data/Menu/menu.json')

const nutritions = path.resolve(__dirname, './src/data/Nutrition/nutritions1.json')
const nutritions2 = path.resolve(__dirname, './src/data/Nutrition/nutritions2.json')

const pinch = path.resolve(__dirname, './src/data/Pinch/pinch.json')
const pint1 = path.resolve(__dirname, './src/data/Pint1/pint1.json')
const quart1 = path.resolve(__dirname, './src/data/Quart1/quart1.json')

const recipe4 = path.resolve(__dirname, './src/data/Recipe4/recipe.json')

const tablespoon_1 = path.resolve(__dirname, './src/data/Tablespoon_1/tablespoon_1.json')
const teaspoon_1 = path.resolve(__dirname, './src/data/Teaspoon_1/teaspoon_1.json')
const types = path.resolve(__dirname, './src/data/Types/types.json')

const users = path.resolve(__dirname, './src/data/Users/users.json')
const usersGrocery = path.resolve(__dirname, './src/data/UserGrocery/userGrocery.json')

const ultimateGroceryList = path.resolve(__dirname, './src/data/Grocery/example/ultimate-gl-from-loopback-server-example.json')
const groceryListWithUserRelations = path.resolve(__dirname, './src/data/Grocery/example/grocery-with-user-relations.json')

const dbIngredients = path.resolve(__dirname, './src/data/Ingredients/example/gs-loopback-sample.json')
const recipes = path.resolve(__dirname, './src/data/Recipe4/recipe.json')
// console.log(path.resolve(__dirname, './data/Grocery/grocery.json'));
const measurementSystem = path.resolve(__dirname, './src/data/Units/measurementSystems.json')
const generatedMeasurementSystem = path.resolve(__dirname, './src/data/MeasurementSystem/measurementSystem.json')
const measurementUnits = path.resolve(__dirname, './src/data/Units/measurementUnits.json')
const generatedMeasurementUnits = path.resolve(__dirname, './src/data/MeasurementUnits/measurementUnits.json')

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
  cooking_times,
  cup1,
  cup1_2,
  cup1_4,
  cup1_8,
  cup3_4,
  dash,
  gallon1,
  holiday,
  pinch,
  pint1,
  quart1,
  recipe4,
  tablespoon_1,
  teaspoon_1,
  types
}
