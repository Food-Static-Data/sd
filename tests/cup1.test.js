/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { cup1 } = require('../filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of cup1 data', () => {
  it('cup1 data files returns object', () => {
    expect(cup1).not.toBe('')
  })
})

describe('test cup1 json schema', () => {
  it('validates my jason', () => {
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
    expect({ name: 'cup', americanStandart: '16 tablespoons', americanStandartOunces: '8 ounces', volume: '240 milliliters', weight: '225 grams,  1/2 pound' }).toMatchSchema(schema)
  })
})
