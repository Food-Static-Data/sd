/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema');
expect.extend(matchers);

const {gallon1} = require('../filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of gallon1 data', () => {
  it('gallon1 data files returns object', () => {
    expect(gallon1).not.toBe('')
  })
})

describe('test gallon json schema', () => {
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
    expect({ name: 'gallon', americanStandart: '16 cups, 4 quarts', americanStandartOunces: '128 ounces', volume: '3.79 liters', weight: null }).toMatchSchema(schema);
  });
})