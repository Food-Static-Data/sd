var writeInFile = require('./writeFile')
// var { chickenKyiv } = require('@groceristar/groceristar-fetch')
const uuidv1 = require('uuid/v1')

var { getMenuGenerator } = require('./generateArray')



function generateFile () {
  var fileName = 'generatedMenu'
  var path = './output/' + fileName + '.json'
  var data = getMenuGenerator(2)

  writeInFile.writeFile(path, data)
}
generateFile()
