/* global describe, it, expect */
'use strict'
const staticData = require('../filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of pint1 data', () => {
  it('pint1 data files returns object', () => {
    expect(staticData.pint1).not.toBe('')
  })
})
