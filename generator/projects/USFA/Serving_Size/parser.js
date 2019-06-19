const path = require('path')
const { parseDirectoryFiles } = require('../../../csvParser')

const headers = [
  'NDB_No',
  'Serving_Size',
  'Serving_Size_UOM',
  'Household_Serving_Size',
  'Household_Serving_Size_UOM'
]

const directory = '../../../../src/data/Serving_Size'

// //joining path of directory
const directoryPath = path.join(__dirname, directory)

parseDirectoryFiles(directoryPath, headers)
