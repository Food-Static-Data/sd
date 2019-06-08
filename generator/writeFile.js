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
  var src = path; // Location of object file
  var obj = file // Object file name
  var srclen= src.length;
  if(src.charAt(srclen-1)!=='/') src = src + '/'; //path correction
  var location = src + obj // location of object file
  let ddata = fs.readFileSync(location)
  let grocery = JSON.parse(ddata)
  var len = grocery.length // Object Length
  var foldername = file.slice(0,-5) ;
  foldername = foldername+ "_elements";
  if (!fs.existsSync(src + foldername)) fs.mkdirSync(src + foldername) // Check if Folder exists or not.
  for (var i = 0; i < len; i++) {
    let temp = JSON.stringify(grocery[i]);
    var fileName = grocery[i].name + '.json';
    fileName = fileName.replace(/ /g, '_'); // Replace space with underscore
    fileName = fileName.toLowerCase();
    // Checking if file already exists or not
    if (!fs.existsSync(src + foldername + '/' + fileName)) fs.writeFileSync(src + foldername + '/' + fileName, temp);
    else console.log('File <' + fileName + '> Already Exists.');
  }
}
// execute function
// splitObject()

module.exports = {
  writeFile,
  test,
  splitObject
}
