/* global test, describe, it, expect */
'use strict'
import cooking-times from '~/GroceriStar/cd/cooking-times.js'

describe('this test prevents to any issues and problems, also to break the structure of cuisines data cooking-times', () => {
  test('cookng-times data files returns object', () => {
    expect(cooking-times).not.toBe('')
  })
})
