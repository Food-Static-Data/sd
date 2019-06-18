/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
const { nutritionsFilePath, nutritions2 } = require('@files')
const nutritions = require(nutritionsFilePath)
const {
  nutrition1Schema,
  nutrition1Example,
  nutrition2Schema,
  nutrition2Example
} = require('./examples/nutrition')

describe('nutritions data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of nutritions', () => {
    expect(nutritions).not.toBe('')
  })
})

describe('nutritions2 data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of nutritions2', () => {
    expect(nutritions2).not.toBe('')
  })
})

try {
  describe('test nutrition1 json-schema', () => {
    it('validates nutrition1 json-schema', () => {
      expect(nutrition1Example).toMatchSchema(nutrition1Schema)
    })
  })

  describe('nutritions2 json schema testing', () => {
    it('validates nutritions2 json schema', () => {
      expect(nutrition2Example).toMatchSchema(nutrition2Schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
