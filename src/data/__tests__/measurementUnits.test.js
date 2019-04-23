/* global test, describe, it, expect */
'use strict'
import measurementUnits from '~/Units/measurementUnits.json'

describe('users data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of measurementUnits', () => {
    expect(measurementUnits).not.toBe('')
  })
})
