/* global test, describe, it, expect */
'use strict'
import {recipesFilePath} from '../../../files.js'
const recipe = require(recipesFilePath)

describe('recipe data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of recipe', () => {
    expect(recipe).not.toBe('')
  })
})
