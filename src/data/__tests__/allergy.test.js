/* global test, describe, it, expect */
'use strict'
import allergies from '~/Allergy/allergies.json'

describe('all tests related to allergies are here', () => {
  test('allergies data files returns array', () => {
    expect(allergies).not.toBe('')
  })
})

