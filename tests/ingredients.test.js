/* global describe, it, expect */
'use strict'
const { ingredientsFilePath } = require('../files')
const ingredients = require(ingredientsFilePath)
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const schema = require('./examples/ingredients').schema
const example = require('./examples/ingredients').example

describe('ingredients data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of ingredients', () => {
    expect(ingredients).not.toBe('')
  })
})

describe('test ingerdients json', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
