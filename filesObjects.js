const cooking_times = require("./files.js")

var arr;
Object.keys(cooking_times).forEach(function (key) {
   arr = {
       ...arr,
        [key]:require(cooking_times[key])
   }
  })

module.exports = arr;


