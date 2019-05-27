const _ = require('lodash')
const filePath = require('../files')
const { __generateDate, __generateId } = require('../src/utils')

// @TODO change require by using variables from filesObjects.js
var users = require(filePath['users'])
var grocery = require(filePath['grocery'])
var ingredients = require(filePath['ingredients'])
var measurementSystem = require(filePath['measurementSystem'])
var measurementUnits = require(filePath['measurementUnits'])

const getMenuGenerator = numberOfWeeks => {
  let
    result = _.times(numberOfWeeks, (index) => ({
      id: __generateId(),
      title: `Weekly menu ${index}`,
      date: __generateDate(),
      description: `description for Weekly menu ${index}`,
      notes: `This is a chef notes for wm ${index}`
    }))
  return result
}

function generateArrWithId (data, id) {
  return data.map(element => {
    return {
      ...element,
      [id]: __generateId()
    }
  })
}

function favorites () {
  var groceryId = generateArrWithId(grocery, 'grocery_id')
  var usersId = generateArrWithId(users, 'user_id')
  var ingredientsId = generateArrWithId(ingredients, 'ingredient_id')

  var result = []

  usersId.map((user, index) => {
    result.push({
      'ingredient_id': ingredientsId[index++]['ingredient_id'],
      'user_id': user['user_id'],
      'favs': 'desc for department' + index,
      // one grocery id for all users
      'grocery_id': groceryId[index++]['grocery_id']
    })
    // @TODO why we have this structure in second time?
    result.push({
      'ingredient_id': ingredientsId[index++]['ingredient_id'],
      'user_id': user['user_id'],
      'favs': 'desc for department' + index,
      // one grocery id for all users
      'grocery_id': groceryId[index++]['grocery_id']
    })
  })

  return result
}

function usersGrocery () {
  var groceryId = generateArrWithId(grocery, 'grocery_id')
  var usersId = generateArrWithId(users, 'user_id')
  // return object for three users
  var result = []

  // @TODO use lodash
  usersId.map((user, index) => {
    result.push({
      'user_id': user['user_id'],
      // one grocery id for all users
      'grocery_id': groceryId[index++]['grocery_id']
    })

    result.push({
      'user_id': user['user_id'],
      // one grocery id for all users
      'grocery_id': groceryId[index++]['grocery_id']
    })
  })
  return result
}

function items () {
  var ingredientsId = generateArrWithId(ingredients, 'ingredient_id')
  var items = [1, 2, 3]
  var result = []
  // @TODO use lodash
  items.map((item, index) => {
    result.push({
      'item_id': item,
      'name': ingredientsId[index++]['name'],
      'description': 'something about the item',
      'quantity': 50,
      'purchase': false
    })

    result.push({
      'item_id': item,
      'name': ingredientsId[index++]['name'],
      'description': 'something about the item',
      'quantity': 50,
      'purchase': false
    })
  })

  return result
}

function getMeasurementSystem () {
  var result = []
  var measurementSystemId = generateArrWithId(measurementSystem, 'id')
  // @TODO use lodash
  measurementSystemId.map(system => {
    result.push({
      'id': system.id,
      'alias': system.alias,
      'title': _.capitalize(system.alias)
    })
  })
  return result
}

function getMeasurementUnits () {
  var result = []
  var measurementUnitsId = generateArrWithId(measurementUnits, 'id')
  measurementUnitsId = generateArrWithId(measurementUnitsId, 'system_id')
  // @TODO use lodash
  measurementUnitsId.map(unit => {
    result.push({
      'id': unit.id,
      'system_id': unit.system_id,
      'type': unit.type,
      'name': unit.name,
      'singular': unit.singular,
      'plural': unit.plural,
      'short': unit.short,
      'pattern': unit.pattern,
      'error': 'null'
    })
  })
  return result
}

module.exports = {
  usersGrocery,
  favorites,
  getMenuGenerator,
  items,
  getMeasurementSystem,
  getMeasurementUnits
}
