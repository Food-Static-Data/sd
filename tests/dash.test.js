/* global describe, it, expect */
'use strict'
const staticData = require('../filesObjects')

describe('this test prevents to any issues and problems, also to break the structure of dash data', () => {
  it('dash data files returns object', () => {
    expect(staticData.dash).not.toBe('')
  })
})
