/* global describe, it, expect */
'use strict'
const {
  matchers
} = require('jest-json-schema')
expect.extend(matchers)

const staticData = require('@filesObjects')

const schema = require('./examples/pinch').schema
const example = require('./examples/pinch').example

describe('this test prevents to any issues and problems, also to break the structure of pinch data', () => {
  it('pinch data files returns object', () => {
    expect(staticData.pinch).not.toBe('')
  })
})

describe('testng for pinch json data schema', () => {
  it('validates pinch json file schema', () => {
    expect(example).toMatchSchema(schema)
  })
})
