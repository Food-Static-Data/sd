const path = require('path')
const { parseDirectoryFiles } = require('../../../csv_parser')

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

const dir = '../../../../src/data/Product'
// //joining path of directory
const directoryPath = path.join(__dirname, dir)

parseDirectoryFiles(directoryPath,headers)
