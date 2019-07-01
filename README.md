<p align="center"><img src="https://avatars2.githubusercontent.com/u/36658223?s=200&v=4" alt=""/></p>
<p>Static food wrapper module</p>

[![Build Status](https://travis-ci.org/GroceriStar/sd.svg?branch=master)](https://travis-ci.org/GroceriStar/sd)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.png?v=103)](https://github.com/GroceriStar/sd/)
[![Javascript](https://badges.frapsoft.com/javascript/code/javascript.svg?v=101)](https://github.com/GroceriStar/sd/)
[![Coveralls](http://img.shields.io/coveralls/GroceriStar/sd.svg?style=flat)](https://coveralls.io/r/GroceriStar/sd)
[![Maintainability](https://api.codeclimate.com/v1/badges/ee4c65ca8e215b11a34b/maintainability)](https://codeclimate.com/github/GroceriStar/sd/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ee4c65ca8e215b11a34b/test_coverage)](https://codeclimate.com/github/GroceriStar/sd/test_coverage)
[![npm version](http://img.shields.io/npm/v/@groceristar/sd-wrapper.svg?style=flat)](https://npmjs.org/package/@groceristar/sd-wrapper "View this project on npm")

Table of Contents
=================

 * [Quick Start](#quick-start)
 * [What's included](#installation)
 * [Methods for JSON file generation](#generate-array-api)
 * [Bugs and feature requests](#code-example)
 * [Documentation](#tests)
 * [Contributors](#contributors)




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
│   └── Readme.md           # Secondary information about project
├── generator               
│   ├── projects            # Tests for self-titled projects
│   │   ├── ChickenKyiv
│   │   ├── GraphQL
│   │   ├── GroceriStar
│   │   ├── GS-Loopback
│   │   ├── MealCalendar
│   │   ├── Search
│   │   ├── Showcase
│   │   └── UnitConvertion
│   ├── configGenerator.js  
│   ├── generateArray.js   
|   ├── csvParser.js
│   ├── generateFile.js     
│   ├── generateFiles.js    
│   └── writeFile.js        
├── output                  # Output folder for [NPM generator] commands
├── dist                    # Output folder for [NPM compiler] commands
└── src                     # Folder with static JSON files. WTF what is going on here
.gitignore
README.md
package.json
babel.config.js
jest.config.js
rollup.config.js
LICENSE
```

We provide compiled JS, as well as compiled and minified JS.

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
- `npm run generateFiles` or `yarn generateFiles`: generate all recipes in folder `dist`
- `npm run generateFile`  or `yarn generateFile`: generate meal on two weeks in folder `dist`
- `npm run generateArray` or `yarn generateArray`: More detailed information [here](#how-to-generate)

#### Parser commands
- `npm run parseCsv` or `yarn parseCsv` : parse from csv to json Food Composition

## How to generate additional files
To run generator (it will run in writeFile.js function writeFiles()) `npm run generateFiles` to know if writing is success in console you will see `file generated successfully!` it will write multiple files.

In function `writeFiles()` should be array of files. In array config of objects.
First property in object should be `name` and value filename, the second `data` and in value set function that returns data.
By default generating files happens in `/src/data`

Also you can write one file using function `writeFile()` just give it two parameters first -  `path`, second `data` that will need to write. Data should be object and JSON format.

## How to split json into single elements
To split json file you will require `sd/generator/writeFile.js` . Call the function **splitObject()** with parameters `path`(as string),`filename`(as string) and a `flag`(0 or 1).
`Flag=0` means splitted elements are to be name after the `name` attribute and if `flag=1` then elements will be give named by a number with removed whitespaces and in lowercase to maintain uniformity.
The splitted elements will be stored at the given `path`/`filename_elements`.

**splitObject('path_of_directory','fileName',0)** - split files by their name attribute.

**splitObject('path_of_directory','fileName',1)** - split files by indexing them from 0.

Checkout the folder `fileName_elements` in the `path_of_directory` to see files or you can use function `getFileInfo()`.

To  call the function `getFileInfo(path,flag,fileName)` you will require `sd/src/utils.js`. It can be invoked with 3 parameteres and 2 of them are optional depending on task. First parameter is `path` and it is required for functionality. The second and third parameters are `flag` and `fileName`. 

If `flag=1` it will return the content of all files present in the path else if `fileName` is given then it will return the content of the specified file.

If there is only one parameter that is `path` or with `flag=0` it will return list of all files present in the directory.

You can combine objects by calling function **combineObjects()** from writeFile.js. It takes 2 parameters `path` and list of `keys_to_be_removed`.

**combineObject(path, keys_to_be_removed)** - This will read all files in the given path and remove the keys given the list of keys_to_be_removed and saves it into a new file in the given `path` as name `<dirName>_combined.json`.

Example:- combineObject('/abc/pqr/', ['id', 'img'])

If you want to modify the json structure of splitted files and combine them again to a single file then you can call splitObject with a call back function.
```
const writeFile = require('path to sd/generator/writeFile.js')
var path = "/path/of/the/file/"
writeFile.splitObject(path, 'filename.json', 1, writeFile.combineObject, ['key1', 'key2'])
```

**getFileInfo('path_of_directory')** - returns a list of files present in the directory.

Sample Output:
~~~
[ 'some_file_abc.json',
  'some_file_pqr.json',
  'some_file_xyz.json' ]
~~~

**getFileInfo('path_of_directory',1)** - returns contents of all json files present in the directory.

Sample Output:
~~~
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
~~~

**getFileInfo('path_of_directory',1,'fileName')** - returns content of the given file from the directory.

Sample Output:
~~~
{ departments: [ 'Other' ],
  id: 14,
  name: 'number-four9',
  img: false,
  desc: false,
  slug: false }
~~~


### How to parse csv File(s) from a folder to to json file(s)
Create a folder you want the generated json file(s) to be. Also create a parser.js file in the created folder.In parser.js call ParseDirectoryFiles() from sd/generator/csvParser.js with parameters directoryPath (the folder to read your csv file(s) from) as string,and headers (the header of the csv files ) as array of string.

In sd/generator/csvPparser.js 

ParseDirectoryFiles(directoryPath,headers)=>csvToJson(directory,file,headers)=>splitJsonFile(fileName)=>filewriter(i,fileName,start,stop)

ParseDirectoryFiles gets a directory path from call,and reads all files in the directory but will only pass csv files to csvToJson(directory,file,headers).Each csv file is passed into csvParser().
csvToJson require csv-Parser modules
csvToJson () --get the file directory path,filename(file) and headers and generate a Json file for the csv files using the headers as keys.
The Json file generated is stored in variable result.
File Name is passed is to splitJsonFile(file) to keep track of the file being

variable numberOfFile stores the number of json files to get from Json stored in result.so that each json  file has maximium entry of 10000 stored in variable maxEntries.Filewriter function is called inside the splitJsonFile function
 
filewriter() – requires writeFile from sd/generator to work.It takes in the child number of the json file( i ) ,the file name( fileName ),the interval the json stored in result should start and stop slicing.the sliced data will be written into the folder calling parserFile function along side file name being parsed and the child number of the file.

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

**favorites()** - returns an array of objects, where each object has ingredients and groceries for specified user
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

**getFavoritesKey()** - returns an array of objects, where each object has key,ingredients and groceries for specified user
~~~
[
  {
    key:String,
    ingredient_id: String,
    user_id: String,
    favs: String,
    grocery_id: String
  }
]
~~~

**getDepartmentsKey()** - returns an array of objects, where each object has generated department_id,department,created and updated date
~~~
[
  {
  department_id: String
    name: String,
    desc: String,
    created_at: Date,
    updated_at: Date
  }
]
~~~


**getUserGroceryKey()** - returns an array of objects, where each object has key and userID and groceryID
~~~
[
  {
    key:String,
    user_id: String,
    grocery_id: String
  }
]
~~~

**getItemsKey()** - returns an array of objects, where each object has key and item parameter
~~~
[
  {
    key:String,
    item_id: String,
    name: String,
    description: String,
    quantity: Number,
    purchase: Boolean
  }
]
~~~


**getUsersKey()** - returns an array of objects, where each object has key ,useId,favs,ingredient_id and grocery_id
~~~
[
  {
    key:String,
    userId: String,
    favs:Boolean,
    ingredient_id:Number,
    grocery_id: Number

  }
]
~~~

**getIngredientsKey()** - returns an array of objects, where each object has generated ingredient_id,fav,name,description,
custom,created and updated date,id and department_id
~~~
[
  {
     ingredient_id:String,
    favs: String,
    name: String,
    description: String,
    custom: Boolean,
    created_at: Date,
    updated_at: Date,
    id_1: Number,
    department_id: Number

  }
]
~~~

**getGroceryKey()** - returns an array of objects, where each object has generated grocery_id,favs,name,img
slug,created and updated date,id and description
~~~
[
  {
     grocery_id:String,
    name: :String,
    img: :Boolean,
    desc: :String,
    slug: :Boolean,
    created_at:Date,
    updated_at:Date,
    id_1: Number,
    favs: Boolean

  }
]
~~~

**getKeyArrayDepAndIng()** - returns an array of objects, where each object  stores ingredient key as department key
~~~
[
  {
    key:String
  }
]
~~~

---



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

Support
-------

__Bugs and requests__: submit them through the project's issues tracker.<br>
[![Issues](http://img.shields.io/github/issues/GroceriStar/sd.svg)]( https://github.com/GroceriStar/sd/issues )


<!-- Creators
 Thanks
 Copyright and license
-->
