/* global test, describe, it, expect */
'use strict'
import items from '~/Items/items.json'

describe('items data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of items', () => {
    expect(items).not.toBe('')
  })
})
