/* global describe, it, expect */
'use strict'
const { measurementsFilePath } = require('@files')
const measurements = require(measurementsFilePath)
const { schema, example } = require('./examples/measurement')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('measurements data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of measurement', () => {
    expect(measurements).not.toBe('')
  })
})

try {
  describe('tests measurement json schema', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
