"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import ClearCardsExample   from '~/ClearCardsExample/ClearCardsExample';
//
// import GeneratePDFButton from '~/GeneratePDFButton/GeneratePDFButton';
//
// import { readFileSync } from 'fs'
//
// import {fs} from 'fs';
var output = _fs.default.readFileSync('./someData.txt');

console.log(output);