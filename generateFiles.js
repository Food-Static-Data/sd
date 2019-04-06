const filePath = require('./files')
var writeInFile = require('./writeFile')
const fs = require('fs')
const { promisify } = require('util')

const writeFilePromisify = promisify(fs.writeFile)


function generateFiles () {
    // add filenames to array that exist in sd-wrapper
    // output filenames will be the same as in array
    // files you can find in folder output
    var fileNames = [
      // 'users',
      // 'usersGrocery',
      // 'items',
      'menu'
    ]
  
    fileNames.map(fileName => {
      // folder should exist
      // get fileName and uppercase first letter. it will be folder
      // E.g. filename item it will write in in folder Item
      var folder = fileName.charAt(0).toUpperCase() + fileName.slice(1)
    //   var path = './output/' + fileName + '.json';
      var path = './src/data/'+ folder + '/' + fileName + '.json';
      
      
      // it's maybe strange of using require by this way but it's working
      var data = require(filePath[fileName + 'FilePath'])
  
      writeInFile.writeFile(path, data)
    })
  }

  generateFiles()