/* global describe, it, expect */
'use strict'
const { foodCompositionItaly } = require('@files')
const { schema, example } = require('./examples/foodCompositionItaly')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('foodCompositionItaly data files returns a path', () => {
  it('these tests prevent any issues and problems, also to break the structure of foodCompositionItaly', () => {
    expect(foodCompositionItaly).not.toBe('')
  })
})

try {
  describe('test foodCompositionItaly json', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
    it('checks the country', () => {
      expect(example['country']).toBe('Italy')
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
