// at this file we'll run nodejs command
var shell = require('shelljs')
var path = require('path')

// @TODO add here all new generated at generator files too
const jsonFiles = require('./files.js')

// console.log(jsonFiles)

Object.keys(jsonFiles).forEach(function(key){
  shell.exec('jsonlint '+ jsonFiles[key])
})

// console.log(groceryFilePath)

// console.log(path.resolve(__dirname, './data/Grocery/grocery.json'))

// // Run external tool synchronously
// if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
//   shell.echo('Error: Git commit failed');
//   shell.exit(1);
// }
