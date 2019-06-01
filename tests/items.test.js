/* global describe, it, expect */
'use strict'
const { itemsFilePath } = require('../files')
const items = require(itemsFilePath)
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('items data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of items', () => {
    expect(items).not.toBe('')
  })
})
const schema = {
  properties: {
    item_id: {
      type: 'number'
    },
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    quantity: {
      type: 'number'
    },
    purchase: {
      type: 'boolean'
    }
  },
  required: ['item_id', 'name', 'description', 'quantity', 'purchase']
}

const example = {
  item_id: 34,
  name: 'sugar',
  description: 'Sugar is the generic name for sweet-tasting, soluble carbohydrates, many of which are used in food.',
  quantity: 10,
  purchase: true
}

describe('test my items json', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
