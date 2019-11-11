const jsonFiles = require("./measurementFiles");
// const {
//   measurementSystem,
//   measurementUnits,
// } = require('./measurementFiles');

let arr;

Object.keys(jsonFiles).forEach(key => {
  arr = {
    ...arr,
    [key]: require(jsonFiles[key])
  };
});

const getMeasurementSystem = () => {
  return arr.measurementSystem;
};

const getMeasurementUnits = () => {
  return arr.measurementUnits;
};

module.exports = {
  arr,
  getMeasurementSystem,
  getMeasurementUnits
};
