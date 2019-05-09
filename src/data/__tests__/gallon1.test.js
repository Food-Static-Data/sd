/* global test, describe, it, expect */
'use strict'
const {gallon1} = require('../../../files.js')

describe('this test prevents to any issues and problems, also to break the structure of gallon1 data', () => {
  test('gallon1 data files returns object', () => {
    expect(gallon1).not.toBe('')
  })
})
