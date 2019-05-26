/* global describe, it, expect */
'use strict'
const staticData = require('../filesObjects.js')

describe('this test prevents to any issues and problems, also to break the structure of quart1 data', () => {
  it('quart1 data files returns object', () => {
    expect(staticData.quart1).not.toBe('')
  })
})
