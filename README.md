<p align="center"><img src="https://avatars2.githubusercontent.com/u/36658223?s=200&v=4" alt=""/></p>
<p>Static food wrapper module</p>

[![Build Status](https://travis-ci.org/GroceriStar/sd.svg?branch=master)](https://travis-ci.org/GroceriStar/sd)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Coveralls](http://img.shields.io/coveralls/GroceriStar/sd.svg?style=flat)](https://coveralls.io/r/GroceriStar/sd)
[![Maintainability](https://api.codeclimate.com/v1/badges/ee4c65ca8e215b11a34b/maintainability)](https://codeclimate.com/github/GroceriStar/sd/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ee4c65ca8e215b11a34b/test_coverage)](https://codeclimate.com/github/GroceriStar/sd/test_coverage)
[![npm version](http://img.shields.io/npm/v/@groceristar/sd-wrapper.svg?style=flat)](https://npmjs.org/package/@groceristar/sd-wrapper "View this project on npm")

# Table of Contents

- [Quick Start](#quick-start)
- [What's included](#installation)
- [Bugs and feature requests](#code-example)
- [Documentation](#tests)
- [Contributors](#contributors)

## Quick Start

Several quick start options are available:

- Clone the repo: `git clone https://github.com/GroceriStar/sd.git`
- Install with npm: `npm install @groceristar/sd-wrapper`
- Install with yarn: `yarn add @groceristar/sd-wrapper`

## What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
.
├── docs
│   └── Readme.md           # Secondary information about project
/- update with our new folder changes /
└──package                  # Folder contains src folder and configuration files
    ├── dist                # Output folder for [NPM compiler] commands
    ├──src                  # Folder with static JSON files. WTF what is going on here
    └── test
    package.json
    babel.config.js
    jest.config.js
    rollup.config.js
    jsonlint.config.js
    lint-staged.config.js
    .eslintrc.json
    .huskyrc.js
    .snyk
    CONTRIBUTING.md
.gitignore
README.md
travis.yml
renovate.json
SECURITY.md
LICENSE
```

We provide compiled JS, as well as compiled and minified JS.


https://github.com/Food-Static-Data/sd/projects/1


## Bugs and feature requests

Have a bug or a feature request? Please first read the issue guidelines and search for existing and closed issues. If your problem or idea is not addressed yet, please open a new issue.

## Documentation

Are we have documentation? If no, it should be written





### NPM commands

#### Compiler commands

- `yarn bundle` or `npm run bundle`: in folder `dist` will be compiled three files with `.cjs`, `es.js`, `iife.js` extensions. Files contain output data of recipes, departments, etc.
- `yarn dev` or `npm run dev`: compile and watch for changes (run watcher)
- `jest`: Run tests through project
- `npm run jsonlint` or `yarn jsonlint`: validate JSON output files
- `npm run code-fix` or `yarn code-fix`: run [standard](https://www.npmjs.com/package/standard) linter with write permissions

#### Generator commands

- `npm run generate` or `yarn generate`: generate all recipes in folder `dist`.
  More detailed information [here](#how-to-generate)

#### Parser commands

- `npm run parseCsv` or `yarn parseCsv` : parse from csv to json Food Composition

## How to generate additional files

To run generator (it will run in writeFile.js function writeFiles()) `npm run generateFiles` to know if writing is success in console you will see `file generated successfully!` it will write multiple files.

In function `writeFiles()` should be array of files. In array config of objects.
First property in object should be `name` and value filename, the second `data` and in value set function that returns data.
By default generating files happens in `/src/data`

Also you can write one file using function `writeFile()` just give it two parameters first - `path`, second `data` that will need to write. Data should be object and JSON format.

## How to split json into single elements

**--- update information about how to use generator module ---**

```
const writeFile = require('path to sd/generator/writeFile.js')
var path = "/path/of/the/file/"
writeFile.splitObject(path, 'filename.json', 1, writeFile.combineObject, ['key1', 'key2'])
```

**getFileInfo('path_of_directory')** - returns a list of files present in the directory.

Sample Output:

```
[ 'some_file_abc.json',
  'some_file_pqr.json',
  'some_file_xyz.json' ]
```

**getFileInfo('path_of_directory',1)** - returns contents of all json files present in the directory.

Sample Output:

```
[ { departments: [ 'Other' ],
    id: 14,
    name: 'number-four9',
    img: false,
    desc: false,
    slug: false },
  { departments: [ 'Other' ],
    id: 7,
    name: 'Rabel Dietitian',
    img: false,
    desc: false,
    slug: false } ]
```

**getFileInfo('path_of_directory',1,'fileName')** - returns content of the given file from the directory.

Sample Output:

```
{ departments: [ 'Other' ],
  id: 14,
  name: 'number-four9',
  img: false,
  desc: false,
  slug: false }
```

## Contributors

@vadim9999, @atherdon, @wahaj-47, @tihaami, @EbrahimKreem, @elnur004, @hirdbluebird, @Beni03, @Edebo, @uniyalprashant9

#### publish at npm

```
- npm login
- - username
- - password
- - email
- npm version patch
- git commit
- npm publish
- git push --tags (if tag was not created - https://www.atlassian.com/git/tutorials/inspecting-a-repository/git-tag)

```

## Support

**Bugs and requests**: submit them through the project's issues tracker.<br>
[![Issues](http://img.shields.io/github/issues/GroceriStar/sd.svg)](https://github.com/GroceriStar/sd/issues)

<!-- Creators
 Thanks
 Copyright and license
-->
