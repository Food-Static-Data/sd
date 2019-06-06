/* global describe, it, expect */
'use strict'
const { favoritesFilePath } = require('../files')
const favorites = require(favoritesFilePath)
const { __generateId } = require('../src/utils')
// const { favorites } = require('../generator/generateArray')
const { generateArrWithId } = require('../generator/generateArray')
const { ingredients } = require('../files')

const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const schema = require('./examples/favorites').schema
const example = require('./examples/favorites').example

describe('favorites data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of favorites', () => {
    expect(favorites).not.toBe('')
  })
})
<<<<<<< master
const schema = {
  properties: {
    ingredient_id: {
      type: 'string'
    },
    user_id: {
      type: 'string'
    },
    favs: {
      type: 'array',
      items: {
        type: 'object'
      }
    },
    grocery_id: {
      type: 'string'
    }
  },
  required: ['ingredient_id', 'user_id', 'favs', 'grocery_id']
}

const testId = __generateId();
const favoriteIngredients = generateArrWithId(ingredients, 'ingredient_id');

const example = {
  'ingredient_id': testId,
  'user_id': testId,
  'favs': favoriteIngredients,
  'grocery_id': testId
}
=======

>>>>>>> master
describe('tests favorites json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
