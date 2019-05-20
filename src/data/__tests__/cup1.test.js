/* global test, describe, it, expect */
'use strict'
const staticData= require('../../../filesObjects.js')

describe('this test prevents to any issues and problems, also to break the structure of cup1 data', () => {
  test('cup1 data files returns object', () => {
    expect(staticData.cup1).not.toBe('')
  })
})
