// @TODO here we'll store all necessary methods that we can use at different places.

// i think we should have here methods like
// __generateId
// __generateId
// getFileKey - i don't like the name

const pathExists = require('path-exists')

async function checkFilePath (path) {
  if (await pathExists(path)) {
    console.log('Filepath ' + path + ' exist')
  } else {
    console.log('Filepath ' + path + ' doesn`t exist')
  }
}

// checkFilePath('./generator/utils1.js') using method checkFilePath

module.exports = {
  checkFilePath
}
