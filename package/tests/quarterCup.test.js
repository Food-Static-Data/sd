/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
const staticData = require('@filesObjects')
const { schema, example } = require('./examples/quarterCup')

describe('this test prevents to any issues and problems, also to break the structure of quaterCup data', () => {
  it('quaterCup data files returns object', () => {
    expect(staticData.quaterCup).not.toBe('')
  })
})

try {
  describe('test quarter cup json schema', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
