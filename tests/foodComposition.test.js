/* global describe, it, expect */
'use strict'
const { foodComposition } = require('@files')
const { schema, example } = require('./examples/foodComposition')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('foodComposition data files returns a path', () => {
  it('these tests prevent any issues and problems, also to break the structure of foodComposition', () => {
    expect(foodComposition).not.toBe('')
  })
})

try {
  describe('test foodComposition json', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
