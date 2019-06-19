const path = require('path')
const { parseDirectoryFiles } = require('../../../csv_parser')

const headers = [
  'NDB_No',
  'Nutrient_Code',
  'Nutrient_name',
  'Derivation_Code',
  'Output_value',
  'Output_uom'
]

const directory = '../../../../src/data/Nutrition'

// //joining path of directory
const directoryPath = path.join(__dirname, directory)
parseDirectoryFiles(directoryPath, headers)
