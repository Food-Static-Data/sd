/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const staticData = require('../filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of teaspoon_1 data', () => {
  it('teaspoon_1 data files returns object', () => {
    expect(staticData.teaspoon1).not.toBe('')
  })
})

const schema = {
  properties: {
    name: { type: 'string' },
    americanStandart: { type: 'null' },
    americanStandartOunces: { type: 'null' },
    volume: { type: 'string' },
    weight: { type: 'null' }
  },
  required: [ 'name', 'americanStandart', 'americanStandartOunces', 'volume', 'weight' ]
}

const example = { name: 'teaspoon', americanStandart: null, americanStandartOunces: null, volume: '2 milliliters', weight: null }
describe('testng for teaspoon json data schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
