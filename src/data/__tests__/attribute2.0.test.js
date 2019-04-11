/* global test, describe, it, expect */
'use strict'
import allergies from '~/Allergy/allergies.json'

describe('attribute2.0 data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of attribute2.0', () => {
    expect(allergies).not.toBe('')
  })
})
