/* global describe, it, expect */
'use strict'
const { schema, example } = require('./examples/menu')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { menuFilePath } = require('@files')
const menu = require(menuFilePath)

describe('menu data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of menu', () => {
    expect(menu).not.toBe('')
  })
})

describe('types json schema testing', () => {
  it('validates type json schema', () => {
    expect(example).toMatchSchema(schema)
  })
})
