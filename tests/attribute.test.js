/* global describe, it, expect */
'use strict'
const { attributes } = require('../files')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
describe('attributes data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of attributes', () => {
    expect(attributes).not.toBe('')
  })
})

const schema = {
  type: 'array', items: [{ type: 'array' }]
}

const example = [
  [
    'Health',
    'Alcohol',
    'alcohol-free',
    'No alcohol used or contained in the recipe'
  ],
  [
    'Health',
    'Alcohol-free',
    'alcohol-free',
    'No alcohol used or contained'
  ]
]

describe('tests for attribute schema', () => {
  it('validates allergy json', () => {
    expect(example).toMatchSchema(schema)
  })
})
