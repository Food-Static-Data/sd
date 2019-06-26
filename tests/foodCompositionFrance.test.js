/* global describe, it, expect */
'use strict'
const { foodCompositionFrance } = require('@files')
const { schema, example } = require('./examples/foodCompositionFrance')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('foodCompositionFrance data files returns a path', () => {
  it('these tests prevent any issues and problems, also to break the structure of foodCompositionFrance', () => {
    expect(foodCompositionFrance).not.toBe('')
  })
})

try {
  describe('test foodCompositionFrance json', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
    it('checks the country', () => {
      expect(example['country']).toBe('France')
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
