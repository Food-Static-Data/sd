/* global describe, it, expect */
'use strict'
const { derivationCodeDescr } = require('@files')
const { schema, example } = require('./examples/derivationCodeDescription')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('derivationCodeDescr data files returns a path', () => {
  it('these tests prevent any issues and problems, also to break the structure of derivationCodeDescr', () => {
    expect(derivationCodeDescr).not.toBe('')
  })
})

try {
  describe('test derivationCodeDescr json', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
