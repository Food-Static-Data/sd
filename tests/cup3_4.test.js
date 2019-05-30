/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema');
expect.extend(matchers);

const { cup3_4 } = require('../filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of cup3_4 data', () => {
  it('cup3_4 data files returns object', () => {
    expect(cup3_4).not.toBe('')
  })
})

describe('test cup3_4 json schema', () => {
  it('validates my json', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        americanStandart: { type: 'string' },
        americanStandartOunces: { type: 'string' },
        volume: { type: 'string' },
        weight: { type: 'string' }
      },
      required: ['name', 'americanStandart', 'americanStandartOunces', 'volume', 'weight'],
    };
    expect({ name: "cup3_4", americanStandart: "12 tablespoons", americanStandartOunces: "6 ounces", volume: "180 milliliters", weight: null }).toMatchSchema(schema);
  });
})
