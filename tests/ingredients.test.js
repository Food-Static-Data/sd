/* global describe, it, expect */
'use strict'
const { ingredientsFilePath } = require('../files')
const ingredients = require(ingredientsFilePath)
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
describe('ingredients data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of ingredients', () => {
    expect(ingredients).not.toBe('')
  })
})

const schema = {
  properties: {
    id: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    imageURL: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    ingredients: {
      type: 'array',
      items: [{ type: 'object' }]
    }
  },
  required: ['id', 'name', 'imageURL', 'title', 'ingredients']
}
const example = {
  'id': '2',
  'name': 'Montreal Style Poutine',
  'imageURL': 'http://img.sndimg.com/food/image/upload/h_479,w_639,c_fit/v1/img/recipes/51/78/46/BKN9rVETnqVjW3zddIJ1_0S9A4664.jpg',
  'originalURL': 'http://www.food.com/recipe/to-die-for-crock-pot-roast-27208',

  'title': 'Baked Chicken Chimichangas, Borracho Beans',
  'ingredients': [{

    'unit_type': 'simple',
    'quantity': '3',
    'unit_name': 'medium russet potatoes, sliced into sticks',

    'category': {
      'id': '2',
      'name': 'Baking'
    }

  }
  ]
}

describe('test ingerdients json', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
