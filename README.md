#### Static food wrapper module

Table of Contents
=================

 * [Synopsis](#synopsis)
 * [Additional information](#additional-information)
 * [Installation](#installation)
 * [Code Example](#code-example)
 * [Test](#tests)
 * [Contributors](#contributors)
 * [Credits](#credits)
 * [Junk](#junk)


#### Synopsis
  This is a module for using ...
  
[![Build Status](https://travis-ci.org/GroceriStar/sd.svg?branch=master)](https://travis-ci.org/GroceriStar/sd)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

#### Additional information
xxx

#### Installation

`npm install @groceristar/sd-wrapper`

or

`yarn add @groceristar/sd-wrapper`



#### Code Example

xxx

---

#### Tests

```
npm test
```

#### Contributors

@vadim9999, @atherdon, @wahaj-47, @tihaami @EbrahimKreem @elnur004 @hirdbluebird

#### structure
![image](https://user-images.githubusercontent.com/1469198/56497029-9a07fc80-6504-11e9-91ca-0aa4a3ec1ef8.png)

![image](https://user-images.githubusercontent.com/1469198/56497034-9eccb080-6504-11e9-8ca9-0ef32903d927.png)

#### jsonlint

```npm run jsonlint``` or ```yarn jsonlint```

#### ESLint fix

``` npm run code-fix``` or ```yarn code-fix```

---

https://github.com/sheerun/babel-plugin-file-loader#example-usage


- [ ] Should `data` folder be inside `src` or we can just copy it on build?

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
