/* global describe, it, expect */
'use strict'
const { dietFilePath } = require('@files')
const diets = require(dietFilePath)
const { schema, example } = require('./examples/diet')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('diets data files returns array', () => {
  it('test for Diet', () => {
    expect(diets).not.toBe('')
  })
})

try {
  describe('tests diet json schema', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
