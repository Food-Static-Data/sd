/* global test, describe, it, expect */
'use strict'
const {pint1} = require('../../../files.js')

describe('this test prevents to any issues and problems, also to break the structure of pint1 data', () => {
  test('pint1 data files returns object', () => {
    expect(pint1).not.toBe('')
  })
})
