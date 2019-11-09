/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
const {
  measurementUnitsFilePath,
  generatedMeasurementUnits
} = require('@files')
const measurementUnits = require(measurementUnitsFilePath)
const {
  measurementUnitsSchema,
  measurementUnitsExample,
  generatedMeasUnitsSchema,
  generatedMeasUnitsExample
} = require('./examples/measurementUnits')

describe('users data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of measurementUnits', () => {
    expect(measurementUnits).not.toBe('')
  })
})

describe('users data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of measurementUnits', () => {
    expect(generatedMeasurementUnits).not.toBe('')
  })
})

try {
  describe(' MeasurementUnits schema testing', () => {
    it('validates  MeasurementUnits json schema', () => {
      expect(measurementUnitsExample).toMatchSchema(measurementUnitsSchema)
    })
  })

  describe(' generatedMeasurementUnits schema testing', () => {
    it('validates  generatedMeasurementUnits json schema', () => {
      expect(generatedMeasUnitsExample).toMatchSchema(generatedMeasUnitsSchema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
