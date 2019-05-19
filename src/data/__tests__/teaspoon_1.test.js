/* global describe, it, expect */
'use strict'
const { teaspoon1 } = require('../../../files.js')

describe('this test prevents to any issues and problems, also to break the structure of teaspoon_1 data', () => {
  it('teaspoon_1 data files returns object', () => {
    expect(teaspoon1).not.toBe('')
  })
})
