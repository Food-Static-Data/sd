/* global describe, it, expect */
'use strict'
const { foodCompositionFinland } = require('@files')
const { schema, example } = require('./examples/foodCompositionFinland')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('foodCompositionFinland data files returns a path', () => {
  it('these tests prevent any issues and problems, also to break the structure of foodCompositionFinland', () => {
    expect(foodCompositionFinland).not.toBe('')
  })
})

try {
  describe('test foodCompositionFinland json', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
    it('checks the country', () => {
      expect(example['country']).toBe('Finland')
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
