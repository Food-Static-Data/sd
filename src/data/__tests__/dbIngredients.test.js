/* global test, describe, it, expect */
'use strict'
const {dbIngredientsFilePath} = require('../../../files.js')
const dbIngredients = require(dbIngredientsFilePath)

describe('dbIngredients data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of dbIngredients', () => {
    expect(dbIngredients).not.toBe('')
  })
})
