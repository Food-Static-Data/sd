import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'
//import json from 'json'

const extensions = [
  '.js', '.json'
];

const name = 'StaticDataWrapper';

export default {
  input: './src/index.js',

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external: [],

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({ extensions, include: ['src/**/*'] }),
  ],

  output: [{
    file: pkg.main,
    format: 'cjs',
  }, {
    file: pkg.module,
    format: 'es',
  }, {
    file: pkg.browser,
    format: 'iife',
    name,

    // https://rollupjs.org/guide/en#output-globals-g-globals
    globals: {},
  }],
};



var rollup = require('rollup')
var babel = require('rollup-plugin-babel')
// @TODO install that modules and connect them
// rollup-plugin-json
// rollup-plugin-node-resolve
rollup.rollup({
  entry: 'src/main.js', // 'src/index.js'
  plugins: [ babel() ]
}).then(function (bundle) {
  bundle.write({
    dest: 'dist/bundle.js',
    format: 'umd'
  })
})
