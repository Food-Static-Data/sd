/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { usersGroceryFilePath } = require('@files')
const userGrocery = require(usersGroceryFilePath)

describe('userGrocery data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of userGrocery', () => {
    expect(userGrocery).not.toBe('')
  })
})
const schema = require('./examples/userGrocery').schema
const example = require('./examples/userGrocery').example
describe('testing userGrocery schema and also requiring it', () => {
  it('validates UserGrocery json schema', () => {
    expect(example).toMatchSchema(schema)
  })
})
