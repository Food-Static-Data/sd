const path = require('path')
const fs = require('fs')

const directoryPath = path.join(__dirname, '/../examples/')

const exampleFiles = {}

fs.readdirSync(directoryPath).forEach((file) => {
  if (path.extname(file) === '.js') {
    const filename = path.basename(file, path.extname(file))
    exampleFiles[filename] = path.join(directoryPath, file)
  }
})

module.exports = exampleFiles
