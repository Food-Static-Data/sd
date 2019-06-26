/* global describe, it, expect */
'use strict'
const { foodCompositionGermany } = require('@files')
const { schema, example } = require('./examples/foodCompositionGermany')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('foodCompositionGermany data files returns a path', () => {
  it('these tests prevent any issues and problems, also to break the structure of foodCompositionGermany', () => {
    expect(foodCompositionGermany).not.toBe('')
  })
})

try {
  describe('test foodCompositionGermany json', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
    it('checks the country', () => {
      expect(example['country']).toBe('Germany')
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
