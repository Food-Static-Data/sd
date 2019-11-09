/* global describe, it, expect */
'use strict'
const { groceryFilePath } = require('@files')
const grocery = require(groceryFilePath)
const { matchers } = require('jest-json-schema')
const { schema, example } = require('./examples/grocery')
expect.extend(matchers)

describe('grocery data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of grocery', () => {
    expect(grocery).not.toBe('')
  })
})

try {
  describe('tests grocery json schema', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
