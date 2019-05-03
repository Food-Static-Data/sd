/* global test, describe, it, expect, jest */
const showcase = require('../showcase.js')

describe('Showcase project methods should return data', () => {
  test('method getGroceryShowcase()', () => {
    var result = showcase.getGroceryShowcase()
    expect(result).not.toBe('')
  })
})
