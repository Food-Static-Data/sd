/* global test, describe, it, expect */
'use strict'
import cuisines from '../../../files.js'

describe('this test prevents to any issues and problems, also to break the structure of cuisines data files', () => {
  test('cuisines data files returns array', () => {
    expect(cuisines).not.toBe('')
  })
})
