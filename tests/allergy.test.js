/* global describe, it, expect */
'use strict'
const staticData = require('../filesObjects')
// const allergies = require(allergiesFilePath)

describe('tests for allergy', () => {
  it('allergies data files returns array', () => {
    expect(staticData.allergies).not.toBe('')
  })
})
