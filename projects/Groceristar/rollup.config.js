// plugins that we are going to use
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import json from 'rollup-plugin-json'
// import copy from 'rollup-plugin-copy-assets'
import builtins from 'rollup-plugin-node-builtins'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'
import notify from 'rollup-plugin-notify'

// import cleanup from 'rollup-plugin-cleanup';
// https://github.com/mjeanroy/rollup-plugin-prettier
// https://gitlab.com/IvanSanchez/rollup-plugin-file-as-blob

const extensions = [
  '.js', '.json'
]

const name = 'StaticDataWrapper'

// packages that should be treated as external or global dependencies, not bundled
const { external, globals } = {
  'globals': {
    'fs': 'fs',
    'uuid': 'uuid',
    'path': 'path',
    '@groceristar/sd-wrapper':'@groceristar/sd-wrapper'
  },
  'external': [
    'fs',
    'path',
    'uuid',
    '@groceristar/sd-wrapper'
  ]
}

export default {
  // source file / entrypoint
  input: './src/index.js',

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external,
  globals,

  // list of plugins used during building process
  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({
      extensions,
      include: ['src/*'],
      // include: ['src/**/*'],
      exclude: [
        'node_modules/**',
        '/src/data/__tests__'
        // '/src/data/json-tests'
      ]
      // exclude: 'node_modules/**'
      // presets: presets,
      // plugins: plugins
    }),

    // Allow Rollup to import data from JSON file
    // json()
    json({
      include: 'src/data/**',

      // for tree-shaking, properties will be declared as
      // variables, using either `var` or `const`
      preferConst: true,

      // generate a named export for every property of the JSON object
      namedExports: true // Default: true

    }),

    // juck fix in order to move json files to npm
    // copy({
    //   assets: [
    //     './src/data/**'
    //   ],
    // }),

    builtins(),

    // Displays rollup errors as system notifications
    notify()

  ],

  // output configuration
  output: [{
    file: pkg.main,
    format: 'cjs'
  }, {
    file: pkg.module,
    format: 'es'
  }, {
    file: pkg.browser,
    format: 'iife',
    name

    // https://rollupjs.org/guide/en#output-globals-g-globals
    // globals: {}
  }]
}
