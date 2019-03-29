// at this file we'll run nodejs command
// jsonlint data/Grocery/grocery.json and other checks
var shell = require('shelljs')
var path = require('path')

const {
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
    itemsFilePath,
    mealCalendarFilePath,
    firstVeganGLMCFilePath,
    measurementsFilePath,
    menuFilePath,
    nutritionsFilePath,
    nutritions2FilePath,
    usersFilePath,
    usersGroceryFilePath,
    ultimateGroceryListFilePath,
    groceryListWithUserRelationsFilePath,
    dbIngredientsFilePath,
    recipesFilePath,
} = path.resolve(__dirname, './files.js')

//console.log(path.resolve(__dirname, './data/Grocery/grocery.json'))
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
