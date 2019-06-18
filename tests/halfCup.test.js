/* global describe, it, expect */
'use strict'
// maybe import only object that we need, not all of them? @TODO
const staticData = require('@filesObjects')
const { matchers } = require('jest-json-schema')
const { schema, example } = require('./examples/halfCup')
expect.extend(matchers)

describe('this test prevents to any issues and problems, also to break the structure of cup1_2 data', () => {
  it('cup1_2 data files returns object', () => {
    expect(staticData.cup12).not.toBe('')
  })
})

try {
  describe('tests halfCup json schema', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
