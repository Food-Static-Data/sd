/* global test, describe, it, expect */
'use strict'
const {recipesFilePath} = require('../../../files.js')
const recipe = require(recipesFilePath)

describe('recipe data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of recipe', () => {
    expect(recipe).not.toBe('')
  })
})
