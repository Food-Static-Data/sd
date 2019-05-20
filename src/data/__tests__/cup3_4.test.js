/* global describe, it, expect */
'use strict'
const { cup34 } = require('../../../files.js')

describe('this test prevents to any issues and problems, also to break the structure of cup3_4 data', () => {
  it('cup3_4 data files returns object', () => {
    expect(cup34).not.toBe('')
  })
})
