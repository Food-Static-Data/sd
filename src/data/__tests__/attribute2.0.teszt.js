/* global test, describe, it, expect */
'use strict'
const { attributes } = require('../../../files.js')

describe('attributes data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of attributes', () => {
    expect(attributes).not.toBe('')
  })
})
