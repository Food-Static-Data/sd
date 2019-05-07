/* global test, describe, it, expect */
'use strict'
import {ultimateGroceryListFilePath} from '../../../files.js'
import ultimateGroceryList from ultimateGroceryListFilePath

describe('ultimateGroceryList data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of ultimateGroceryList', () => {
    expect(ultimateGroceryList).not.toBe('')
  })
})
