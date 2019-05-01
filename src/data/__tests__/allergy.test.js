/* global test, describe, it, expect */
'use strict'
import {allergiesFilePath as allergies} from '../../../files.js'

describe('tests for allergy', () => {
  test('allergies data files returns array', () => {
    expect(allergies).not.toBe('')
  })
})
