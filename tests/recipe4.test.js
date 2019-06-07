/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { recipesFilePath } = require('../files')
const recipe = require(recipesFilePath)

describe('recipe data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of recipe', () => {
    expect(recipe).not.toBe('')
  })
})
const schema = require('./examples/recipe4').schema
const example = require('./examples/recipe4').example
describe('test recipe json-schema', () => {
  it('validates recipe json-schema', () => {
    expect(example).toMatchSchema(schema)
  })
})
