// at this file we'll run nodejs command
// jsonlint data/Grocery/grocery.json and other checks
var path = require('path')

const groceryFilePath = path.resolve(__dirname, './src/data/Grocery/grocery.json')
// @TODO change import & path(change extension of file from js to json)
// add to each variable FilePath
const {
  frenchBeans,
  sprouts,
  jacketPotato,
  sweetPotato,
  kale,
  leek,
  broccoli,
  carrots,
  mushrooms,
  onions_shallots,
  parsnips,
  peppers,
  marrow_squash,
  sweetcorn,
  courgettes
} = path.resolve(__dirname, './src/data/Cooking_times/cooking_times.js')

const cup1 = path.resolve(__dirname, './src/data/Cup1/cup1.js')
const cup1_2 = path.resolve(__dirname, './src/data/Cup1_2/cup1_2.js')
const cup1_4 = path.resolve(__dirname, './src/data/Cup1_4/cup1_4.js')
const cup1_8 = path.resolve(__dirname, './src/data/Cup1_8/cup1_8.js')
const cup3_4 = path.resolve(__dirname, './src/data/Cup3_4/cup3_4.js')

const dash = path.resolve(__dirname, './src/data/Dash/dash.js')
const gallon1 = path.resolve(__dirname, './src/data/Gallon1/gallon1.js')
const holiday = path.resolve(__dirname, './src/data/Holiday/holiday.js')

const allergiesFilePath = path.resolve(__dirname, './src/data/Allergy/allergies.json')
const courseFilePath = path.resolve(__dirname, './src/data/Course/courses.json')
const cuisineFilePath = path.resolve(__dirname, './src/data/Cuisine/cuisines.json')
const departmentsFilePath = path.resolve(__dirname, './src/data/Departments/departments.json')
const dietFilePath = path.resolve(__dirname, './src/data/Diet/diets.json')

const ingredientsFilePath = path.resolve(__dirname, './src/data/Ingredients/ingredients.json')
const ingredients1FilePath = path.resolve(__dirname, './src/data/Ingredients/ingredients1.json')
const ingredients3FilePath = path.resolve(__dirname, './src/data/Ingredients/ingredients3.json')

const favoritesFilePath = path.resolve(__dirname, './src/data/Favorites/favorites.json')
const itemsFilePath = path.resolve(__dirname, './src/data/Items/items.json')

const mealCalendarFilePath = path.resolve(__dirname, './src/data/MealCalendar/mealcalendar.json')
const firstVeganGLMCFilePath = path.resolve(__dirname, './src/data/MealCalendar/First-Vegan-Grocery-List-MC.json')

const measurementsFilePath = path.resolve(__dirname, './src/data/Measurement/measurements.json')
const menuFilePath = path.resolve(__dirname, './src/data/Menu/menu.json')

const nutritionsFilePath = path.resolve(__dirname, './src/data/Nutrition/nutritions1.json')
const nutritions2FilePath = path.resolve(__dirname, './src/data/Nutrition/nutritions2.json')

const pinch = path.resolve(__dirname, './src/data/Pinch/pinch.js')
const pint1 = path.resolve(__dirname, './src/data/Pint1/pint1.js')
const quart1 = path.resolve(__dirname, './src/data/Quart1/quart1.js')

const recipe4 = path.resolve(__dirname, './src/data/Recipe4/recipe.json')

const tablespoon_1 = path.resolve(__dirname, './src/data/Tablespoon_1/tablespoon_1.js')
const teaspoon_1 = path.resolve(__dirname, './src/data/Teaspoon_1/teapoon_1.js')
const types = path.resolve(__dirname, './src/data/Types/types.json')

const usersFilePath = path.resolve(__dirname, './src/data/Users/users.json')
const usersGroceryFilePath = path.resolve(__dirname, './src/data/UserGrocery/userGrocery.json')

const ultimateGroceryListFilePath = path.resolve(__dirname, './src/data/Grocery/example/ultimate-gl-from-loopback-server-example.json')
const groceryListWithUserRelationsFilePath = path.resolve(__dirname, './src/data/Grocery/example/grocery-with-user-relations.json')

const dbIngredientsFilePath = path.resolve(__dirname, './src/data/Ingredients/example/gs-loopback-sample.json')
const recipesFilePath = path.resolve(__dirname, './src/data/Recipe4/recipe.json')
// console.log(path.resolve(__dirname, './data/Grocery/grocery.json'));
const measurementSystemFilePath = path.resolve(__dirname, './src/data/Units/measurementSystems.json')
const generatedMeasurementSystem = path.resolve(__dirname, './src/data/MeasurementSystem/measurementSystem.json')
const measurementUnitsFilePath = path.resolve(__dirname, './src/data/Units/measurementUnits.json')
const generatedMeasurementUnits = path.resolve(__dirname, './src/data/MeasurementUnits/measurementunits.json')

module.exports = {
  groceryFilePath,
  allergiesFilePath,
  courseFilePath,
  cuisineFilePath,
  departmentsFilePath,
  dietFilePath,
  ingredientsFilePath,
  ingredients1FilePath,
  ingredients3FilePath,
  favoritesFilePath,
  mealCalendarFilePath,
  firstVeganGLMCFilePath,
  measurementsFilePath,
  menuFilePath,
  nutritionsFilePath,
  nutritions2FilePath,
  usersGroceryFilePath,
  ultimateGroceryListFilePath,
  groceryListWithUserRelationsFilePath,
  dbIngredientsFilePath,
  recipesFilePath,
  itemsFilePath,
  usersFilePath,
  measurementSystemFilePath,
  measurementUnitsFilePath,
  generatedMeasurementSystem,
  generatedMeasurementUnits,
  frenchBeans,
  sprouts,
  jacketPotato,
  sweetPotato,
  kale,
  leek,
  broccoli,
  carrots,
  mushrooms,
  onions_shallots,
  parsnips,
  peppers,
  marrow_squash,
  sweetcorn,
  courgettes,
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
