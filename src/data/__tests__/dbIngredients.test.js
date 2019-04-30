/* global test, describe, it, expect */
'use strict'
import dbIngredients from '../../files.js'

describe('dbIngredients data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of dbIngredients', () => {
    expect(dbIngredients).not.toBe('')
  })
})
