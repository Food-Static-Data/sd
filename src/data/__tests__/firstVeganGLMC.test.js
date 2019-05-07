/* global test, describe, it, expect */
'use strict'
import {firstVeganGLMCFilePath} from '../../../files.js'
import firstVeganGLMC from firstVeganGLMCFilePath

describe('firstVeganGLMC data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of firstVeganGLMC', () => {
    expect(firstVeganGLMC).not.toBe('')
  })
})
