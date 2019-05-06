const jsonFiles = require("./files.js")

var arr;
Object.keys(jsonFiles).forEach(function (key) {
   arr = {
       ...arr,
        [key]:require(jsonFiles[key])
   }
  })

module.exports = arr;


