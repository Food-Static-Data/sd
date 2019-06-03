const fs = require('fs')

function splitObject () {
  var src = '.././src/data/Grocery/' // Location where all object files are save
  var obj = 'grocery.json' // Object file name
  var path = src + obj // Path of object file
  let data = fs.readFileSync(path)
  let grocery = JSON.parse(data)
  var len = grocery.length // Object Length

  var foldername = 'elements'
  if (!fs.existsSync(src + foldername)) { // Check if Folder exists or not.
    fs.mkdirSync(src + foldername)
  }
  for (var i = 0; i < len; i++) {
    let temp = JSON.stringify(grocery[i])
    var fileName = grocery[i].name + '.json'
    fileName = fileName.replace(/ /g, '_') // Replace space with underscore
    fileName = fileName.toLowerCase()
    // Checking if file already exists or not
    if (!fs.existsSync(src + foldername + '/' + fileName)) {
      fs.writeFileSync(src + foldername + '/' + fileName, temp)
    } else {
      console.log('File <' + fileName + '> Already Exists.')
    }
  }
}

splitObject()
