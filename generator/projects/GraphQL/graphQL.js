const _ = require('lodash')
// const { __generateId, __generateDate } = require('../../../src/utils.js')
const { __generateId, __generateDate } = require('@utils.js')

const {
  favorites,
  departments,
  userGrocery,
  items,
  users,
  ingredients,
  grocery
} = require('../../../src/files.js')
//
// const {
//   favorites,
//   departments,
//   userGrocery,
//   items,
//   users,
//   ingredients,
//   grocery
// } = require('@files')

// @TODO as we may need to be able to call this function from the
// outside of this project - we should move this method outside
const getFileKey = (file) => {
  return _.map(file, (item, index) => {
    return {
      key: __generateId(),
      ...item
    }
  })
}

const getFavoritesKey = () => {
  return getFileKey(favorites)
}

const getDepartmentsKey = function () {
  let results = departments
  return results.map((item, index) => ({
    departmentId: __generateId(),
    name: item.name,
    desc: 'description for department1', // @TODO this was a blank field, but it cannot look like this all the time
    created_at: __generateDate(),
    updated_at: __generateDate()
  }))
}

const getUserGroceryKey = () => {
  return getFileKey(userGrocery)
}

const getItemsKey = () => {
  return getFileKey(items)
}

const getUsersKey = function () {
  // let results = users

  return users.map((item, index) => ({
    userId: __generateId(),
    favs: false,
    ingredientId: 1,
    groceryId: 1
  }))
}

const getIngredientsKey = function (limit = false) {
  let results = ingredients

  if (limit) {
    results = _.slice(results, 100)
  }

  return results.map((item, index) => ({
    ingredientId: __generateId(),
    favs: '',
    name: item.name,
    description: 'description', // @TODO this was a blank field before, but it cannot be as it is all the time
    custom: false,
    created_at: __generateDate(),
    updated_at: __generateDate(),
    id: 1, // @TODO this method should be extended, in order to get connection with ingredients and departments
    department_id: 1
  }))
}

const getGroceryKey = function () {
  // let results = grocery

  return grocery.map((item, index) => ({
    groceryId: __generateId(),
    name: item.name,
    img: item.img,
    desc: item.desc,
    slug: item.slug,
    created_at: __generateDate(),
    updated_at: __generateDate(),
    id: 1,
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
