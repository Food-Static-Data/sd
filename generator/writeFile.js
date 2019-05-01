const filePath = require('../files')


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

module.exports = {
  writeFile,
  test
}
