/* global describe, it, expect */
'use strict'
const staticData = require('../../../filesObjects.js')

describe('this test prevents to any issues and problems, also to break the structure of pinch data', () => {
  it('pinch data files returns object', () => {
    expect(staticData.pinch).not.toBe('')
  })
})
