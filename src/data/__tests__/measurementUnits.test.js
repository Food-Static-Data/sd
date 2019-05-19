/* global describe, it, expect */
'use strict'
const { measurementUnitsFilePath, generatedMeasurementUnits } = require('../../../files.js')
const measurementUnits = require(measurementUnitsFilePath)

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
