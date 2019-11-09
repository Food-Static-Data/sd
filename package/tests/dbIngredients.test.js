/* global describe, it, expect */
'use strict'
const { dbIngredientsFilePath } = require('@files')
const dbIngredients = require(dbIngredientsFilePath)

describe('dbIngredients data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of dbIngredients', () => {
    expect(dbIngredients).not.toBe('')
  })
})
