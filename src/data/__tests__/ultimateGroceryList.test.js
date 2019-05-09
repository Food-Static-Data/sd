/* global test, describe, it, expect */
'use strict'
const {ultimateGroceryListFilePath} = require('../../../files.js')
const ultimateGroceryList = require(ultimateGroceryListFilePath)

describe('ultimateGroceryList data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of ultimateGroceryList', () => {
    expect(ultimateGroceryList).not.toBe('')
  })
})
