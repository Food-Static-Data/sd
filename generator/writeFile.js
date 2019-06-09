// const filePath = require('../files')

const fs = require('fs')
const { promisify } = require('util') // ?? it's utils of not
// const { promisify } = require('util')

const writeFilePromisify = promisify(fs.writeFile)

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
function writeFile (path, data) {
  // var dataStr = JSON.stringify(users);
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

    main(path, dataStr).catch(error => console.error(error))
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
 */

function splitObject (path,file) {
  if(path.charAt(path.length-1)!=='/') path = path + '/'; //path correction
  let data = fs.readFileSync(path + file)
  let fileData= JSON.parse(data)
  var len = fileData.length // Object Length
  var folderName = file.slice(0,-5) ;
  folderName = folderName + "_elements";
  folderNamePath = path + folderName;
  var fileName;
  if (!fs.existsSync(folderNamePath)) fs.mkdirSync(folderNamePath) // Check if Folder exists or not.
  for (var i = 0; i < len; i++) {
    if(typeof fileData[i].name === "undefined")
      fileName = i + '.json';
    else
      fileName = fileData[i].name + '.json';
    fileName = fileName.replace(/ /g, '_'); // Replace space with underscore
    fileName = fileName.toLowerCase(); //Maintain Uniformity
    var elementPath = path + folderName + '/' + fileName;
    writeFile(elementPath,fileData[i]);// Declared above
  }
}
// execute function
// splitObject()

module.exports = {
  writeFile,
  test,
  splitObject
}
