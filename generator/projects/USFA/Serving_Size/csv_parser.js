const fs = require('fs')
const csv = require('csv-parser')
const path = require('path')

var writeInFile = require('../../writeFile')

let results = []
let data = []
const maxEntries = 10000
let numberOfFiles

// @TODO same name but different content
const splitJsonIntoFiles = () => {
  let i = 1

  for (i; i <= numberOfFiles; i++) {
    const start = (i - 1) * maxEntries
    const stop = i * maxEntries
    if (i === numberOfFiles) {
      data = results.slice(start, results.length + 1)
      writeInFile.writeFile(path.join(__dirname, `/Serving_Size${i}.json`), data)
      return
    }

    data = results.slice(start, stop)
    writeInFile.writeFile(path.join(__dirname, `/Serving_Size${i}.json`), data)
  }
}

// @TODO it's a very long path. we can use our aliases
// in order to make it shorter. check readme https://github.com/GroceriStar/sd/tree/master/docs#babel-alias

// @TODO can be also replaced with separated method so we avoid a duplicates
fs.createReadStream(
  path.join(
    __dirname,
    `../../../src/data/Serving_Size/Serving_Size.csv`
  )
)
  .pipe(
    csv({
      skipLines: 1,
      headers: [ // @TODO pass headers from the outside
        'NDB_No',
        'Serving_Size',
        'Serving_Size_UOM',
        'Household_Serving_Size',
        'Household_Serving_Size_UOM'
      ]
    })
  )
  .on('data', function (data) {
    results.push(data)
    // try {
    //   ;
    //   console.log(data[0])
    // } catch (err) {
    //   console.log(err)
    // }
  })
  .on('end', function () {
    numberOfFiles = Math.ceil(results.length / maxEntries)
    splitJsonIntoFiles()
  })
