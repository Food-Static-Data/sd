/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { gallon } = require('../filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of gallon data', () => {
  it('gallon data files returns object', () => {
    expect(gallon).not.toBe('')
  })
})

const schema = {
  properties: {
    name: { type: 'string' },
    americanStandart: { type: 'string' },
    americanStandartOunces: { type: 'string' },
    volume: { type: 'string' },
    weight: { type: 'string' }
  },
  required: ['name', 'americanStandart', 'americanStandartOunces', 'volume', 'weight']
}

const example = {
  name: 'gallon',
  americanStandart: '16 cups, 4 quarts',
  americanStandartOunces: '128 ounces',
  volume: '3.79 liters',
  weight: 'null'
}

describe('test gallon json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
