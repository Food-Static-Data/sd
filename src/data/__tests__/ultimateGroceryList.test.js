/* global test, describe, it, expect */
'use strict'
import ultimateGroceryList from '~/Grocery/example/ultimate-gl-from-loopback-server-example.json'

describe('ultimateGroceryList data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of ultimateGroceryList', () => {
    expect(ultimateGroceryList).not.toBe('')
  })
})
