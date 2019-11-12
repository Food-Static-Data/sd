// @TODO maybe later we'll just have an index file, in order to simplify import logic?
// looks like rollup has a good codegen features

// import { version } from '../package.json'

// @TODO should we use .json in import?

import departments from "~/Departments/departments.json";
import diet from "~/Diet/diets.json";
import grocery from "~/Grocery/grocery.json";

// will crash here, because we have a few ingredients packs...
import ingredients from "~/Ingredients/ingredients.json";
import ingredients1 from "~/Ingredients/ingredients1.json";
import ingredients3 from "~/Ingredients/ingredients3.json";

import favorites from "~/Favorites/favorites.json";
import items from "~/Items/items.json";
// @TODO import sub-stuff like items, etc in order to make fetch works well....

// will crash here, because we need to import another file as well
import mealCalendar from "~/MealCalendar/mealcalendar.json";
import firstVeganGLMC from "~/MealCalendar/First-Vegan-Grocery-List-MC.json";
import measurements from "~/Measurement/measurements.json";

import menu from "~/Menu/menu.json";
import users from "~/Users/users.json";
import userGrocery from "~/UserGrocery/userGrocery.json";

import ultimateGroceryList from "~/Grocery/example/ultimate-gl-from-loopback-server-example.json";
import groceryListWithUserRelations from "~/Grocery/example/grocery-with-user-relations.json";
import dbIngredients from "~/Ingredients/example/gs-loopback-sample.json";

import recipes from "~/Recipe4/recipe.json";
import measurementSystems from "~/Units/measurementSystems.json";
import measurementUnits from "~/Units/measurementUnits.json";
import generatedMeasurementSystem from "~/MeasurementSystem/measurementSystem.json";
import generatedMeasurementUnits from "~/MeasurementUnits/measurementUnits.json";

export default {
  departments,
  diet,
  grocery,
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
  users,
  userGrocery,
  ultimateGroceryList,
  groceryListWithUserRelations,
  dbIngredients,
  measurementSystems,
  measurementUnits,
  generatedMeasurementSystem,
  generatedMeasurementUnits
};
