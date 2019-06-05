/* global describe, it, expect */
'use strict'
const { favoritesFilePath } = require('../files')
const favorites = require(favoritesFilePath)
const { __generateId } = require('../src/utils')
const { favorites } = require('../generator/generateArray')

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
      type: 'array',
      items: {
        type: 'string'
      }
    },
    grocery_id: {
      type: 'string'
    }
  },
  required: ['ingredient_id', 'user_id', 'favs', 'grocery_id']
}

const testId = __generateId;
const favoritesArr = favorites()

const example = {
  'ingredient_id': testId,
  'user_id': testId,
  'favs': favoritesArr,
  'grocery_id': testId
}
describe('tests favorites json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
