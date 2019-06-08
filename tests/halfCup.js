/* global describe, it, expect */
'use strict'

const { halfCup } = require('@files')

describe('this test prevents to any issues and problems, also to break the structure of halfCup data', () => {
  it('halfCup data files returns object', () => {
    expect(halfCup).not.toBe('')
  })
})
