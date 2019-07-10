const path = require('path')
const { generateFiles } = require('@groceristar/static-data-generator')
const pathToSrc = path.join(__dirname, '../src')

console.log(pathToSrc)
generateFiles(pathToSrc)
