/* global describe, it, expect */
'use strict'
const { ultimateGroceryListFilePath } = require('@files')
const ultimateGroceryList = require(ultimateGroceryListFilePath)

describe('ultimateGroceryList data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of ultimateGroceryList', () => {
    expect(ultimateGroceryList).not.toBe('')
  })
})
