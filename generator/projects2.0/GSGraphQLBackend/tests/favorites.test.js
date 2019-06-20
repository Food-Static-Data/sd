/* global describe, it, expect */
'use strict'
const { favoritesFilePath } = require('@files')
const favorites = require(favoritesFilePath)
const { schema, example } = require('./examples/favorites')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('favorites data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of favorites', () => {
    expect(favorites).not.toBe('')
  })
})

try {
  describe('tests favorites json schema', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
