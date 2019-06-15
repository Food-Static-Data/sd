var writeInFile = require('./writeFile')
const fs = require('fs')
const csv = require('csv-parser')
const path = require('path')

 let results = []
  let data = []
  const maxEntries = 10000
  let numberOfFiles
  let fileNameWithoutExtension
  let folderName

// @TODO 2) Name can be confusing - because at our 3rd line we have a module with name csv-parser.. not sure what to do...

const writeIntoFile = ( i, data) => {
 writeInFile.writeFile(path.join(__dirname, `/projects/${folderName}/${fileNameWithoutExtension}${i}.json`), data)
}
  
const splitJsonIntoFiles = () => {
    let i = 1

    for (i; i <= numberOfFiles; i++) {
      const start = (i - 1) * maxEntries
      const stop = i * maxEntries
      if (i === numberOfFiles) {
        data = results.slice(start, results.length + 1)
        writeIntoFile( i, data)
        return
      }

      data = results.slice(start, stop)
      writeIntoFile( i, data)
    }
  }


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
  csvParser
}
