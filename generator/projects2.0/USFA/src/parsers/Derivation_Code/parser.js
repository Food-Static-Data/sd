import path from 'path'

// @TODO // we can use module resolver for this
import { parseDirectoryFiles } from '../../../csvParser'

const headers = [
  'derivation_code',
  'Derivation_Descript'
]

// @TODO changes required.
// we can use module resolver for this
const directory = '../../../src/data/Derivation_Code_Description'

// //joining path of directory
const directoryPath = path.join(__dirname, directory)

// @TODO I don't like that this scripts are called as it is... looks un-cool
parseDirectoryFiles(directoryPath, headers)
