/* global describe, it, expect */
'use strict'
const { holiday } = require('@files')
const { matchers } = require('jest-json-schema')
const { schema, example } = require('./examples/holiday')
expect.extend(matchers)

describe('holidays data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of holiday', () => {
    expect(holiday).not.toBe('')
  })
})

try {
  describe('tests holiday json schema', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
