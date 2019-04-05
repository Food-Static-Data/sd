const filePath = require('./files')

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
  if (typeof data !== 'undefined') {
    if ((typeof data) === 'object') {
      var dataStr = JSON.stringify(data)

      if (typeof dataStr === 'string') {
        main(path, dataStr).catch(error => console.error(error))
      } else {
        console.error('Error occured after stringify or variabe has another type not string')
      }
    }
  } else {
    console.error('Error variable is undefined')
  }
}

function writeFiles () {
  // add filenames to array that exist in sd-wrapper
  // output filenames will be the same as in array
  // files you can find in folder output
  var fileNames = [
    'users',
    'grocery',
    'items'
  ]

  fileNames.map(fileName => {
    // folder output should exist
    var path = './output/' + fileName + '.json'
    // it's maybe strange of using require by this way but it's working
    var data = require(filePath[fileName + 'FilePath'])

    writeFile(path, data)
  })
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
writeFiles()

module.exports = {
  writeFile,
  writeFiles,
  test
}
