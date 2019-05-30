/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema');
expect.extend(matchers);

const { nutritionsFilePath, nutritions2 } = require('../files')
const nutritions = require(nutritionsFilePath)

describe('nutritions data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of nutritions', () => {
    expect(nutritions).not.toBe('')
  })
})

describe('nutritions2 data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of nutritions2', () => {
    expect(nutritions2).not.toBe('')
  })
})

describe('test nutrition1 json-schema', () => {
it('validates nutrition1 json-schema', () => {
  const schema = {
    properties: {
      calories: { type: 'number' },
      fat_calories: { type: 'number' },
      sat_fat: { type: 'number' },
      trans_fat: { type: 'number' },
      cholesterol: { type: 'number' },
      sodium: { type: 'number' },
      total_carb: { type: 'number' },
      fibers: { type: 'number' },
      sugars: { type: 'number' },
      proteins: { type: 'number' },
      vitamins: { type: 'object', items: [{ type: 'number'}] },
      calcium: { type: 'number' },
      iron: { type: 'number' },
     
      
    },
    required: ['calories', 'fat_calories', 'sat_fat', 'trans_fat', 'cholesterol', 'sodium', 'total_carb', 'fibers', 'sugars', 'proteins', 'vitamins', 'calcium', 'iron'],
  };
    expect({ 
      calories: 673, 
      fat_calories: 213, 
      total_fat: 23.7, 
      sat_fat: 5.9, 
      trans_fat: 0, 
      cholesterol: 168,
      sodium: 780, 
      total_carb: 80.9,
      fibers: 0, 
      sugars: 3,
      proteins: 38.3, 
      vitamins: { 
        a: 1.099, 
        c: 4.0, 
        b6: 1 
      }, 
      calcium: 404, 
      iron: 7 
    }).toMatchSchema(schema);
 });
})


describe('nutritions2 json schema testing', () => {
  it('validates nutritions2 json schema', () => {
    const schema = {
      "properties": {  
          "type": { "type": "string" },
          "items": { "type": "array", "items": [{ "type": "string"}] }
            },
      "required": [ "type", "items"]
    }
    expect({ 
      "type": "Fatty acids", 
      "items": [ 
        "Alpha-linolenic acid (ALA)", 
        "Linoleic acid"
      ] 
    }).toMatchSchema(schema)
  })
})
