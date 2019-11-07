const allergy = require('./allergy')
const attribute = require('./attribute')
const cookingTimes = require('./cookingTimes')
const course = require('./course')
const cuisine = require('./cuisine')
const cup18 = require('./cup1_8')
const cup1 = require('./cup1')
const cup34 = require('./cup3_4')
const dash = require('./dash')
const department = require('./department')
const diet = require('./diet')
const favorites = require('./favorites')
const firstVeganGLMC = require('./firstVeganGLMC')
const gallon = require('./gallon')
const grocery = require('./grocery')
const halfCup = require('./halfCup')
const holiday = require('./holiday')
const ingredients = require('./ingredients')
const items = require('./items')
const mealCalendar = require('./mealCalendar')
const measurement = require('./measurement')
const menu = require('./menu')
const nutritionalAttributes = require('./nutritionalAttributes')
const pinch = require('./pinch')
const pint = require('./pint')
const quart = require('./quart')
const quarterCup = require('./quarterCup')
const recipe4 = require('./recipe4')
const tablespoon = require('./tablespoon')
const teaspoon = require('./teaspoon')
const types = require('./types')
const userGrocery = require('./userGrocery')
const users = require('./users')

const component = [
  allergy,
  attribute,
  cookingTimes,
  course,
  cuisine,
  cup18,
  cup1,
  cup34,
  dash,
  department,
  diet,
  favorites,
  firstVeganGLMC,
  gallon,
  grocery,
  halfCup,
  holiday,
  ingredients,
  items,
  mealCalendar,
  measurement,
  menu,
  nutritionalAttributes,
  pinch,
  pint,
  quart,
  quarterCup,
  recipe4,
  tablespoon,
  teaspoon,
  types,
  userGrocery,
  users
]

var item = component.find(myItem)

function myItem (value) {
  return value === allergy
}

console.log(item)

var item2 = component.find(myItem2)

function myItem2 (value) {
  return value === attribute
}

console.log(item2)

// var item = component[4]

// console.log(item)

module.exports = {
  component
}
