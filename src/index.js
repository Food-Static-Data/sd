// or use better way
// import { map, uniq, tail } from 'lodash';

// import fs, { readFileSync } from 'fs'
// import path from 'path'

//@TODO maybe later we'll just have an index file, in order to simplify import logic?
// looks like rollup has a good codegen features

// import { version } from '../package.json'
// @TODO should we use .json in import?
import allergies from '~/Allergy/allergies.json'
import course from '~/Course/courses.json'
import cuisine from '~/Cuisine/cuisines.json'
import departments from '~/Departments/departments.json'
import diet from '~/Diet/diets.json'
import grocery from '~/Grocery/grocery.json'
import holiday from '~/Holiday/holidays.json'
// will crash here, because we have a few ingredients packs...
import ingredients from '~/Ingredients/ingredients.json'
// @TODO import sub-stuff like items, etc in order to make fetch works well....

//will crash here, because we need to import another file as well
import mealCalendar from '~/MealCalendar/mealcalendar.json'
import measurements from '~/Measurement/measurements.json'

import menu from '~/Menu/menu.json'

import nutritions from '~/Nutrition/nutritions1.json'


import users from '~/Users/users.json'



// import pkg from './package.json';
// console.log( `running version ${pkg.version}` );


// const allergyFilePath = './data/Allergy/allergies.json';
//
// const file = path.resolve(__dirname, allergyFilePath)

// const allergyFilePath = './data/Allergy/allergies.json';

// const file = path.resolve(__dirname, './data/Allergy/allergies.json')
// var output = readFileSync(file, 'utf8')
// var output = readFileSync(path.resolve(__dirname, './data/Allergy/allergies.json'), 'utf8')

// const json_or_not = JSON.parse(JSON.stringify(output))
// console.log(output)
// console.log(JSON.parse(JSON.stringify(file)))
// console.log(JSON.parse(JSON.stringify(file)))

export default {
  // output,
  // file
  allergies,
  course,
  cuisine ,
  departments,
  grocery,
  holiday,
  ingredients,
  mealCalendar,
  measurements,
  menu,
  nutritions,
  users,
}
