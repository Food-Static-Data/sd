<p align="center"><img src="https://avatars2.githubusercontent.com/u/36658223?s=200&v=4" alt=""/></p>
<p>Static food wrapper module</p>

[![Build Status](https://travis-ci.org/GroceriStar/sd.svg?branch=master)](https://travis-ci.org/GroceriStar/sd) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Table of Contents
=================

 * [Quick Start](#additional-information)
 * [What's included](#installation)
 * [Bugs and feature requests](#code-example)
 * [Documentation](#tests)
 * [Contributors](#contributors)


 Creators
 Thanks
 Copyright and license

## Quick Start
Several quick start options are available:
* Clone the repo: `git clone https://github.com/GroceriStar/sd.git`
* Install with npm: `npm install @groceristar/sd-wrapper`
* Install with yarn: `yarn add @groceristar/sd-wrapper`

## What's included
Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
.
├── docs
├── generator
├── output
├── src                  # Test files (alternatively `spec` or `tests`)
README.md
```

We provide compiled JS, as well as compiled and minified JS.

## Bugs and feature requests

Have a bug or a feature request? Please first read the issue guidelines and search for existing and closed issues. If your problem or idea is not addressed yet, please open a new issue.

## Documentation
Are we have documentation? If no, it should be written

#### NPM commands
- build: `yarn build`. In folder `dist` will be compiled three files with `.cjs`, `es.js`, `iife.js` extensions. Files contain output data of recipes, departments, etc.
- jsonlint: `npm run jsonlint` or `yarn jsonlint`
- ESLint fix: `npm run code-fix` or `yarn code-fix`
- generate files: `npm run generateFiles`. More detailed information [here](#how-to-generate)

## How to generate additional files
To run generator (it will run in writeFile.js function writeFiles()) `npm run generateFiles` to know if writing is success in console you will see `file generated successfully!` it will write multiple files.
In function `writeFiles()` should be array of files. In array config of objects. First property in object should be `name` and value filename, the second `data` and in value set function that returns data.
By default generating files happens in `/src/data`
Also you can write one file using function writeFile() just give it two parameters first -  path, second data that will need to write. Data should be object and json format.

## Contributors
@vadim9999, @atherdon, @wahaj-47, @tihaami @EbrahimKreem @elnur004 @hirdbluebird
