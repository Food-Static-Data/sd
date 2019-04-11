/* global test, describe, it, expect */
'use strict'
import attribute2.0 from '~/Attribute2.0/attribute2.0.json'

describe('attribute2.0 data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of attribute2.0', () => {
    expect(attribute2.0).not.toBe('')
  })
})
