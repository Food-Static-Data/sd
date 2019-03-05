
// import GeneratePDFButton from '~/GeneratePDFButton/GeneratePDFButton';

//
// import { readFileSync } from 'fs'
//
// import {fs} from 'fs';

// import _         from 'lodash';
// or use better way
// import { map, uniq, tail } from 'lodash';



import { readFileSync }   from 'fs'
import path from 'path'

const allergyFilePath = './data/Allergy/allergies.json';

const file = path.resolve(__dirname, allergyFilePath)
var output = readFileSync(file)
// var output = fs.readFileSync('./someData.txt')

console.log(output)
console.log(JSON.parse(JSON.stringify(file)))




export {
  // output,
  allergy:file 
}
