/* global test, describe, it, expect */
'use strict'
import allergies from '~/Allergy/allergies.json'

describe('allergies data files returns array', () => {
  test('all tests depended on allergies are here', () => {
    expect(allergies).not.toBe('')
  })
})

