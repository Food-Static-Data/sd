/* global describe, it, expect */
'use strict'
const { attributes } = require('@files')
const { matchers } = require('jest-json-schema')
const { schema, example } = require('./examples/attribute')
expect.extend(matchers)

describe('attributes data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of attributes', () => {
    expect(attributes).not.toBe('')
  })
})

try {
  describe('tests for attribute schema', () => {
    it('validates allergy json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
