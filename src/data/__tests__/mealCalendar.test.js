/* global test, describe, it, expect */
'use strict'
const {mealCalendarFilePath} = require('../../../files.js')
const mealcalendar = require(mealCalendarFilePath)

describe('mealcalendar data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of mealcalendar', () => {
    expect(mealcalendar).not.toBe('')
  })
})
