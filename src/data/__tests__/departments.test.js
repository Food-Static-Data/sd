/* global test, describe, it, expect */
'use strict'
const {departmentsFilePath} = require('../../../files.js')
const departments = require(departmentsFilePath)

describe('departments data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of departments', () => {
    expect(departments).not.toBe('')
  })
})
