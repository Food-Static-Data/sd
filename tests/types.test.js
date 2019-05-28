/* global describe, it, expect */
'use strict'
const {matchers}=require('jest-json-schema');
expect.extend(matchers);

const {types} = require('../files')

describe('types data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of types', () => {
    expect(types).not.toBe('')
  })
})

describe('types json schema testing', () => {
    it('validates type json schema', () => {
      const schema = {
        properties: {
          Field: { type: 'string' },
          Type: { type: 'string' },
          Description: { type: 'string' }
        },
        required: ['Field','Type','Description'],
      };
      expect({ Field: 'from',Type:'integer',Description:'First result index as submitted'}).toMatchSchema(schema);
    });
})
