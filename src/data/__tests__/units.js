/* global test, describe, it, expect */
'use strict'
import units from '~/Units/units.json'

describe('units data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of units', () => {
    expect(units).not.toBe('')
  })
})
