/* global describe, it, expect */
'use strict'
const staticData = require('../filesObjects.js')

describe('this test prevents to any issues and problems, also to break the structure of gallon1 data', () => {
  it('gallon1 data files returns object', () => {
    expect(staticData.gallon1).not.toBe('')
  })
})
