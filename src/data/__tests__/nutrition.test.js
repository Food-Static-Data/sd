/* global test, describe, it, expect */
'use strict'
import nutritions from '~/Nutrition/nutritions1.json'

describe('nutritions data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of nutritions', () => {
    expect(nutritions).not.toBe('')
  })
})
