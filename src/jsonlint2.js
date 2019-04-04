import shell from 'shelljs'
import path from 'path'

import { allergies } from './files.js'

let filePath = path.resolve(__dirname, allergies)


console.log(shell)
console.log(allergies)
console.log(filePath)

shell.exec('jsonlint ' + filePath)
