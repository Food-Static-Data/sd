// at this file we'll run nodejs command
var shell = require('shelljs')

// @TODO add here all new generated at generator files too
const jsonFiles = require('./files.js')

// console.log(jsonFiles)

Object.keys(jsonFiles).forEach(function (key) {

  shell.exec('jsonlint ' + jsonFiles[key])

  // @TODO we need to add some validation, that will help us to know, when something is wrong.
  // how to test it - we can break one file and when it go to if statement - we'll be able to
  // see is it works or not

  // // Run external tool synchronously
  // if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
  //   shell.echo('Error: Git commit failed');
  //   shell.exit(1);
  // }

})

// console.log(groceryFilePath)

// console.log(path.resolve(__dirname, './data/Grocery/grocery.json'))

// // Run external tool synchronously
// if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
//   shell.echo('Error: Git commit failed');
//   shell.exit(1);
// }
