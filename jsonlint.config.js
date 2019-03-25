// at this file we'll run nodejs command
// jsonlint data/Grocery/grocery.json and other checks
var shell = require('shelljs')
var path = require('path')

const groceryFilePath = path.resolve(__dirname, './src/data/Grocery/grocery.json')
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

const nutritionsFilePath = path.resolve(__dirname, './src/data/Nutritions/nutritions1.json')
const nutritions2FilePath = path.resolve(__dirname, './src/data/Nutritions/nutritions2.json')

const usersFilePath = path.resolve(__dirname, './src/data/Users/users.json')
const usersGroceryFilePath = path.resolve(__dirname, './src/data/UsersGrocery/usersGrocery.json')

const ultimateGroceryListFilePath = path.resolve(__dirname, './src/data/Grocery/example/ultimate-gl-from-loopback-server-example.json')
const groceryListWithUserRelationsFilePath = path.resolve(__dirname, './src/data/Grocery/example/grocery-with-user-relations.json')

const dbIngredientsFilePath = path.resolve(__dirname, './src/data/Ingredients/example/gs-loopback-sample.json')
const recipesFilePath = path.resolve(__dirname, './src/data/Recipe4/recipe.json')
// console.log(path.resolve(__dirname, './data/Grocery/grocery.json'));
shell.exec('jsonlint ' + groceryFilePath)
shell.exec('jsonlint ' + allergiesFilePath)
shell.exec('jsonlint ' + courseFilePath)
shell.exec('jsonlint ' + cuisineFilePath)
shell.exec('jsonlint ' + departmentsFilePath)
shell.exec('jsonlint ' + dietFilePath)
shell.exec('jsonlint ' + ingredientsFilePath)
shell.exec('jsonlint ' + ingredients1FilePath)
shell.exec('jsonlint ' + ingredients3FilePath)
shell.exec('jsonlint ' + favoritesFilePath)
shell.exec('jsonlint ' + itemsFilePath)
shell.exec('jsonlint ' + mealCalendarFilePath)
shell.exec('jsonlint ' + firstVeganGLMCFilePath)
shell.exec('jsonlint ' + measurementsFilePath)
shell.exec('jsonlint ' + menuFilePath)
shell.exec('jsonlint ' + nutritionsFilePath)
shell.exec('jsonlint ' + nutritions2FilePath)
shell.exec('jsonlint ' + usersFilePath)
shell.exec('jsonlint ' + usersGroceryFilePath)
shell.exec('jsonlint ' + ultimateGroceryListFilePath)
shell.exec('jsonlint ' + groceryListWithUserRelationsFilePath)
shell.exec('jsonlint ' + dbIngredientsFilePath)
shell.exec('jsonlint ' + recipesFilePath)

//
// // Run external tool synchronously
// if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
//   shell.echo('Error: Git commit failed');
//   shell.exit(1);
// }
