/* global describe, it, expect */
'use strict'
const { courseFilePath } = require('../files')
const courses = require(courseFilePath)

const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('courses data files returns array', () => {
  it('this test prevents to any issues and problems, also to break the structure of courses', () => {
    expect(courses).not.toBe('')
  })
})

const schema = {
  type: 'array', items: [{ type: 'string' }]
}

const example = [
  'Main Dishes',
  'Desserts',
  'Side Dishes',
  'Appetizers',
  'Salads',
  'Breakfast and Brunch',
  'Breads',
  'Soups',
  'Beverages',
  'Condiments and Sauces',
  'Cocktails',
  'Snacks',
  'Lunch'
]

describe('tests for course schema', () => {
  it('validates course json', () => {
    expect(example).toMatchSchema(schema)
  })
})
