/* global describe, it, expect */
'use strict'
const { firstVeganGLMCFilePath } = require('../files')
const firstVeganGLMC = require(firstVeganGLMCFilePath)
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
describe('firstVeganGLMC data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of firstVeganGLMC', () => {
    expect(firstVeganGLMC).not.toBe('')
  })
})

const schema = {
  properties: {
    id: {
      type: 'string'
    },
    recipes: {
      type: 'array'
    }
  },
  required: ['id', 'recipes']
}
const example = {
  'id': 'First-Vegan-Grocery-List',
  'recipes': [
    [{
      'tag': 'breakfast',
      'text': 'Oatmeal with Dried Fruit, Flax Meal, and Cinnamon',
      'day': 'Day First',
      'time': '7:00-8:30'
    }
    ]
  ]
}

describe('test firstVeganGLMC json', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
