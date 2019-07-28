/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
const { schema, example } = require('./examples/gallon')
const { gallon } = require('@filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of gallon data', () => {
  it('gallon data files returns object', () => {
    expect(gallon).not.toBe('')
  })
})

try {
  describe('test gallon json schema', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
