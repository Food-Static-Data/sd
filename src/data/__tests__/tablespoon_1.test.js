/* global test, describe, it, expect */
'use strict'
const {tablespoon_1} = require('../../../files.js')

describe('this test prevents to any issues and problems, also to break the structure of tablespoon_1 data', () => {
  test('tablespoon_1 data files returns object', () => {
    expect(tablespoon_1).not.toBe('')
  })
})
