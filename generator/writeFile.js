// const filePath = require('../files')

const fs = require('fs')
const { promisify } = require('util')

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




/*
This module will create a directory with the name of object file 
and puts all the splitted elements inside the directory.
*/
const fs = require('fs');
function splitObject() {
    var src = ".././src/data/Grocery/"; // Location where all object files are save
    var obj = "grocery.json"; //Object file name 
    var path = src + obj; // Path of object file
    let data = fs.readFileSync(path);
    let grocery = JSON.parse(data);
    var len = grocery.length; //Object Length

    var foldername = 'elements';
    if (!fs.existsSync(src + foldername)) { //Check if Folder exists or not.
        fs.mkdirSync(src + foldername);
    }
    for (var i = 0; i < len; i++) {
        let temp = JSON.stringify(grocery[i]);
        var fileName = grocery[i].name + ".json";
        fileName = fileName.replace(/ /g, "_"); //Replace space with underscore 
        fileName = fileName.toLowerCase();
        //Checking if file already exists or not
        if (!fs.existsSync(src + foldername + "/" + fileName)) {
            fs.writeFileSync(src + foldername + "/" + fileName, temp);
        } else {
            console.log("File <" + fileName + "> Already Exists.");
        }
    }
}

module.exports = {
  writeFile,
  test,
  splitObject
}
