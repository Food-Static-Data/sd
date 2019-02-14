// import ClearCardsExample   from '~/ClearCardsExample/ClearCardsExample';
//
// import GeneratePDFButton from '~/GeneratePDFButton/GeneratePDFButton';

//
// import { readFileSync } from 'fs'
//
// import {fs} from 'fs';

import { readFileSync }   from 'fs'
import path from 'path'

const file = path.resolve(__dirname, './data/Allergy/allergies.json')
var output = readFileSync(file)
// var output = fs.readFileSync('./someData.txt')

console.log(output)
console.log(JSON.parse(JSON.stringify(file)))

export {
  // output
}
