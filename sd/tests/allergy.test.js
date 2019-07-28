/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
const { schema, example } = require('./examples/allergy')
const staticData = require('@filesObjects')
// const allergies = require(allergiesFilePath)

describe('tests for allergy', () => {
  it('allergies data files returns array', () => {
    expect(staticData.allergies).not.toBe('')
  })
})

try {
  describe('tests for allergy schema', () => {
    it('validates allergy json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
