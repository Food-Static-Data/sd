/* global describe, it, expect */
'use strict'
const { schema, example } = require('./examples/mealCalendar')
const { mealCalendarFilePath } = require('@files')
const mealcalendar = require(mealCalendarFilePath)
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

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
