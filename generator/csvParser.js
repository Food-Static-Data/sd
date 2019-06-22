var writeInFile = require('./writeFile')
const fs = require('fs')
const filesystem = require('fs')
const csv = require('csv-parser')
const path = require('path')

const maxEntries = 10000
let result = []
let folderName, numberOfFiles

const fileWriter = (i, fileName, start, stop) => {
  var data = result.slice(start, stop)
  writeInFile.writeFile(path.join(__dirname, `/projects/USFA/${folderName}/${fileName}${i}.json`), data)
}

const splitJsonIntoFiles = (fileName) => {
  let i = 1

  for (i; i <= numberOfFiles; i++) {
    const start = (i - 1) * maxEntries
    var stop = i * maxEntries

    if (i === numberOfFiles) {
      stop = result.length + 1
      fileWriter(i, fileName, start, stop)
      return
    }

    fileWriter(i, fileName, start, stop)
  }
}

const csvToJson = (directory, file, headers) => {
  const fileName = file.split('.')[0]

  const folder = directory.split('/')

  folderName = folder[folder.length - 1]

  let results = []

  // @TODO it's a very long path. we can use our aliases
  // in order to make it shorter. check readme https://github.com/GroceriStar/sd/tree/master/docs#babel-alias
  fs.createReadStream(
    path.resolve(__dirname, `${directory}/${file}`)
  )
    .pipe(
      csv({
        skipLines: 1,
        headers: headers
      })
    )
    .on('data', function (data) {
      results.push(data)
    })
    .on('end', function () {
      numberOfFiles = Math.ceil(results.length / maxEntries)
      result = results
      splitJsonIntoFiles(fileName)
    })
}

const parseDirectoryFiles = (directoryPath, headers) => {
  // passing directoryPath and callback function
  filesystem.readdir(directoryPath, function (err, files) {
  // handling error
    if (err) {
      return console.log('Unable to scan directory: ' + err)
    }
    // listing all files using forEach
    files.forEach(function (file) {
    // Do whatever you want to do with the file
      console.log(file, typeof file)
      if (file.split('.')[1] === 'csv') {
        csvToJson(directoryPath, file, headers)
      }
    })
  })
}

module.exports = {
  parseDirectoryFiles
}
