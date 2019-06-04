/* global describe, it, expect */
'use strict'
const { favoritesFilePath } = require('../files')
const favorites = require(favoritesFilePath)

const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('favorites data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of favorites', () => {
    expect(favorites).not.toBe('')
  })
})
const schema = {
  properties: {
    ingredient_id: {
      type: 'string'
    },
    user_id: {
      type: 'string'
    },
    favs: {
      type: 'string'
    },
    grocery_id: {
      type: 'string'
    }
  },
  required: ['ingredient_id', 'user_id', 'favs', 'grocery_id']
}
const example = {
  'ingredient_id': '4aacafd5-6106-11e9-9ffc-a3e52b2d927f', // @TODO replace with generateID
  'user_id': '4aacafd2-6106-11e9-9ffc-a3e52b2d927f', // @TODO replace with generateID
  'favs': 'desc for department1', // @TODO replace with array of favorite ingredients with ids later
  'grocery_id': '4aac88cf-6106-11e9-9ffc-a3e52b2d927f' // @TODO replace with generateID
}
describe('tests favorites json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
