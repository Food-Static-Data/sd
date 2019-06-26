/* global describe, it, expect */
'use strict'
const { foodCompositionNetherlands } = require('@files')
const { schema, example } = require('./examples/foodCompositionNetherlands')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('foodCompositionNetherlands data files returns a path', () => {
  it('these tests prevent any issues and problems, also to break the structure of foodCompositionNetherlands', () => {
    expect(foodCompositionNetherlands).not.toBe('')
  })
})

try {
  describe('test foodCompositionNetherlands json', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
    it('checks the country', () => {
      expect(example['country']).toBe('Netherlands')
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
