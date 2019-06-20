const path = require('path')
const { parseDirectoryFiles } = require('../../../csvParser')

const headers = [
  'derivation_code',
  'Derivation_Descript'
]

const directory = '../../../src/data/Derivation_Code_Description'

// //joining path of directory
const directoryPath = path.join(__dirname, directory)

parseDirectoryFiles(directoryPath, headers)
