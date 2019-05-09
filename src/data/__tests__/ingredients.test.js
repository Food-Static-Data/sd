/* global test, describe, it, expect */
'use strict'
const {ingredientsFilePath} = require('../../../files.js')
const ingredients = require(ingredientsFilePath)

describe('ingredients data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of ingredients', () => {
    expect(ingredients).not.toBe('')
  })
})
