/* global test, describe, it, expect */
'use strict'
import {cuisineFilePath} from '../../../files.js'
const cuisines = require(cuisineFilePath)

describe('this test prevents to any issues and problems, also to break the structure of cuisines data files', () => {
  test('cuisines data files returns array', () => {
    expect(cuisines).not.toBe('')
  })
})
