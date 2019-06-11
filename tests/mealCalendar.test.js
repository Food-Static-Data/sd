/* global describe, it, expect */
'use strict'
const { mealCalendarFilePath } = require('@files')
const mealcalendar = require(mealCalendarFilePath)
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { schema, example } = require('./examples/mealCalendar')

describe('mealcalendar data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of mealcalendar', () => {
    expect(mealcalendar).not.toBe('')
  })
})

describe('test mealcalender json', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
