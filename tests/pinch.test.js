/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
const { schema, example } = require('./examples/pinch')
const staticData = require('@filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of pinch data', () => {
  it('pinch data files returns object', () => {
    expect(staticData.pinch).not.toBe('')
  })
})

try {
  describe('testng for pinch json data schema', () => {
    it('validates pinch json file schema', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
