/* global test, describe, it, expect */
'use strict'
import measurementSystems from '~/Units/measurementSystems.json'

describe('users data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of measurementSystems', () => {
    expect(measurementSystems).not.toBe('')
  })
})
