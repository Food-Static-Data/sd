/* global test, describe, it, expect */
'use strict'
const {teaspoon_1} = require('../../../files.js')

describe('this test prevents to any issues and problems, also to break the structure of teaspoon_1 data', () => {
  test('teaspoon_1 data files returns object', () => {
    expect(teaspoon_1).not.toBe('')
  })
})
