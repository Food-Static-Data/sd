/* global describe, it, expect */
'use strict'
const { schema, example } = require('./examples/attribute')
const { attributes } = require('@files')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('attributes data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of attributes', () => {
    expect(attributes).not.toBe('')
  })
})

describe('tests for attribute schema', () => {
  it('validates allergy json', () => {
    expect(example).toMatchSchema(schema)
  })
})
