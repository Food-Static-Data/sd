const jsonFiles = require('@files')

// @TODO use lodash for it
var arr
Object.keys(jsonFiles).forEach(function (key) {
  arr = {
    ...arr,
    [key]: require(jsonFiles[key])
  }
})

module.exports = arr
