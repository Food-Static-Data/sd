const fs = require('fs')
const csv = require('csv-parser')

fs.createReadStream(__dirname + '/Food_Composition.csv')
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
