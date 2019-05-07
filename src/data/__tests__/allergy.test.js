/* global test, describe, it, expect */
'use strict'
import { allergiesFilePath } from '../../../files.js'
import allergies from allergiesFilePath

describe('tests for allergy', () => {
  test('allergies data files returns array', () => {
    expect(allergies).not.toBe('')
  })
})
