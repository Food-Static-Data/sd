/* global describe, it, expect */
'use strict'
const { menuFilePath } = require('../../../files.js')
const menu = require(menuFilePath)

describe('menu data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of menu', () => {
    expect(menu).not.toBe('')
  })
})
