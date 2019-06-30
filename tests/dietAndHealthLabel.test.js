/* global describe, it, expect */
'use strict'
const { dietAndHealthLabel } = require('@files')
const { schema, example } = require('./examples/dietAndHealthLabel')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('dietAndHealthLabel data files returns a path', () => {
  it('these tests prevent any issues and problems, also to break the structure of dietAndHealthLabel', () => {
    expect(dietAndHealthLabel).not.toBe('')
  })
})

try {
  describe('test dietAndHealthLabel json', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
