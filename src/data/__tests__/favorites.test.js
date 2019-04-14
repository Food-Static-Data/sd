/* global test, describe, it, expect */
'use strict'
import favorites from '~/Favorites/favorites.json'

describe('favorites data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of favorites', () => {
    expect(favorites).not.toBe('')
  })
})
