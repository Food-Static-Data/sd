/* global describe, it, expect */
'use strict'
const { schema, example } = require('./examples/cup1_8')
const {
  matchers
} = require('jest-json-schema')
expect.extend(matchers)

const {
  cup18
} = require('@filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of cup1_8 data', () => {
  it('cup1_8 data files returns object', () => {
    expect(cup18).not.toBe('')
  })
})

describe('test cup1_8 json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
