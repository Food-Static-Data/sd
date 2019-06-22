var { resolve } = require('path')

const dataPath = './data/'

const pathResolver = (path) => {
  return resolve(__dirname, dataPath + path)
}
const measurementSystem = pathResolver('Units/measurementSystems.json')
const measurementUnits = pathResolver('Units/measurementUnits.json')
module.exports = {
  measurementSystem,
  measurementUnits
}
