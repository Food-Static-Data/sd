/* global test, describe, it, expect */
'use strict'
const {dietFilePath} = require('../../../files.js')
const diets = require(dietFilePath)

describe('diets data files returns array', () => {
  test('test for Diet', () => {
    expect(diets).not.toBe('')
  })
})
