/* global describe, it, expect */
'use strict'
const { groceryFilePath } = require('../files')
const grocery = require(groceryFilePath)

const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('grocery data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of grocery', () => {
    expect(grocery).not.toBe('')
  })
})

const schema = {
  properties: {
    departments: {
      type: 'array'
    },
    id: {
      type: 'number'
    },
    name: {
      type: 'string'
    },
    img: {
      type: 'boolean'
    },
    desc: {
      type: 'boolean'
    },
    slug: {
      type: 'boolean'
    }
  },
  required: ['departments', 'id', 'name', 'img', 'desc', 'slug']
}
const example =
{
  'departments': [
    'Other'
  ],
  'id': 14,
  'name': 'number-four9',
  'img': false,
  'desc': false,
  'slug': false
}

describe('tests grocery json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
