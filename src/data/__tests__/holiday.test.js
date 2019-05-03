/* global test, describe, it, expect */
'use strict'
const {holiday} = require('../../../files.js')

describe('holidays data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of holiday', () => {
    expect(holiday).not.toBe('')
  })
})
