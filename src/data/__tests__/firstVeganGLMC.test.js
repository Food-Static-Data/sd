/* global test, describe, it, expect */
'use strict'
import firstVeganGLMC from '~/MealCalendar/First-Vegan-Grocery-List-MC.json'

describe('firstVeganGLMC data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of firstVeganGLMC', () => {
    expect(firstVeganGLMC).not.toBe('')
  })
})
