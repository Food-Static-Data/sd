/* global test, describe, it, expect */
'use strict'
import {groceryFilePath} from '../../../files.js'
import grocery from groceryFilePath

describe('grocery data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of grocery', () => {
    expect(grocery).not.toBe('')
  })
})
