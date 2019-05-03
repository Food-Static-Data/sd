/* global test, describe, it, expect */
'use strict'
const {firstVeganGLMCFilePath} = require('../../../files.js')
const firstVeganGLMC = require(firstVeganGLMCFilePath)

describe('firstVeganGLMC data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of firstVeganGLMC', () => {
    expect(firstVeganGLMC).not.toBe('')
  })
})
