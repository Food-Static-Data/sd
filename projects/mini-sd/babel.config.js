'use strict'

// const path = require('path')

const presets = [
  ['@babel/preset-env', {
    'modules': false
  }]
  // {
  //
  // }
]
// Add this to working tests
// const env = {
//   test: {
//     presets: [['@babel/preset-env']]
//   }
// }

const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ['./src/'],
      alias: {
        '~': './src/data',
        '@files': './src/files.js',
        '@filesObjects': './src/filesObjects.js',
        '@utils': './src/utils.js',
      }
    }
  ],
  [
    '@babel/plugin-syntax-dynamic-import'
  ]
  // ["@babel/proposal-object-rest-spread"]
]

module.exports = { presets, plugins }
