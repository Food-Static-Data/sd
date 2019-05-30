/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema');
expect.extend(matchers);

const { cup18 } = require('../filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of cup1_8 data', () => {
  it('cup1_8 data files returns object', () => {
    expect(cup18).not.toBe('')
  })
})

describe('test cup1_8 json schema', () => {
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
    expect({name: 'cup1_8', americanStandart: '2 tablespoons', americanStandartOunces: '1 ounce', volume: '30 milliliters', weight: '28.3 grams' }).toMatchSchema(schema);
  });
})
