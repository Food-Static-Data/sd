/* global describe, it, expect */
'use strict'
const { cup12 } = require('../../../files.js')

describe('this test prevents to any issues and problems, also to break the structure of cup1_2 data', () => {
  it('cup1_2 data files returns object', () => {
    expect(cup12).not.toBe('')
  })
})
