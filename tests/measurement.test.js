/* global describe, it, expect */
'use strict'
const { measurementsFilePath } = require('@files')
const measurements = require(measurementsFilePath)

const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { schema, example } = require('./examples/measurement')

describe('measurements data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of measurement', () => {
    expect(measurements).not.toBe('')
  })
})

describe('tests measurement json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
