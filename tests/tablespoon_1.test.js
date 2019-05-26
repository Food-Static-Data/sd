/* global describe, it, expect */
'use strict'
const staticData = require('../filesObjects.js')

describe('this test prevents to any issues and problems, also to break the structure of tablespoon_1 data', () => {
  it('tablespoon_1 data files returns object', () => {
    expect(staticData.tablespoon1).not.toBe('')
  })
})
