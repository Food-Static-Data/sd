# ->Static food wrapper module -<

Table of Contents
=================

 * [Quick Start](#additional-information)
 * [Status](#synopsis)
 * [What's included](#installation)
 * [Bugs and feature requests](#code-example)
 * [Documentation](#tests)
 * [Contributors](#contributors)
 * [Credits](#credits)
 * [Junk](#junk)


 Creators
 Thanks
 Copyright and license

## Quick Start
Several quick start options are available:
* Clone the repo: `git clone https://github.com/GroceriStar/sd.git`
* Install with npm: `npm install @groceristar/sd-wrapper`
* Install with yarn: `yarn add @groceristar/sd-wrapper`

## Status

[![Build Status](https://travis-ci.org/GroceriStar/sd.svg?branch=master)](https://travis-ci.org/GroceriStar/sd)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## What's included
Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:
.
├── docs
├── generator
├── output
├── src                  # Test files (alternatively `spec` or `tests`)
README.md

We provide compiled JS, as well as compiled and minified JS.

## Bugs and feature requests

Have a bug or a feature request? Please first read the issue guidelines and search for existing and closed issues. If your problem or idea is not addressed yet, please open a new issue.

#### Documentation
Are we have documentation? If no, it should be written

#### Contributors

@vadim9999, @atherdon, @wahaj-47, @tihaami @EbrahimKreem @elnur004 @hirdbluebird



#### jsonlint

```npm run jsonlint``` or ```yarn jsonlint```

#### ESLint fix

``` npm run code-fix``` or ```yarn code-fix```

---


- [ ] Should `data` folder be inside `src` or we can just copy it on build?



#### How to generate additional files
to run generator (it will run in writeFile.js function writeFiles())
```
npm run generateFiles
```
to know if writing is success in console you will see
`file generated successfully!`

it will write multiple files.
in function writeFiles() should be array of files. In array config of objects. First property in object should be `name` and value filename, the second `data` and in value set function that returns data.

by default generating files happens in `/src/data`

Also you can write one file using function writeFile() just give it two parameters first -  path, second data that will need to write. Data should be object and json format

---
#### Generate Array

nothing here :( ) So sad like very sad.
----

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

---
#### Plugins

``` rollup-plugin-notify ``` https://github.com/MikeKovarik/rollup-plugin-notify

📟 Displays rollup errors as system notifications.

![Example](https://raw.githubusercontent.com/MikeKovarik/rollup-plugin-notify/master/example.gif)

---



Developers junk


https://github.com/sheerun/babel-plugin-file-loader#example-usage


- https://github.com/sheerun/babel-plugin-file-loader
- https://github.com/sheerun/babel-plugin-file-loader#example-usage

- https://github.com/rollup/rollup/commit/c103967c6f5db503e25bbc0ae81a83742839fa53

- https://github.com/rollup/rollup-starter-lib


```
"files": [
   "dist/*.js",
   "dist/*.d.ts",
   "bin/rollup"
 ]
 ```
#### Minify

https://github.com/TrySound/rollup-plugin-terser

```yarn add rollup-plugin-terser --dev```

```

import { terser } from "rollup-plugin-terser";

rollup({
  input: "main.js",
  plugins: [terser()]
});
```


https://github.com/Comandeer/rollup-plugin-babel-minify
npm install rollup-plugin-babel-minify [--save-dev]
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



---

```


yarn add rollup-plugin-uglify --dev

```
import { uglify } from "rollup-plugin-uglify";

rollup({
  input: "main.js",
  plugins: [uglify()]
});
```

https://www.npmjs.com/package/rollup-plugin-minify-es

https://www.npmjs.com/package/type-detect

- [ ] Connect meal calendar with a grocery list that we have.
- [ ] Grocery lists should be divided, not like it's right now.

---



https://docs.travis-ci.com/user/languages/javascript-with-nodejs/
https://www.grzegorowski.com/publishing-npm-package-with-rollup-babel-and/
https://github.com/codecov/example-node/blob/master/.travis.yml



"precommit": "yarn flow src && yarn lint && yarn test" - run before each commit to ensure commited code quality
"prepublishOnly": "yarn clean && yarn lint && yarn test && yarn build" - run ONLY before yarn publish to ensure quality and most recent output
Other tools and files

![Example](https://raw.githubusercontent.com/MikeKovarik/rollup-plugin-notify/master/example.gif)
---

#### How to generate additional files
to run generator (it will run in writeFile.js function writeFiles())
```
npm run generateFiles
```
to know if writing is success in console you will see
`file generated successfully!`

it will write multiple files.
in function writeFiles() should be array of files. In array config of objects. First property in object should be `name` and value filename, the second `data` and in value set function that returns data.

by default generating files happens in `/src/data`

---

"husky": {
   "hooks": {
     "pre-commit": "yarn precommit"
   }
 }

 ----

 Jest
Add it in your package.json:

"jest": {
  "coverageDirectory": "./coverage/",
  "collectCoverage": true
}
Jest will now generate coverage files into coverage/

Run your tests with a command like this:

jest && codecov


## Generate Array API

**getMenuGenerator(number_of_weeks)** - return an array of objects with weekly menu. Menus sorted in calendar date order starting from first.
~~~~
[
  {
    id: __generatedID,
    title: String,
    date: __generatedDate,
    description: String,
    notes: String,
  },
]
~~~~

**generateArrWithId(data, idName)** - return an array of objects, where each object has autogenerated ID.
Output:
~~~~
[
  {
    ...item,
    id: __generatedID
  },
]
~~~~

**favorites()** - returns an array of objects, where each object has ingridients and groceries for specified user
~~~
[
  {
    ingredient_id: String,
    user_id: String,
    favs: String,
    grocery_id: String,
  },
]
~~~

**usersGrocery()** - returns an array of objects, where each object has userID and groceryID
~~~
[
  {
    user_id: String,
    grocery_id: String,
  },
]
~~~

**items()** - returns an array of objects, where each object has item parameters
~~~
[
  {
    item_id: String,
    name: String,
    description: String,
    quantity: Number,
    purchase: Boolean,
  },
]
~~~

**getMeasurementUnits()** - returns an array of objects, where each object has measurement unit parameters
~~~
[
  {
    id: String,
    system_id: String,
    type: String,
    name: String,
    singular: String,
    plural: String,
    short: String,
    pattern: String,
    error: Null,
  }
]
~~~

**getMeasurementSystem()** - returns an array of objects, where each object has... measurements
~~~
[
  {
    id: String,
    alias: String,
    title: String,
  }
]
~~~

---
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

https://github.com/algolia/rollup-jest-boilerplate


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


 ----------
