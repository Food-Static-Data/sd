/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const staticData = require('@filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of tablespoon_1 data', () => {
  it('tablespoon_1 data files returns object', () => {
    expect(staticData.tablespoon1).not.toBe('')
  })
})
const schema = require('./examples/tablespoon').schema
const example = require('./examples/tablespoon').example

describe('test for tablespoon json schema', () => {
  it('validates tablespoon json schema', () => {
    expect(example).toMatchSchema(schema)
  })
})
