// const filePath = require('../files')

const fs = require('fs')
const { promisify } = require('util') // ?? it's utils of not
// const { promisify } = require('util')

// const _ = require('lodash')

const writeFilePromisify = promisify(fs.writeFile)

// @TODO change the name of this method. it's not selfexplanatory
async function main (path, data) {
  await writeFilePromisify(
    path, data
  )

  console.info('file generated successfully!')
}

/**
 * Write in file
 * @param {String} path
 * @param {Object} data
 */
function writeFile (path, data) { // @TODO looks like a duplicate, am i right?
  // console.log(typeof users);
  // console.log(typeof usersStr);
  if (typeof data === 'undefined') {
    console.error('Error variable is undefined')
    return
  }

  if (typeof data === 'object') {
    var dataStr = JSON.stringify(data)
    if (typeof dataStr !== 'string') {
      console.error('Error occured after stringify or variabe has another type not string')
      return
    }

    main(path, dataStr).catch(
      error => console.error(error)
    )
  }
}

function test () {
  // console.log(filePath["groceryFilePath"]);
  // console.log(JSON.parse("src/data/Grocery/grocery.json"));
  // console.log(grocery);
  // writeFiles()
  // console.log(typeof require(filePath.groceryFilePath));

  console.log('ok')
}

// execute function
// writeFiles()

/**
 * For splitObject
 * @param {String} path
 * @param {String} file
 * @param {var} flag
 */
function splitObject (path, file, flag) { // @TODO do we have only one this method or i'm mistaken?
  /*
    flag=1 ==> name according to index
    flag=0 ==> name according to "name" attribute
  */
  var temp = path.charAt(path.length - 1) // path correction
  if (temp !== '/') { path = path + '/' }

  // Reading data...
  let data = fs.readFileSync(path + file)
  let fileData = JSON.parse(data)

  var folderName = file.slice(0, -5) + '_elements'
  var folderNamePath = path + folderName

  if (isDirectory(folderNamePath)) {
    fs.mkdirSync(folderNamePath)
  }

  for (var i = 0; i < fileData.length; i++) {
    var fileName = getFileName(file, fileData[i], flag, i)
    var elementPath = path + folderName + '/' + fileName
    writeFile(elementPath, fileData[i])
  }
}
// execute function
// splitObject()

/**
 * fixFileName()
 * @param {string} fileName
 */
function fixFileName (fileName) {
  fileName = fileName.replace(/ /g, '_') // Replace space with underscore
  fileName = fileName.toLowerCase() // Maintain Uniformity
  return fileName
}

/** isDirectory()
 * @param {string} folderNamePath
 *  */
function isDirectory (folderNamePath) {
  if (fs.existsSync(folderNamePath)) {
    return false
  } else {
    return true
  }
}

/**
 * getFileName()
 * @param {string} file
 * @param {Object} fileData
 * @param {var} flag
 * @param {var} index
*/
function getFileName (file, fileData, flag, index) {
  var fileName
  if (flag === 1) fileName = index + '-' + file// for example: 23-someJsonFile.json
  else fileName = fileData.name + '.json' // for example: someValueOfName.json

  fileName = fixFileName(fileName)
  return fileName
}

module.exports = {
  writeFile,
  test,
  splitObject
}
