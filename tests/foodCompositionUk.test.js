/* global describe, it, expect */
'use strict'
const { foodCompositionUk } = require('@files')
const { schema, example } = require('./examples/foodCompositionUk')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('foodCompositionUk data files returns a path', () => {
  it('these tests prevent any issues and problems, also to break the structure of foodCompositionUk', () => {
    expect(foodCompositionUk).not.toBe('')
  })
})

try {
  describe('test foodCompositionUk json', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
    it('checks the country', () => {
      expect(example['country']).toBe('United Kingdom')
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
