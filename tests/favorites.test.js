/* global describe, it, expect */
'use strict'
const { favoritesFilePath } = require('@files')
const favorites = require(favoritesFilePath)

const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const schema = require('./examples/favorites').schema
const example = require('./examples/favorites').example

describe('favorites data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of favorites', () => {
    expect(favorites).not.toBe('')
  })
})

describe('tests favorites json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
