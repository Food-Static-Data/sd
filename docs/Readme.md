we will put releases plan here


#### Generate Array
Nothing here :( ) So sad like very sad.

List of plugins related to this universe:
- https://github.com/GroceriStar/static-data

- https://github.com/atherdon/botkit-my-slack/blob/master/data/main_array.js

- https://github.com/GroceriStar/groceristar-fetch

- https://github.com/GroceriStar/static-data-website

- https://github.com/ChickenKyiv/awesome-dev-stuff/blob/master/npm-modules.md

- https://github.com/GroceriStar/es6-package

- https://github.com/GroceriStar/es6-package/blob/master/rollup.config.js
- https://github.com/GroceriStar/sd/

- https://github.com/GroceriStar/sd-plain


#### Plugins

`rollup-plugin-notify` https://github.com/MikeKovarik/rollup-plugin-notify

📟 Displays rollup errors as system notifications.

![Example](https://raw.githubusercontent.com/MikeKovarik/rollup-plugin-notify/master/example.gif)






### Babel alias

In the import section inside files can be found `~` symbol (alias). This is shorten path.
The `~` in imports will be replaced by string. The string is defined in Babel config file [babel.config.js](./babel.config.js).

Actual Babel alias config:

~~~~
alias: {
  '~': './src/data'
}
~~~~

---
### NodeJS Path

`Path` module is default NodeJS method. A `__dirname` variable in file will be replaced by absolute path of the file itself. More detailed information about method can be found at [official API documentation](https://nodejs.org/api/path.html#path_path_resolve_paths).

~~~~
const cup1 = path.resolve(__dirname, './src/data/Cup1/cup1.json')
~~~~

=======


## Minify
https://github.com/TrySound/rollup-plugin-terser

`yarn add rollup-plugin-terser --dev`

```
import { terser } from "rollup-plugin-terser";

rollup({
  input: "main.js",
  plugins: [terser()]
});
```


https://github.com/Comandeer/rollup-plugin-babel-minify

`npm install rollup-plugin-babel-minify [--save-dev]`



```
import { rollup } from 'rollup';
import minify from 'rollup-plugin-babel-minify';

rollup( {
	input: './src/index.js',
	plugins: [
		minify( {
			// Options for babel-minify.
		} )
	]
} );
```

`yarn add rollup-plugin-uglify --dev`

```
import { uglify } from "rollup-plugin-uglify";

rollup({
  input: "main.js",
  plugins: [uglify()]
});
```

- https://www.npmjs.com/package/rollup-plugin-minify-es
- https://www.npmjs.com/package/type-detect

- [ ] Connect meal calendar with a grocery list that we have.
- [ ] Grocery lists should be divided, not like it's right now.

- https://docs.travis-ci.com/user/languages/javascript-with-nodejs/
- https://www.grzegorowski.com/publishing-npm-package-with-rollup-babel-and/
- https://github.com/codecov/example-node/blob/master/.travis.yml


```"precommit": "yarn flow src && yarn lint && yarn test"``` - run before each commit to ensure commited code quality

```"prepublishOnly": "yarn clean && yarn lint && yarn test && yarn build"``` - run ONLY before yarn publish to ensure quality and most recent output



```
"husky": {
   "hooks": {
     "pre-commit": "yarn precommit"
   }
 }
```

#### Jest

Add it in your package.json:
```
"jest": {
  "coverageDirectory": "./coverage/",
  "collectCoverage": true
}
```
Jest will now generate coverage files into `coverage/`
Run your tests with a command like this:
`jest && codecov`



```
"renovate": {
  "extends": [
    "config:js-lib"
  ],
  "automerge": true,
  "major": {
    "automerge": false
  },
  "automergeType": "branch"
},
```
https://github.com/algolia/rollup-jest-boilerplate


#### Travis CI

stages:
  - smoke # this ensures a "user" install works properly
  - precache # warm up cache for default Node.js version
  - lint # lint code and docs
  - test # all tests

https://boneskull.com/mocha-and-travis-ci-build-stages/


  - stage: lint
  script: npm start lint

  https://medium.com/@ali.dev/how-to-publish-a-js-library-to-npm-with-rollup-typescript-8b51ede8f562


  external: [
  ...Object.keys(pkg.dependencies || {})
 ],

 llup-plugin-terser is a plugin which minifies the generated bundles. While minification will not affect bundle size when you have only a few exported functions, minification will drastically reduce bundle size the larger your library becomes.

#### Add coveralls

- https://docs.travis-ci.com/user/coveralls/
- https://github.com/dwyl/learn-coveralls.io
- https://www.youtube.com/watch?v=bt1iOy9lv0U
- https://docs.coveralls.io/
- https://stackoverflow.com/questions/39501417/how-can-i-connect-coveralls-and-travis-in-github
- https://medium.com/the-code-review/add-badges-for-travisci-coveralls-and-code-climate-to-your-readme-ruby-6d27caad74ed


#### Developers junk

- https://github.com/sheerun/babel-plugin-file-loader#example-usage
- https://github.com/sheerun/babel-plugin-file-loader
- https://github.com/sheerun/babel-plugin-file-loader#example-usage
- https://github.com/rollup/rollup/commit/c103967c6f5db503e25bbc0ae81a83742839fa53
- https://github.com/rollup/rollup-starter-lib

#### Files, that we publishing

```
"files": [
   "dist/*.js",
   "dist/*.d.ts",
   "bin/rollup"
 ]
 ```
