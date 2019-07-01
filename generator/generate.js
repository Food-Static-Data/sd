const { generateFiles } = require('@groceristar/static-data-generator')
const path = require('path')
const pathToSrc = path.join(__dirname,'../src')

console.log(pathToSrc);
generateFiles(pathToSrc)