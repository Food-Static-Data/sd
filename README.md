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

## How to generate additional files
To run generator (it will run in writeFile.js function writeFiles()) `npm run generateFiles` to know if writing is success in console you will see `file generated successfully!` it will write multiple files.

In function `writeFiles()` should be array of files. In array config of objects.
First property in object should be `name` and value filename, the second `data` and in value set function that returns data.
By default generating files happens in `/src/data`

Also you can write one file using function `writeFile()` just give it two parameters first -  `path`, second `data` that will need to write. Data should be object and JSON format.

## How to split json into single elements.
To split json file (sd/src/data/Grocery/grocery.json) you will require `sd/generator/writeFile.js` . Call the function `splitObject()` with parameters `path`(as string),`filename`(as string) and a `flag`(0 or 1).
`Flag`=0 means splitted elements are to be name after the `name` attribute and if `flag`=1 then elements will be give named by a number with removed whitespaces and in lowercase to maintain uniformity.
The splitted elements will be stored at the given `path`/`filename_elements`.

Call function `getList()` with parameter `path`(as string) to get a list of all files.
To get the data stored in all json files call `getListContent()` with parameter `path`(as string), this will return a list containing data.

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
