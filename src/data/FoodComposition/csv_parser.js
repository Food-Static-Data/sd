const fs = require('fs')
const csv = require('csv-parser')
const path = require('path');

fs.createReadStream(path.resolve(__dirname + '/Food_Composition.csv'))
  .pipe(csv())
  .on('data', function (data) {
    try {
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  })
  .on('end', function () {

  })
