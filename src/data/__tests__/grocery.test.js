/* global describe, it, expect */
'use strict'
const { groceryFilePath } = require('../../../files.js')
const grocery = require(groceryFilePath)

describe('grocery data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of grocery', () => {
    expect(grocery).not.toBe('')
  })
})
