import path from 'path'

// @TODO // we can use module resolver for this
import { parseDirectoryFiles } from '../../../csvParser'

const headers = [
  'NDB_No',
  'Serving_Size',
  'Serving_Size_UOM',
  'Household_Serving_Size',
  'Household_Serving_Size_UOM'
]

// @TODO changes required
const directory = '../../../../src/data/Serving_Size'

// //joining path of directory
const directoryPath = path.join(__dirname, directory)

// @TODO I don't like that this scripts are called as it is... looks un-cool
parseDirectoryFiles(directoryPath, headers)
