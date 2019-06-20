import path from 'path'

// @TODO // we can use module resolver for this
import { parseDirectoryFiles } from '../../../csvParser'

const headers = [
  'NDB_Number',
  'long_name',
  'data_source',
  'gtin_upc',
  'manufacturer',
  'date_modified',
  'date_available',
  'ingredients_english'
]

// @TODO changes required.
// we can use module resolver for this
const directory = '../../../../src/data/Product'
// //joining path of directory
const directoryPath = path.join(__dirname, directory)

// @TODO I don't like that this scripts are called as it is... looks un-cool
parseDirectoryFiles(directoryPath, headers)
