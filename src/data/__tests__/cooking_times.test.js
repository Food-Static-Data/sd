/* global test, describe, it, expect */
'use strict'
import cooking_times from '../../../cooking_times'

describe('this test prevents to any issues and problems, also to break the structure of cooking_times data', () => {
  test('cooking_times data files returns object', () => {
    expect(cooking_times).not.toBe('')
  })
})
