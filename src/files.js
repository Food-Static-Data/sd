// @TODO maybe later we'll just have an index file, in order to simplify import logic?
// looks like rollup has a good codegen features

// import { version } from '../package.json'

// @TODO should we use .json in import?

import allergies from '~/Allergy/allergies.json'

import course from '~/Course/courses.json'
import cuisine from '~/Cuisine/cuisines.json'
import departments from '~/Departments/departments.json'
import diet from '~/Diet/diets.json'
import grocery from '~/Grocery/grocery.json'
import holiday from '~/Holiday/holidays.json'

// will crash here, because we have a few ingredients packs...
import ingredients from '~/Ingredients/ingredients.json'
import ingredients1 from '~/Ingredients/ingredients1.json'
import ingredients3 from '~/Ingredients/ingredients3.json'

import favorites from '~/Favorites/favorites.json'
import items from '~/Items/items.json'
// @TODO import sub-stuff like items, etc in order to make fetch works well....

// will crash here, because we need to import another file as well
import mealCalendar from '~/MealCalendar/mealcalendar.json'
import firstVeganGLMC from '~/MealCalendar/First-Vegan-Grocery-List-MC.json'
import measurements from '~/Measurement/measurements.json'

import menu from '~/Menu/menu.json'

import nutritions from '~/Nutrition/nutritions1.json'
import nutritions2 from '~/Nutrition/nutritions2.json'

import users from '~/Users/users.json'
import userGrocery from '~/UserGrocery/userGrocery.json'

import ultimateGroceryList from '~/Grocery/example/ultimate-gl-from-loopback-server-example.json'
import groceryListWithUserRelations from '~/Grocery/example/grocery-with-user-relations.json'
import dbIngredients from '~/Ingredients/example/gs-loopback-sample.json'

import recipes from '~/Recipe4/recipe.json'
import measurementSystems from '~/Units/measurementSystems.json'
import measurementUnits from '~/Units/measurementUnits.json'
import generatedMeasurementSystem from '~/MeasurementSystem/measurementSystem.json'
import generatedMeasurementUnits from '~/MeasurementUnits/measurementUnits.json'

import cooking_times from '~/Cooking_times/cooking_times.json'

import cup1 from '~/Cup1/cup1.json'
import cup1_2 from '~/Cup1_2/cup1_2.json'
import cup1_4 from '~/Cup1_4/cup1_4.json'
import cup1_8 from '~/Cup1_8/cup1_8.json'
import cup3_4 from '~/Cup3_4/cup3_4.json'
import dash from '~/Dash/dash.json'
import gallon1 from '~/Gallon1/gallon1.json'
import pinch from '~/Pinch/pinch.json'
import pint1 from '~/Pint1/pint1.json'
import quart1 from '~/Quart1/quart1.json'
import tablespoon_1 from '~/Tablespoon_1/tablespoon_1.json'
import teaspoon_1 from '~/Teaspoon_1/teaspoon_1.json'

export default {

  allergies,

  course,
  cuisine,
  departments,
  diet,
  grocery,
  holiday,
  ingredients,
  ingredients1,
  ingredients3,
  favorites,
  items,
  mealCalendar,
  firstVeganGLMC,
  measurements,
  menu,
  recipes,
  nutritions,
  nutritions2,
  users,
  userGrocery,
  ultimateGroceryList,
  groceryListWithUserRelations,
  dbIngredients,
  recipes,
  measurementSystems,
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
  pinch,
  pint1,
  quart1,
  tablespoon_1,
  teaspoon_1
}
