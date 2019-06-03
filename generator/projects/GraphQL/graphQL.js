const _ = require('lodash')
const { __generateId, __generateDate } = require('../../../src/utils.js')

const { favorites, departments, userGrocery, items, users, ingredients, grocery } = require('../../../src/files.js')

const getFileKey = (file) => {
  return _.map(file, (item, index) => {
    return {
      key: __generateId(),
      ...item
    }
  })
}

const getFavoritesKey = getFileKey(favorites)

const getDepartmentsKey = function () {
  let results = departments
  return results.map((item, index) => ({
    departmentId: __generateId(),
    name: item.name,
    desc: 'description for department1',
    created_at: __generateDate(),
    updated_at: __generateDate()
  }))
}

const getUserGroceryKey = getFileKey(userGrocery)

const getItemsKey = getFileKey(items)

const getUsersKey = function () {
  let results = users

  return results.map((item, index) => ({
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
    description: 'description',
    custom: false,
    created_at: __generateDate(),
    updated_at: __generateDate(),
    id: 1,
    department_id: 1
  }))
}

const getGroceryKey = function () {
  let results = grocery

  return results.map((item, index) => ({
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
