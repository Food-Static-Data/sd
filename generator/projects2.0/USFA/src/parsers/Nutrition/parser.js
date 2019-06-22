import path from 'path'

// @TODO // we can use module resolver for this
import { parseDirectoryFiles } from '../../../csvParser'

const headers = [
  'NDB_No',
  'Nutrient_Code',
  'Nutrient_name',
  'Derivation_Code',
  'Output_value',
  'Output_uom'
]

// @TODO changes required.
// we can use module resolver for this
const directory = '../../../../src/data/Nutrition'

// //joining path of directory
const directoryPath = path.join(__dirname, directory)

// @TODO I don't like that this scripts are called as it is... looks un-cool
parseDirectoryFiles(directoryPath, headers)
