const fs = require('fs')
const csv = require('csv-parser')
const path = require('path')
const _ = require('lodash')
var writeInFile = require('../../writeFile')

let results = []
let tmp = []

fs.createReadStream(
  path.join(
    __dirname,
    '../../../src/data/FoodComposition/Food_Composition.csv'
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
    tmp.push(data)

    let countriesArr = ['Finland', 'France', 'Germany', 'Italy', 'Netherlands', 'Sweden', 'United Kingdom']
    results = _.map(tmp, obj => {
      const country = _.sample(countriesArr)
      obj.country = country

      return obj
    })
  })
  .on('end', function () {
    writeInFile.writeFile(
      path.join(__dirname, `/FoodComposition.json`),
      results
    )
  })
