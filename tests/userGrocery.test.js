/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { usersGroceryFilePath } = require('../files')
const userGrocery = require(usersGroceryFilePath)

describe('userGrocery data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of userGrocery', () => {
    expect(userGrocery).not.toBe('')
  })
})

const schema = {
  properties: {
    user_id: { type: 'string' },
    grocery_id: { type: 'string' }
  },
  required: ['user_id', 'grocery_id']
}
const example = { user_id: 'fbe57252-7a3e-11e9-8ec5-0d5ec94f7bcf',
  grocery_id: 'fbe57236-7a3e-11e9-8ec5-0d5ec94f7bcf' }
describe('testing userGrocery schema and also requiring it', () => {
  it('validates UserGrocery json schema', () => {
    expect(example).toMatchSchema(schema)
  })
})
