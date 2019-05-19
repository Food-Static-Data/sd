/* global test, describe, it, expect */
'use strict'
const { pinch } = require('../../../files.js')

describe('this test prevents to any issues and problems, also to break the structure of pinch data', () => {
  it('pinch data files returns object', () => {
    expect(pinch).not.toBe('')
  })
})
