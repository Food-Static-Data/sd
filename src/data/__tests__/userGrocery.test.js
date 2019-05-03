/* global test, describe, it, expect */
'use strict'
import {usersGroceryFilePath} from '../../../files.js'
const userGrocery = require(usersGroceryFilePath)

describe('userGrocery data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of userGrocery', () => {
    expect(userGrocery).not.toBe('')
  })
})
