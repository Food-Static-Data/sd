#### Notes

Next repo for this code will be stored here: https://github.com/GroceriStar/food-static-files-generator
Readme part: https://github.com/GroceriStar/sd#generator-commands

Should have
- ES6 style code
- Separated place for tests
- Separated build via Travis CI
- features like ESLint, updates, minification and stuff
- use module resolver in order to simplify long paths
- export different methods outside, so we can call them at our projects

- it should have a separated package.json, with only necessary modules that we have at generator

#### Tasks
https://github.com/GroceriStar/sd/issues/158
https://github.com/GroceriStar/sd/issues/332

#### Features

#### Stretch Goals
- work as a microservice that outside working as separated entity, by using code here.
- should generator have a frontend version available as well?

## How to generate additional files
In generator you will see folder structure like this:

```
├── configGenerator.js
├── csvParser.js
├── generateArray.js
├── generateFile.js
├── generateFiles.js
├── index.js
├── play
│   └── play.js
├── projects
│   ├── FoodComposition
│   │   ├── csv_parser.js
│   │   └── FoodComposition.json
│   ├── GraphQL
│   │   └── graphQL.js
│   ├── GroceriStar
│   │   └── groceristar.js
│   ├── GS-Loopback
│   │   └── loopback.js
│   ├── Measurements
│   │   └── Readme.md
│   └── USFA
│       ├── Derivation_Code_Description
│       │   ├── Derivation_Code_Description1.json
│       │   └── parser.js
│       ├── Nutrition
│       │   ├── Nutrient010.json
│       │   ├── Nutrient011.json
│       │   ├──       ...
│       │   ├── nutrition78.json
│       │   ├── nutrition79.json
│       │   └── parser.js
│       ├── Product
│       │   ├── parser.js
│       │   ├── Products01.json
│       │   ├── Products02.json
│       │   ├──      ...
│       │   ├── Products44.json
│       │   └── Products45.json
│       ├── Readme.md
│       └── Serving_Size
│           ├── parser.js
│           ├── Serving_Size10.json
│           ├── Serving_Size11.json
│           ├──       ...
│           ├── Serving_Size8.json
│           └── Serving_Size9.json
├── Readme.md
├── utils.js
└── writeFile.js
```

### Simple generation

Before starting generating files make this steps:
1. Add in `configGenerator.js` into array `config` object that will have structure like this:

```
{
    name: 'usersGrocery',
    data: usersGrocery()
}

```

This object should has two property:
1. `name` - filename of json.
2. `data` - array or object that you will want to write into json. Also this data should be json formatted. To make it more simple all functions that using configGenerator.js located in generateArray.js. 

You can add multiple objects!
Note 
By default generating files happens in `/src/data`. 

2. Run npm command that will start generating files

```
npm run generateFiles
```
You will see logging output about success generation.

### Advanced generation

Upper was simple instructions how works generation. To know how it works deeper see below.

When you will run command `npm run generateFiles` it will call function generateFiles() in generateFiles.js.
generateFiles() gets data from config and after some manipulation with path, calls `writeFile(path, data)` that in writeFile.js.

Note 
Also this method create folder if it doesn't exist.

Generator using this file:
1. configGenerator.js
2. generateFiles.js
3. writeFiles.js
