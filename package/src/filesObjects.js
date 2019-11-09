const jsonFiles = require('./files');

// @TODO use lodash for it
let arr;
Object.keys(jsonFiles).forEach((key) => {
  arr = {
    ...arr,
    [key]: require(jsonFiles[key]),
  };
});

module.exports = arr;
