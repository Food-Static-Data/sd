/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { cookingTimes } = require('../files')

describe('this test prevents to any issues and problems, also to break the structure of cookingTimes data', () => {
  it('cookingTimes data files returns object', () => {
    expect(cookingTimes).not.toBe('')
  })
})

const schema = {
  properties: {
    name: { type: 'string' },
    boil: { type: 'string' },
    microwave: { type: 'string' },
    steam: { type: 'string' },
    roast: { type: 'string'}
  },
  required: [ 'name', 'boil', 'microwave', 'steam', 'roast' ]
}

const example = { 
  name: 'frenchBeans', 
  boil: '6 - 10 mins', 
  microwave: '4 - 6 mins', 
  steam: '8 - 12 mins',
  roast: '25 - 30 mins' 
}

describe('test cookingTimes json schema', () => {
  it('validates cookingTimes json', () => {
    expect(example).toMatchSchema(schema)
  })
})

