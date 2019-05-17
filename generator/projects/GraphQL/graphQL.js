const _ = require('lodash')
const {__generateId, __generateDate} = require('../../../src/utils.js')

// import {favorites, departments, userGrocery} from '../../../src/files.js'
const {favorites, departments, userGrocery} = require('../../../src/files.js')

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
  

module.exports = {
    getFavoritesKey,
    getDepartmentsKey,
    getUserGroceryKey
}