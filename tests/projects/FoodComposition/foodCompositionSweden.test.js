/* global describe, it, expect */
'use strict'
const { foodCompositionSweden } = require('@files')
const { schema, example } = require('./examples/foodCompositionSweden')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('foodCompositionSweden data files returns a path', () => {
  it('these tests prevent any issues and problems, also to break the structure of foodCompositionSweden', () => {
    expect(foodCompositionSweden).not.toBe('')
  })
})

try {
  describe('test foodCompositionSweden json', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
    it('checks the country', () => {
      expect(example['country']).toBe('Sweden')
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
