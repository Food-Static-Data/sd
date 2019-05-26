/* global describe, it, expect */
'use strict'
const staticData = require('../filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of cup1_8 data', () => {
  it('cup1_8 data files returns object', () => {
    expect(staticData.cup18).not.toBe('')
  })
})
