/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const staticData = require('../filesObjects')

const schema = require('./examples/pint').schema
const example = require('./examples/pint').example

describe('this test prevents to any issues and problems, also to break the structure of pint data', () => {
  it('pint data files returns object', () => {
    expect(staticData.pint).not.toBe('')
  })
})

describe('test pint json schema', () => {
  it('validates pint json schema', () => {
    expect(example).toMatchSchema(schema)
  })
})
