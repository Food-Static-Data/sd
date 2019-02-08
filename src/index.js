// import ClearCardsExample   from '~/ClearCardsExample/ClearCardsExample';
//
// import GeneratePDFButton from '~/GeneratePDFButton/GeneratePDFButton';

//
// import { readFileSync } from 'fs'
//
// import {fs} from 'fs';

import fs from 'fs'

var output = fs.readFileSync('./someData.txt')

console.log(output)

export {
  // output
}
