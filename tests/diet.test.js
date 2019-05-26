/* global describe, it, expect */
'use strict'
const { dietFilePath } = require('../files.js')
const diets = require(dietFilePath)

describe('diets data files returns array', () => {
  it('test for Diet', () => {
    expect(diets).not.toBe('')
  })
})
