/* global describe, it, expect */
'use strict'
const { cuisineFilePath } = require('../files')
const cuisines = require(cuisineFilePath)

const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('this test prevents to any issues and problems, also to break the structure of cuisines data files', () => {
  it('cuisines data files returns array', () => {
    expect(cuisines).not.toBe('')
  })
})

const schema = {
  type: 'array', items: [{ type: 'string' }]
}

const example = [
  'American',
  'Kid-Friendly',
  'Italian',
  'Asian',
  'Mexican',
  'Southern & Soul Food',
  'French',
  'Southwestern',
  'Barbecue',
  'Indian',
  'Chinese',
  'Cajun & Creole',
  'Mediterranean',
  'Greek',
  'English',
  'Spanish',
  'Thai',
  'German',
  'Moroccan',
  'Irish',
  'Japanese',
  'Cuban',
  'Hawaiian',
  'Swedish',
  'Hungarian',
  'Portuguese'
]

describe('tests for cuisine schema', () => {
  it('validates cuisine json', () => {
    expect(example).toMatchSchema(schema)
  })
})
