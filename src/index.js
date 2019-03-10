
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

// const allergyFilePath = './data/Allergy/allergies.json';
//
// const file = path.resolve(__dirname, allergyFilePath)

const allergyFilePath = './data/Allergy/allergies.json';

// const file = path.resolve(__dirname, './data/Allergy/allergies.json')
// var output = readFileSync(file, 'utf8')
var output = readFileSync(path.resolve(__dirname, './data/Allergy/allergies.json'), 'utf8')

const json_or_not = JSON.parse(JSON.stringify(output))
// console.log(output)
// console.log(JSON.parse(JSON.stringify(file)))
// console.log(JSON.parse(JSON.stringify(file)))




export {
  // output,
  // file
  json_or_not
}
