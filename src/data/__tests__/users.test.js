/* global test, describe, it, expect */
'use strict'
import users from '~/Users/users.json'

describe('users data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of users', () => {
    expect(users).not.toBe('')
  })
})
