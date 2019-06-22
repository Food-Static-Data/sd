'use strict'

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
        '@utils': './src/utils.js',
        '@generator': './generator'
      }
    }
  ],
  [
    '@babel/plugin-syntax-dynamic-import'
  ]

]

module.exports = { presets, plugins }
