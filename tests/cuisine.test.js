/* global describe, it, expect */
'use strict'
const { cuisineFilePath } = require('../files')
const cuisines = require(cuisineFilePath)
const schema = require('./examples/cuisine').schema
const example = require('./examples/cuisine').example
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('this test prevents to any issues and problems, also to break the structure of cuisines data files', () => {
  it('cuisines data files returns array', () => {
    expect(cuisines).not.toBe('')
  })
})

describe('tests for cuisine schema', () => {
  it('validates cuisine json', () => {
    expect(example).toMatchSchema(schema)
  })
})
