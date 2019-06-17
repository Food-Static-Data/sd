/* global describe, it, expect */
'use strict'
// @TODO can we update tests with ES6 style so they can work as well? I'm not sure about it, but it worth exploring
const { dash } = require('@filesObjects')
const { matchers } = require('jest-json-schema')
const { schema, example } = require('./examples/dash')
expect.extend(matchers)

describe('this test prevents to any issues and problems, also to break the structure of dash data', () => {
  it('dash data files returns object', () => {
    expect(dash).not.toBe('')
  })
})

try {
  describe('test dash test json schema', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
