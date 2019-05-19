/* global describe, it, expect */
'use strict'
const { tablespoon1 } = require('../../../files.js')

describe('this test prevents to any issues and problems, also to break the structure of tablespoon_1 data', () => {
  it('tablespoon_1 data files returns object', () => {
    expect(tablespoon1).not.toBe('')
  })
})
