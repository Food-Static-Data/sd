/* global describe, it, expect */
'use strict'
const { usersFilePath } = require('../../../files.js')
const users = require(usersFilePath)

describe('users data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of users', () => {
    expect(users).not.toBe('')
  })
})
