/* global test, describe, it, expect */
'use strict'
import allergies from '~/Allergy/allergies.json'

describe('tests for allergy', () => {
  test('allergies data files returns array', () => {
    expect(allergies).not.toBe('')
  })
})

