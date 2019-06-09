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
// @TODO split this function into 2 methods.
// @TODO extend explanation for this method at Readme file
// @TODO pick different 5 long files and try to use it
function splitObject (path, file) {
  
  // @TODO make if looks as default if. shortversion sucks :)
  if(path.charAt(path.length-1)!=='/') path = path + '/'; //path correction
  
  // @TODO are we really sure that data should be read here, not passed to this function from outside?
  let data = fs.readFileSync(path + file)
  let fileData= JSON.parse(data)
  
  var len = fileData.length // Object Length
  var folderName = file.slice(0,-5) ;
  folderName = folderName + "_elements";
  var folderNamePath = path + folderName;
  var fileName;
  
  // @TODO update this if as well
  if (!fs.existsSync(folderNamePath)) fs.mkdirSync(folderNamePath) // Check if Folder exists or not.
  for (var i = 0; i < len; i++) {
    
    // @TODO update this if else statement
    // @TODO for most of cases we wouldn't have name. maybe it's better to use some sort of 
    // flag/argument that can be passed to this method, and that flag will help us to understand that we should use name or 
    // maybe some other json variable as a name of our file
    if(typeof fileData[i].name === "undefined")
      fileName = i + '.json';
    else
      fileName = fileData[i].name + '.json';
    
    //@TODO create a separated method, that will receive a filename and will make all that necessary preparations below
    fileName = fileName.replace(/ /g, '_'); // Replace space with underscore
    fileName = fileName.toLowerCase(); //Maintain Uniformity
    
    var elementPath = path + folderName + '/' + fileName;
    writeFile( elementPath, fileData[i] );// Declared above
  }
}
// execute function
// splitObject()

module.exports = {
  writeFile,
  test,
  splitObject
}
