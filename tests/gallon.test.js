/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const schema = require('./examples/gallon').schema
const example = require('./examples/gallon').example

const { gallon } = require('../filesObjects')

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
