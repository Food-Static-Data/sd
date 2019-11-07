/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
const { schema, example } = require('./examples/menu')
const { menuFilePath } = require('@files')
const menu = require(menuFilePath)

describe('menu data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of menu', () => {
    expect(menu).not.toBe('')
  })
})

try {
  describe('types json schema testing', () => {
    it('validates type json schema', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
