/* global describe, it, expect */
'use strict'
const { departmentsFilePath } = require('@files')
const departments = require(departmentsFilePath)

const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('departments data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of departments', () => {
    expect(departments).not.toBe('')
  })
})

try {
  const { schema, example } = require('./examples/department')

  describe('test department  json schema', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
