const _ = require('lodash')
const {__generateId} = require('../../../src/utils.js')

const getFavoritesKey = function () {
    // let favorites = getFavorites()

    return _.map(favorites, (favorite, index) => {
        return {
        key: __generateId(),
        ...favorite
        }
    })
}

module.exports = {
    getFavoritesKey
}