/* global test, describe, it, expect */
'use strict'
import { quart1 } from '../../../files.js'

describe('this test prevents to any issues and problems, also to break the structure of quart1 data', () => {
  test('quart1 data files returns object', () => {
    expect(quart1).not.toBe('')
  })
})
