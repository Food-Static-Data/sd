var writeInFile = require('./writeFile')
const fs = require('fs')
var { usersGrocery, favorites, getMenuGenerator, items, getMeasurementSystem, getMeasurementUnits } = require('./generateArray')

function generateFiles() {
  // add filenames to array that exist in sd-wrapper
  // output filenames will be the same as in array
  // files you can find in folder output
  var config = [
    // { "name": "usersGrocery",
    //   "data": usersGrocery()
    // },
    // { "name": "favorites",
    //   "data": favorites()
    // },
    // { "name": "menu",
    //   "data": getMenuGenerator(2)
    // },
    // { "name": "items",
    //   "data": items()
    // },
    {
      "name": "measurementSystem",
      "data": getMeasurementSystem()
    },
    {
      "name": "measurementUnits",
      "data": getMeasurementUnits()
    },
    {
      "name": "usersGrocery",
      "data": usersGrocery()
    },
    // { "name": "favorites",
    //   "data": favorites()
    // },
    // { "name": "menu",
    //   "data": getMenuGenerator(2)
    // },
    // { "name": "items",
    //   "data": items()
    // },

  ]
  
  config.map(settings => {
    var fileName = settings["name"];
    var folder = fileName.charAt(0).toUpperCase() + fileName.slice(1)
    //   var path = './output/' + fileName + '.json';
    var folderPath = './src/data/' + folder;

    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }

    var path = folderPath + '/' + fileName + '.json'
    var data = settings["data"]
    // console.log(data);

    writeInFile.writeFile(path, data)
  })
}

generateFiles()
