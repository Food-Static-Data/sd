/* global test, describe, it, expect */
'use strict'
import userGrocery from '~/UserGrocery/userGrocery.json'

describe('userGrocery data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of userGrocery', () => {
    expect(userGrocery).not.toBe('')
  })
})
