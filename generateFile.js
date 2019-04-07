var writeInFile = require('./writeFile')
var { chickenKyiv } = require('@groceristar/groceristar-fetch')
function generateFile () {
  var fileName = 'generatedMenu'
  var path = './output/' + fileName + '.json'
  var data = chickenKyiv.getMenuGenerator(2)

  writeInFile.writeFile(path, data)
}
generateFile()
