import shell from 'shelljs'
import path from 'path'

import allergies from './files.js'

let filePath = path.resolve(__dirname, allergies)

shell.exec('jsonlint ' + filePath)