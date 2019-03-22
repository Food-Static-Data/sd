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
import favourites from '/Ingredients/favorites.json'
import items from '/Ingredients/items.json'
// @TODO import sub-stuff like items, etc in order to make fetch works well....

// will crash here, because we need to import another file as well
import mealCalendar from '~/MealCalendar/mealcalendar.json'
import firstVeganGLMC from '~/MealCalendar/First-Vegan-Grocery-List-MC.json'
import measurements from '~/Measurement/measurements.json'

import menu from '~/Menu/menu.json'

import nutritions from '~/Nutrition/nutritions1.json'

import users from '~/Users/users.json'

import ultimateGroceryList from '~/Grocery/example/ultimate-gl-from-loopback-server-example'

export default {
  // file
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
  favourites,
  items,
  mealCalendar,
  firstVeganGLMC,
  measurements,
  menu,
  nutritions,
  users,
  ultimateGroceryList
}
