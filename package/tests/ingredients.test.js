/* global describe, it, expect */
'use strict'
const { ingredientsFilePath } = require('@files')
const ingredients = require(ingredientsFilePath)
const { matchers } = require('jest-json-schema')
const { schema, example } = require('./examples/ingredients')
expect.extend(matchers)

describe('ingredients data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of ingredients', () => {
    expect(ingredients).not.toBe('')
  })
})

try {
  describe('test ingerdients json', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
