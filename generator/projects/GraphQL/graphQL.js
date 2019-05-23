const _ = require('lodash')
const { __generateId, __generateDate } = require('../../../src/utils.js')


const { favorites, departments, userGrocery, items, users, ingredients } = require('../../../src/files.js')

const getFavoritesKey = function () {
  // let favorites = getFavorites()

  return _.map(favorites, (favorite, index) => {
    return {
      key: __generateId(),
      ...favorite
    }
  })
}

const getDepartmentsKey = function () {
  let results = departments
  return results.map((item, index) => ({
    department_id: __generateId(),
    name: item.name,
    desc: 'description for department1',
    created_at: __generateDate(),
    updated_at: __generateDate()
  }))
}

const getUserGroceryKey = function () {
  // let userGroceries = getUserGrocery()

  return _.map(userGrocery, (item, index) => {
    return {
      key: __generateId(),
      ...item
    }
  })
}

const getItemsKey = function () {
//   let items = getItems()

  return _.map(items, (item, index) => {
    return {
      key: __generateId(),
      ...item
    }
  })
}

const getUsersKey = function () {
  let results = users
  //   let results = []
  return results.map((item, index) => ({
    userId: __generateId(),
    favs: false,
    ingredient_id: 1,
    grocery_id: 1
  }))
}

const getIngredientsKey = function (limit = false) {
  let results = ingredients
//   let results = []
  if (limit) {
    results = _.slice(results, 100)
  }

  return results.map((item, index) => ({
    ingredient_id: __generateId(),
    favs: '',
    name: item.name,
    description: 'description',
    custom: false,
    created_at: __generateDate(),
    updated_at: __generateDate(),
    id_1: 1,
    department_id: 1
  }))
}

module.exports = {
  getFavoritesKey,
  getDepartmentsKey,
  getUserGroceryKey,
  getItemsKey,
  getUsersKey,
  getIngredientsKey
}
