// at this file we'll run nodejs command
// jsonlint data/Grocery/grocery.json and other checks
const { resolve } = require('path');

const dataPath = './data/';

const pathResolver = (path) => resolve(__dirname, dataPath + path);

// @TODO fix it later. it's a total duplicate. Blame Arthur for it

// const dataPath2 = '../generator/projects/FoodComposition/'

// const pathResolver2 = (path) => {
//   return resolve(__dirname, dataPath + path)
// }

// const dataPath = resolve(__dirname, './data/')
const grocery = pathResolver('Grocery/grocery.json');
// @TODO change import & path(change extension of file from js to json)
// add to each variable
const cookingTimes = pathResolver('CookingTimes/cookingTimes.json');

const cup1 = pathResolver('Cup1/cup1.json');
const halfCup = pathResolver('HalfCup/halfCup.json');
const quaterCup = pathResolver('QuaterCup/quaterCup.json');
const cup18 = pathResolver('Cup1_8/cup1_8.json');
const cup34 = pathResolver('Cup3_4/cup3_4.json');

const dash = pathResolver('Dash/dash.json');
const gallon = pathResolver('Gallon/gallon.json');
const holiday = pathResolver('Holiday/holidays.json');

const allergies = pathResolver('Allergy/allergies.json');
const course = pathResolver('Course/courses.json');
const cuisine = pathResolver('Cuisine/cuisines.json');
const departments = pathResolver('Departments/departments.json');
const diet = pathResolver('Diet/diets.json');

const ingredients = pathResolver('Ingredients/ingredients.json');
const ingredients1 = pathResolver('Ingredients/ingredients1.json');
const ingredients3 = pathResolver('Ingredients/ingredients3.json');

const favorites = pathResolver('Favorites/favorites.json');
const items = pathResolver('Items/items.json');

const mealCalendar = pathResolver('MealCalendar/mealcalendar.json');
const firstVeganGLMC = pathResolver('MealCalendar/First-Vegan-Grocery-List-MC.json');

const measurements = pathResolver('Measurement/measurements.json');
const menu = pathResolver('Menu/menu.json');

const nutritions = pathResolver('Nutrition/nutritions1.json');
const nutritions2 = pathResolver('Nutrition/nutritions2.json');

const pinch = pathResolver('Pinch/pinch.json');
const pint = pathResolver('Pint/pint.json');
const quart = pathResolver('Quart/quart.json');

const recipe4 = pathResolver('Recipe4/recipe.json');

const tablespoon = pathResolver('Tablespoon/tablespoon.json');
const teaspoon = pathResolver('Teaspoon/teaspoon.json');
const types = pathResolver('Types/types.json');

const users = pathResolver('Users/users.json');
const usersGrocery = pathResolver('UserGrocery/userGrocery.json');

const ultimateGroceryList = pathResolver('Grocery/example/ultimate-gl-from-loopback-server-example.json');
const groceryListWithUserRelations = pathResolver('Grocery/example/grocery-with-user-relations.json');

const dbIngredients = pathResolver('Ingredients/example/gs-loopback-sample.json');
const recipes = pathResolver('Recipe4/recipe.json');
const measurementSystem = pathResolver('Units/measurementSystems.json');
const generatedMeasurementSystem = pathResolver('MeasurementSystem/measurementSystem.json');
const measurementUnits = pathResolver('Units/measurementUnits.json');
const generatedMeasurementUnits = pathResolver('MeasurementUnits/measurementUnits.json');

// Need to change path when json files move to src/data/FoodComposition
const foodCompositionFinland = pathResolver('../../generator/projects/FoodComposition/FoodComposition - Finland.json');
const foodCompositionFrance = pathResolver('../../generator/projects/FoodComposition/FoodComposition - France.json');
const foodCompositionGermany = pathResolver('../../generator/projects/FoodComposition/FoodComposition - Germany.json');
const foodCompositionItaly = pathResolver('../../generator/projects/FoodComposition/FoodComposition - Italy.json');
const foodCompositionNetherlands = pathResolver('../../generator/projects/FoodComposition/FoodComposition - Netherlands.json');
const foodCompositionSweden = pathResolver('../../generator/projects/FoodComposition/FoodComposition - Sweden.json');
const foodCompositionUk = pathResolver('../../generator/projects/FoodComposition/FoodComposition - United Kingdom.json');
const foodComposition = pathResolver('../../generator/projects/FoodComposition/FoodComposition.json');

// Need to change path when json files move to src/data/
const derivationCodeDescr = pathResolver('../../generator/projects/USFA/Derivation_Code_Description/Derivation_Code_Description1.json');

const dietAndHealthLabel = pathResolver('DietAndHealthLabel/dietAndHealthLabel.json');
// Food composition
// const FinlandDataSet = pathResolver2('FoodComposition - Finland.json')
// const FranceDataSet = pathResolver2('FoodComposition - France.json')
// const GermanyDataSet = pathResolver2('FoodComposition - Germany.json')
// const ItalyDataSet = pathResolver2('FoodComposition - Italy.json')
// const NetherlandsDataSet = pathResolver2('FoodComposition - Netherlands.json')
// const SwedenDataSet = pathResolver2('FoodComposition - Sweden.json')
// const UnitedKingdomDataSet = pathResolver2('FoodComposition - United Kingdom.json')
// const FullDataSet = pathResolver2('FoodComposition.json')

module.exports = {
  grocery,
  allergies,
  course,
  cuisine,
  departments,
  derivationCodeDescr,
  diet,
  dietAndHealthLabel,
  ingredients,
  ingredients1,
  ingredients3,
  favorites,
  foodCompositionFinland,
  foodCompositionFrance,
  foodCompositionGermany,
  foodCompositionItaly,
  foodCompositionNetherlands,
  foodCompositionSweden,
  foodCompositionUk,
  foodComposition,
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
  types,

// Food composition
//   FinlandDataSet,
//   FranceDataSet,
//   GermanyDataSet,
//   ItalyDataSet,
//   NetherlandsDataSet,
//   SwedenDataSet,
//   UnitedKingdomDataSet,
//   FullDataSet
};
