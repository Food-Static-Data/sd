/* global describe, it, expect */
'use strict'
const { mealCalendarFilePath } = require('../files')
const mealcalendar = require(mealCalendarFilePath)
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('mealcalendar data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of mealcalendar', () => {
    expect(mealcalendar).not.toBe('')
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

  'id': 'week1',
  'recipes': [
    [{
      'tag': 'breakfast',
      'text': 'Grilled Honey & Ginger Marinated Flank Steaks with Mashed Potatoes, Tossed Salad and Rolls',
      'day': 'Sunday',
      'time': '7:00-8:30'
    }]
  ]
}

describe('test mealcalender json', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
