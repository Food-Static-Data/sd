/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema');
expect.extend(matchers);

const staticData = require('../filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of quart data', () => {
  it('quart data files returns object', () => {
    expect(staticData.quart).not.toBe('')
  })
})

describe('testng for quart json data schema', () => {
  it('validates quart json-schema', () => {
  const schema = {
    properties: {
          name: { type: 'string' },
          americanStandart: { type: 'string'},
          americanStandartOunces: {type: 'string' },
          volume: { type: "string" },
          weight: { type: 'null' }
      },
    required: [ 'name', 'americanStandart', 'americanStandartOunces','volume','weight' ]  
  };
    
  expect({ name: 'teaspoon', americanStandart: '4 cups,  2 pints', americanStandartOunces: '32 ounces', volume:'2 milliliters', weight:null }).toMatchSchema(schema);
});
})
