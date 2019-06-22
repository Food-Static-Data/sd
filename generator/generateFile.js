var { writeFile } = require('./writeFile')

var { getMenuGenerator } = require('./generateArray')

// right now it's used only for getMenuGenerator i think it wrong.
// and we need to regenerate all files from scratch each time. especially if we re creating a new files or make cnahnges at
// @TODO big issue
function generateFile () {
  var fileName = 'generatedMenu'
  var path = './output/' + fileName + '.json' // i don't like this paths. at least we can move first part outside - aka output...

  // @TODO right now we're using only one method from our list.
  // so it works only for one case.
  // we should pass a function aka callback as attribute to this method and call it here.
  var data = getMenuGenerator(2)

  writeFile(path, data)
}

// @TODO i don't think that later we should call this method inside of this file
// it's better to call it in a separated script
generateFile()

module.exports = {
  generateFile
}
