/* global test, describe, it, expect */
'use strict'
import allergies from '~/Allergy/allergies.json'

describe('allergies data files returns array', () => {
  test('test for Allergy', () => {
    expect(allergies).not.toBe('')
  })
})

