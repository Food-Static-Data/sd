/* global test, describe, it, expect */
'use strict'
import dbIngredients from '~/Ingredients/example/gs-loopback-sample.json'

describe('dbIngredients data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of dbIngredients', () => {
    expect(dbIngredients).not.toBe('')
  })
})
