/* global describe, it, expect */
'use strict'
const { dash } = require('../filesObjects')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('this test prevents to any issues and problems, also to break the structure of dash data', () => {
  it('dash data files returns object', () => {
    expect(dash).not.toBe('')
  })
})

describe('test dash test json schema', () => {
  it('validates my json', () => {
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

    expect({ name: 'sugar', americanStandart: '2 tablespoons', americanStandartOunces: '1 ounce', volume: '2 milliliters', weight: '100 grams' }).toMatchSchema(schema)
  })
})
