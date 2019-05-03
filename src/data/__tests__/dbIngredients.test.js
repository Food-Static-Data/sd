/* global test, describe, it, expect */
'use strict'
import {dbIngredientsFilePath} from '../../../files.js'
const dbIngredients = require(dbIngredientsFilePath)

describe('dbIngredients data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of dbIngredients', () => {
    expect(dbIngredients).not.toBe('')
  })
})
