const _ = require('lodash')
const { __generateId, __generateDate } = require('../../../src/utils.js')

const { favorites, departments, userGrocery, items, users, ingredients, grocery } = require('../../../src/files.js')

const getFavoritesKey = function () {

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

  return _.map(userGrocery, (item, index) => {
    return {
      key: __generateId(),
      ...item
    }
  })
}

const getItemsKey = function () {

  return _.map(items, (item, index) => {
    return {
      key: __generateId(),
      ...item
    }
  })
}

//@TODO don't like that ingredient and grocery ids...
const getUsersKey = function () {
  let results = users

  return results.map((item, index) => ({
    userId: __generateId(),
    favs: false,
    ingredient_id: 1,
    grocery_id: 1
  }))
}

//@TODO don't like that id_1 and department ids...
const getIngredientsKey = function (limit = false) {
  let results = ingredients

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

// @TODO id_1
const getGroceryKey = function () {
  let results = grocery

  return results.map((item, index) => ({
    grocery_id: __generateId(),
    name: item.name,
    img: item.img,
    desc: item.desc,
    slug: item.slug,
    created_at: __generateDate(),
    updated_at: __generateDate(),
    id_1: 1,
    favs: false
  }))
}

module.exports = {
  getFavoritesKey,
  getDepartmentsKey,
  getUserGroceryKey,
  getItemsKey,
  getUsersKey,
  getIngredientsKey,
  getGroceryKey
}
