var writeInFile = require('./writeFile')

var { getMenuGenerator } = require('./generateArray')

// right now it's used only for getMenuGenerator i think it wrong.
// and we need to regenerate all files from scratch each time. especially if we re creating a new files or make cnahnges at
// @TODO big issue
function generateFile () {
  var fileName = 'generatedMenu'
  var path = './output/' + fileName + '.json' // i don't like this paths. at least we can move first part outside - aka output...
  var data = getMenuGenerator(2)

  writeInFile.writeFile(path, data)
}
generateFile()

module.exports = {
  generateFile
}