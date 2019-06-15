const path = require('path')
const fs = require('fs')

const directoryPath = path.join(__dirname, '/../examples/')

let exampleFiles = {}

fs.readdirSync(directoryPath).forEach((file) => {
  if (path.extname(file) === '.js') {
    let filename = path.basename(file, path.extname(file))
    exampleFiles[filename] = path.join(directoryPath, file)
  }
})

module.exports = exampleFiles
