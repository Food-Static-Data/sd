/* global describe, it, expect */
'use strict'
const { schema, example } = require('./examples/department')
const { departmentsFilePath } = require('@files')
const departments = require(departmentsFilePath)

const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('departments data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of departments', () => {
    expect(departments).not.toBe('')
  })
})

describe('test department  json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
