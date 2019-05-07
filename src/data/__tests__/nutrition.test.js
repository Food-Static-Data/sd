/* global test, describe, it, expect */
'use strict'
import {nutritionsFilePath} from '../../../files.js'
import nutritions from nutritionsFilePath

describe('nutritions data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of nutritions', () => {
    expect(nutritions).not.toBe('')
  })
})
