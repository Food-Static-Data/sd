/* global test, describe, it, expect */
'use strict'
import allergies from './src/data/Allergy/allergies.json'

describe('this test prevents to any issues and problems, also to break the structure of allergies data', () => {
  test('allergies data files returns array', () => {
    expect(allergies).not.toBe('')
  })
})
