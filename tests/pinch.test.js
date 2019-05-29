/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema');
expect.extend(matchers);

const staticData = require('../filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of pinch data', () => {
  it('pinch data files returns object', () => {
    expect(staticData.pinch).not.toBe('')
  })
})

describe('testng for pinch json data schema', () => {
  it('validates pinch json file schema', () => {
  const schema = {
    properties: {
          name: { type: 'string' },
          americanStandart: { type: 'sting'},
          americanStandartOunces: {type: 'null' },
          volume: { type: "null" },
          weight: { type: 'null' }
      },
    required: [ 'name', 'americanStandart', 'americanStandartOunces','volume','weight' ]  
  };
    
  expect({ name: 'teaspoon', americanStandart: '1/16 teaspoon', americanStandartOunces: null, volume: null, weight: null }).toMatchSchema(schema);
});
})
