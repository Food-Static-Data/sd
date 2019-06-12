/* global describe, it, expect */
'use strict'
const { schema, example } = require('./examples/gallon')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { gallon } = require('@filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of gallon data', () => {
  it('gallon data files returns object', () => {
    expect(gallon).not.toBe('')
  })
})

describe('test gallon json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
