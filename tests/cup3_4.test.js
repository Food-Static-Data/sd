/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
const schema = require('./examples/cup3_4').schema
const example = require('./examples/cup3_4').example
const { cup34 } = require('@filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of cup3_4 data', () => {
  it('cup3_4 data files returns object', () => {
    expect(cup34).not.toBe('')
  })
})

describe('test cup3_4 json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
