/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
const {
  measurementSystemFilePath,
  generatedMeasurementSystem
} = require('@files')
const measurementSystems = require(measurementSystemFilePath)
const {
  measurementSystemsSchema,
  measurementSystemsExample,
  generatedMeasSystemSchema,
  generatedMeasSystemExample
} = require('./examples/measurementSystems')

try {
  describe('users data files returns array', () => {
    it('these tests prevent any issues and problems, also to break the structure of measurementSystems', () => {
      expect(measurementSystems).not.toBe('')
    })
  })

  describe('users data files returns array', () => {
    it('these tests prevent any issues and problems, also to break the structure of generatedMeasurementSystem', () => {
      expect(generatedMeasurementSystem).not.toBe('')
    })
  })

  describe('MeasurementSystem json schema testing', () => {
    it('validates MeasurementSystem json schema', () => {
      expect(measurementSystemsExample).toMatchSchema(measurementSystemsSchema)
    })
  })

  describe('generatedMeasurementSystem json schema testing', () => {
    it('validates generatedMeasurementSystem json schema', () => {
      expect(generatedMeasSystemExample).toMatchSchema(generatedMeasSystemSchema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
