/* global describe, it, expect */
'use strict'
const { dietFilePath } = require('../files')
const diets = require(dietFilePath)

const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('diets data files returns array', () => {
  it('test for Diet', () => {
    expect(diets).not.toBe('')
  })
})

const schema = {
  type: 'array', items: [{ type: 'string' }]
}
const example = [
  'Lacto vegetarian',
  'Ovo vegetarian',
  'Pescetarian',
  'Vegan',
  'Lacto-ovo vegetarian',
  'Paleo'
]

describe('tests diet json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
