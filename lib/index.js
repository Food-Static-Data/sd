"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ClearCardsExample   from '~/ClearCardsExample/ClearCardsExample';
//
// import GeneratePDFButton from '~/GeneratePDFButton/GeneratePDFButton';
//
// import { readFileSync } from 'fs'
//
// import {fs} from 'fs';
var file = _path.default.resolve(__dirname, './data/Allergy/allergies.json');

var output = _fs.default.readFileSync(file); // var output = fs.readFileSync('./someData.txt')


console.log(output);
console.log(JSON.parse(JSON.stringify(file)));