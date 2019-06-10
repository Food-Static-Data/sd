var writeInFile = require('./writeFile')
const fs = require('fs')
const csv = require('csv-parser')
const path = require('path')

const csvParser = (dir, fileName, headers) => {
  const fileNameWithoutExtension = fileName.split('.')[0]

  const folder = dir.split('/')

  const folderName = folder[folder.length - 1]

  let results = []
  let data = []
  const maxEntries = 10000
  let numberOfFiles

  const splitJsonIntoFiles = () => {
    let i = 1

    for (i; i <= numberOfFiles; i++) {
      const start = (i - 1) * maxEntries
      const stop = i * maxEntries
      if (i === numberOfFiles) {
        data = results.slice(start, results.length + 1)
        writeInFile.writeFile(path.join(__dirname, `/projects/${folderName}/${fileNameWithoutExtension}${i}.json`), data)
        return
      }

      data = results.slice(start, stop)
      writeInFile.writeFile(path.join(__dirname, `/projects/${folderName}/${fileNameWithoutExtension}${i}.json`), data)
    }
  }

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
