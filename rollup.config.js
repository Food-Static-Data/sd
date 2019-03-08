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
