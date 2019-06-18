var writeInFile = require('./writeFile')
const fs = require('fs')
const csv = require('csv-parser')
const path = require('path')
const util = require('util')
const readdir = util.promisify(fs.readdir)

let results = []
let data = []
const maxEntries = 10000
let numberOfFiles
let fileNameWithoutExtension
let folderName

// @TODO looks cool, but not sure if i like that we have this path here...
// i mean it can be something else. especially if we plan to move generator out
// @TODO does this function has a duplicate or i'm mistaken?
const writeIntoFile = (i, data) => {
  writeInFile.writeFile(
    path.join(__dirname, `/projects/${folderName}/${fileNameWithoutExtension}${i}.json`), data
  )
}

// read all files in a the directory passed to it
async function readFromDirectory (directoryPath) {
  let files = await readdir(directoryPath)
  return files
}

// get files from readdirectory and csvParser to pass each csv file
const parseDirectoryFiles = (directoryPath, headers) => {
  readFromDirectory(directoryPath).then(files => {
    // listing all files using forEach
    files.forEach(function (file) {
      // Do whatever you want to do with the file
      if (file.split('.')[1] === 'csv') {
        csvParser(directoryPath, file, headers)
      }
    })
  }).catch(err => {
    return console.log('Unable to scan directory: ' + err)
  })
}

const splitJsonIntoFiles = () => {
  let i = 1

  for (i; i <= numberOfFiles; i++) {
    const start = (i - 1) * maxEntries
    const stop = i * maxEntries
    if (i === numberOfFiles) {
      data = results.slice(start, results.length + 1)
      writeIntoFile(i, data)
      return
    }

    data = results.slice(start, stop)
    writeIntoFile(i, data)
  }
}

// @TODO 2) Name can be confusing - because at our 3rd line we have a module with name csv-parser.. not sure what to do...
const csvParser = (dir, fileName, headers) => {
  fileNameWithoutExtension = fileName.split('.')[0]

  const folder = dir.split('/')

  folderName = folder[folder.length - 1]

  // @TODO it's a very long path. we can use our aliases
  // in order to make it shorter. check readme https://github.com/GroceriStar/sd/tree/master/docs#babel-alias
  fs.createReadStream(
    path.resolve(__dirname, `${dir}/${fileName}`)
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
      splitJsonIntoFiles()
    })
}

module.exports = {
  parseDirectoryFiles,
  csvParser
}
