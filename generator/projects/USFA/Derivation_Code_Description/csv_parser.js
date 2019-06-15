const fs = require('fs')
const path = require('path')
const { csvParser } = require('../../csv_parser')

const headers = [
  'derivation_code',
  'Derivation_Descript'
]

//@TODO I don't like this dir variable
const dir = '../../../src/data/Derivation_Code_Description'

// //joining path of directory
const directoryPath = path.join(__dirname, dir)

// @TODO this function is a duplicate. Create a method at csv_parser and import it here

// @TODO change the name of this file - it's confusing, because we have a same name imported.
// let it be just parser.

// passing directoryPath and callback function
fs.readdir(directoryPath, function (err, files) {
  // handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err)
  }
  // listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file

    if (file.split('.')[1] === 'csv') {
      csvParser(directoryPath, file, headers)
    }
  })
})
