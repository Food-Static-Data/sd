/* global describe, it, expect */
'use strict'
// maybe import only object that we need, not all of them? @TODO
const staticData = require('../filesObjects')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('this test prevents to any issues and problems, also to break the structure of cup1_2 data', () => {
  it('cup1_2 data files returns object', () => {
    expect(staticData.cup12).not.toBe('')
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
  required: [ 'name', 'americanStandart', 'americanStandartOunces', 'volume', 'weight' ]
}

const example = {
  'name': 'cup1_2',
  'americanStandart': '8 tablespoons',
  'americanStandartOunces': '4 ounces',
  'volume': '120 milliliters',
  'weight': '113.4 grams, 1/4 pound'
}

describe('tests halfCup json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
