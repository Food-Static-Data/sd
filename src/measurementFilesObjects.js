const jsonFiles = require('./measurementFiles')
const {measurementSystem, measurementUnits} = require('./measurementFiles')
var arr
Object.keys(jsonFiles).forEach(function(key)
{
  arr = {
    ...arr,
    [key]: require(jsonFiles[key])
 }
})

const getMeasurementSystem= function(){
  return (arr.measurementSystem)
}

const getMeasurementUnits = function(){
  return (arr.measurementUnits)
}

module.exports = {
  arr, 
  getMeasurementSystem,
  getMeasurementUnits
}