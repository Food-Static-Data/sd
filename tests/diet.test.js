/* global describe, it, expect */
'use strict'
const { dietFilePath } = require('../files')
const diets = require(dietFilePath)

describe('diets data files returns array', () => {
  it('test for Diet', () => {
    expect(diets).not.toBe('')
  })
})
