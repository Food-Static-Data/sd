/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema');
expect.extend(matchers);

const staticData = require('../filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of tablespoon_1 data', () => {
  it('tablespoon_1 data files returns object', () => {
    expect(staticData.tablespoon1).not.toBe('')
  })
})

describe('test for tablespoon json schema', () => {
  it('validates tablespoon json schema', () => {
  const schema = {
    properties: {
      name: { type: 'string' },
      americanStandart: { type: 'string' },
      americanStandartOunces:{ type: 'string'},
      volume: { type: 'string' },
      weight: { type: 'string' }
    },
    required: ['name','americanStandart', 'americanStandartOunces', 'volume', 'weight'],
  };
  expect({ name: 'world' , americanStandart: '3 teaspoons' , americanStandartOunces: '1/2 ounce' , volume: '15 milliliters' , weight: '14.3 grams' }).toMatchSchema(schema);
});
})
