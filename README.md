
[![Build Status](https://travis-ci.org/GroceriStar/sd.svg?branch=master)](https://travis-ci.org/GroceriStar/sd)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
