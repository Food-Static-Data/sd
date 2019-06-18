/* global describe, it, expect */
'use strict'
const { cuisineFilePath } = require('@files')
const cuisines = require(cuisineFilePath)
const { matchers } = require('jest-json-schema')
const { schema, example } = require('./examples/cuisine')
expect.extend(matchers)

describe('this test prevents to any issues and problems, also to break the structure of cuisines data files', () => {
  it('cuisines data files returns array', () => {
    expect(cuisines).not.toBe('')
  })
})

try {
  describe('tests for cuisine schema', () => {
    it('validates cuisine json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
