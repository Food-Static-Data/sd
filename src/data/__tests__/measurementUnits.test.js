/* global test, describe, it, expect */
'use strict'
const {measurementUnitsFilePath} = require('../../../files.js')
const {generatedMeasurementUnits} = require('../../../files.js')

const measurementUnits = require(measurementUnitsFilePath)

describe('users data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of measurementUnits', () => {
    expect(measurementUnits).not.toBe('')
  })
})

describe('users data files returns array', () => {
    test('these tests prevent any issues and problems, also to break the structure of measurementUnits', () => {
      expect(generatedMeasurementUnits).not.toBe('')
    })
})
