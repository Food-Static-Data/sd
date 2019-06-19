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
Core of generating files is in folder generator. 
To run generator (it will run in writeFile.js function writeFiles()) `npm run generateFiles` to know if writing is success in console you will see `file generated successfully!` it will write multiple files.

In function `writeFiles()` should be array of files. In array config of objects.
First property in object should be `name` and value filename, the second `data` and in value set function that returns data.
By default generating files happens in `/src/data`

Also you can write one file using function `writeFile()` just give it two parameters first -  `path`, second `data` that will need to write. Data should be object and JSON format.
