/* global describe, it, expect */
'use strict'
const { groceryFilePath } = require('@files')
const grocery = require(groceryFilePath)

const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { schema, example } = require('./examples/grocery')

describe('grocery data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of grocery', () => {
    expect(grocery).not.toBe('')
  })
})

describe('tests grocery json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
