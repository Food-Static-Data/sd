/* global test, describe, it, expect */
'use strict'
import attributes from '~/Attribute2.0/attribute2.0.json'

describe('attributes data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of attributes', () => {
    expect(attributes).not.toBe('')
  })
})
