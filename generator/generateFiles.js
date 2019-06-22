const fs = require('fs')
var { writeFile } = require('./writeFile')
// var {
//   usersGrocery,
//   favorites,
//   getMenuGenerator,
//   items,
//   getMeasurementSystem,
//   getMeasurementUnits
// } = require('./generateArray')
const { config } = require('./configGenerator')

// @TODO I don't like that we have all of these path manipulations inside of this method
function generateFiles () {
  config.map(settings => {
    var fileName = settings['name']
    var folder = fileName.charAt(0).toUpperCase() + fileName.slice(1)
    //   var path = './output/' + fileName + '.json';
    var folderPath = './src/data/' + folder

    if (!fs.existsSync(folderPath)) { // @TODO use isDirectory?
      fs.mkdirSync(folderPath)
    }

    var path = folderPath + '/' + fileName + '.json'
    var data = settings['data']
    // console.log(data);

    writeFile(path, data)
  })
}

// @TODO i don't think that later we should call this method inside of this file
// it's better to call it in a separated script
generateFiles()

module.exports = {
  generateFiles
}
