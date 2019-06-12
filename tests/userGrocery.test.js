/* global describe, it, expect */
'use strict'
const { schema, example } = require('./examples/userGrocery')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
const { usersGroceryFilePath } = require('@files')
const userGrocery = require(usersGroceryFilePath)

describe('userGrocery data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of userGrocery', () => {
    expect(userGrocery).not.toBe('')
  })
})

describe('testing userGrocery schema and also requiring it', () => {
  it('validates UserGrocery json schema', () => {
    expect(example).toMatchSchema(schema)
  })
})
