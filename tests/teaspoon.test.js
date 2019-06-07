/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const staticData = require('../filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of teaspoon_1 data', () => {
  it('teaspoon_1 data files returns object', () => {
    expect(staticData.teaspoon1).not.toBe('')
  })
})
const schema = require('./examples/teaspoon').schema
const example = require('./examples/teaspoon').example
describe('testng for teaspoon json data schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
