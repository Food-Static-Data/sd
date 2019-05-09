var writeInFile = require('./writeFile')
const fs = require('fs')
var { usersGrocery, favorites, getMenuGenerator, items, getMeasurementSystem, getMeasurementUnits } = require('./generateArray')
const { config } = require('./configGenerator')

function generateFiles() { 
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
