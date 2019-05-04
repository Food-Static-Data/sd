/* global test, describe, it, expect, jest */
const mealCalendarMethods = require('../mealCalendar.js')

const { mealCalendar } = require('../files')

describe('Meal Calendar. basic methods should work', () => {
  test('getDishByDay', () => {
    var result = mealCalendarMethods.getDishByDay('Monday')
    expect(result).not.toBe('')
  })

  test('getDishByWeek', () => {
    // @TODO maybe we can remove include from files...
    mealCalendar.map(meal => {
      var result = mealCalendarMethods.getDishByWeek(meal.id)
      expect(result).not.toBe('')
    })
  })

  test('getDishByMonth', () => {
    for (let i = 1; i <= 5; i++) {
      var result = mealCalendarMethods.getDishByMonth(i)
      expect(result).not.toBe('')
    }
  })
})
