/* global describe, it, expect */
'use strict'
const staticData = require('../../../filesObjects.js')

describe('this test prevents to any issues and problems, also to break the structure of cup1_4 data', () => {
  it('cup1_4 data files returns object', () => {
    expect(staticData.cup14).not.toBe('')
  })
})
