/* global describe, it, expect */
'use strict'
const { usersGroceryFilePath } = require('../../../files.js')
const userGrocery = require(usersGroceryFilePath)

describe('userGrocery data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of userGrocery', () => {
    expect(userGrocery).not.toBe('')
  })
})
