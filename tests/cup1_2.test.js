/* global describe, it, expect */
'use strict'
// maybe import only object that we need, not all of them? @TODO
const staticData = require('../../../filesObjects.js')

describe('this test prevents to any issues and problems, also to break the structure of cup1_2 data', () => {
  it('cup1_2 data files returns object', () => {
    expect(staticData.cup12).not.toBe('')
  })
})
