/* global test, describe, it, expect */
'use strict'
import menu from '~/Menu/menu.json'

describe('menu data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of menu', () => {
    expect(menu).not.toBe('')
  })
})
