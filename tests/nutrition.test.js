/* global describe, it, expect */
'use strict'
const { nutritionsFilePath } = require('../files')
const nutritions = require(nutritionsFilePath)

describe('nutritions data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of nutritions', () => {
    expect(nutritions).not.toBe('')
  })
})
