/* global describe, it, expect */
'use strict'
const { measurementSystemFilePath, generatedMeasurementSystem } = require('../files')
const measurementSystems = require(measurementSystemFilePath)

describe('users data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of measurementSystems', () => {
    expect(measurementSystems).not.toBe('')
  })
})

describe('users data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of measurementSystems', () => {
    expect(generatedMeasurementSystem).not.toBe('')
  })
})
