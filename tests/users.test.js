/* global describe, it, expect */
'use strict'

const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { usersFilePath } = require('../files')
const users = require(usersFilePath)

describe('users data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of users', () => {
    expect(users).not.toBe('')
  })
})
const schema = require('./examples/users').schema
const example = require('./examples/users').example
describe('testing for user json schema', () => {
  it('validates users json', () => {
    expect(example).toMatchSchema(schema)
  })
})
