/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
const { schema, example } = require('./examples/pint')
const staticData = require('@filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of pint data', () => {
  it('pint data files returns object', () => {
    expect(staticData.pint).not.toBe('')
  })
})

try {
  describe('test pint json schema', () => {
    it('validates pint json schema', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
