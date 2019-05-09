/* global test, describe, it, expect */
'use strict'
const {allergiesFilePath} = require('../../../files.js')
const allergies = require(allergiesFilePath)

describe('tests for allergy', () => {
  test('allergies data files returns array', () => {
    expect(allergies).not.toBe('')
  })
})
