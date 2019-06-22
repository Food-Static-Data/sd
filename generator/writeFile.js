// const filePath = require('../files')
const fs = require('fs')
const PATH = require('path')
const { promisify } = require('util') // ?? it's utils of not *** Answer : NO. It's using for writing data in json
// const { promisify } = require('util')
// const _ = require('lodash')

const writeFilePromisify = promisify(fs.writeFile)

async function writing (path, data) {
  await writeFilePromisify(
    path, data
  )
  console.info(path + ' file generated successfully!')
}

/**
 * Write in file
 * @param {String} path
 * @param {Object} data
 */
function writeFile (path, data) {
  // console.log(typeof users);
  // console.log(typeof usersStr);
  if (typeof data === 'undefined') {
    console.error('Error variable is undefined')
    return
  }

  if (typeof data === 'object') {
    var dataStr = JSON.stringify(data)
    writing(path, dataStr).catch(
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
 * For fixPath()
 * @param {String} path
 */
function fixPath (path) {
  path = PATH.resolve(__dirname, path) // absolute path
  if (path[-1] !== '/') { path = path + '/' } // path correction
  return path
}

/**
 * readData()
 * @param {string} path
 * @param {string} file
 * */
function readData (path, file) {
  let data = fs.readFileSync(path + file)
  let fileData = JSON.parse(data)
  return fileData
}

/**
 * @param {String} folderNamePath
 * @param {String} file
 * @param {Object} fileData
 * @param {var} flag
 * */
function saveFile (folderNamePath, file, fileData, flag) {
  var fileDataLength = fileData.length
  for (var i = 0; i < fileDataLength; i++) {
    var fileName = getFileName(file, fileData[i], flag, i)
    var elementPath = folderNamePath + '/' + fileName
    writeFile(elementPath, fileData[i])
  }
}

/**
 * @param {String} path
 * @param {String} file
 */
function makeFolder (path, file) {
  var folderName = file.slice(0, -5) + '_elements'
  var folderNamePath = path + folderName
  if (isDirectory(folderNamePath)) {
    fs.mkdirSync(folderNamePath)
  }
  return folderNamePath
}
/**
 * For splitObject
 * @param {String} path
 * @param {String} file
 * @param {var} flag
 */
function splitObject (path, file, flag = 1) { // split large files into single elements
  /*
      flag=1 ==> name according to index
      flag=0 ==> name according to "name" attribute
    */
  path = fixPath(path)
  let fileData = readData(path, file) // Reading data...
  var folderNamePath = makeFolder(path, file) // new folder to save splitted files
  saveFile(folderNamePath, file, fileData, flag) // saving files
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

/**
 * isDirectory()
 * @param {string} folderNamePath
 *  */
function isDirectory (folderNamePath) {
  if (fs.existsSync(folderNamePath)) {
    return false
  }
  return true
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
  if (flag === 1) fileName = index + '-' + file // for example: 23-someJsonFile.json
  else fileName = fileData.name + '.json' // for example: someValueOfName.json
  fileName = fixFileName(fileName)
  return fileName
}

module.exports = {
  writeFile,
  test,
  splitObject
}
