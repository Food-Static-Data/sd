/* global test, describe, it, expect */
'use strict'
const {measurementSystemFilePath} = require('../../../files.js')
const {generatedMeasurementSystem} = require('../../../files.js')

const measurementSystems = require(measurementSystemFilePath)

describe('users data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of measurementSystems', () => {
    expect(measurementSystems).not.toBe('')
  })
})

describe('users data files returns array', () => {
    test('these tests prevent any issues and problems, also to break the structure of measurementSystems', () => {
        expect(generatedMeasurementSystem).not.toBe('')
    })
})

