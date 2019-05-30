const fs = require('fs')
const csv = require('csv-parser')
const path = require('path')

var writeInFile = require('../../writeFile')

let results = []

fs.createReadStream(
  path.join(
    __dirname,
    '../../../src/data/FoodComposition/Food_Composition - United Kingdom.csv'
  )
)
  .pipe(
    csv({
      skipLines: 4,
      headers: [
        'Food class',
        'Food (FoodEx2 description)',
        'Microgram/100 gram',
        'Milligram/100 gram'
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
    const country = 'United Kingdom'
    results = results.map(obj => ({ ...obj, country }))
    writeInFile.writeFile(
      path.join(__dirname, `/FoodComposition-${country}.json`),
      results
    )
  })
