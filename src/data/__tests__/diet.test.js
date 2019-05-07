/* global test, describe, it, expect */
'use strict'
import {dietFilePath} from '../../../files.js'
import diets from dietFilePath

describe('diets data files returns array', () => {
  test('test for Diet', () => {
    expect(diets).not.toBe('')
  })
})
