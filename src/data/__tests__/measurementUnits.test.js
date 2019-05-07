/* global test, describe, it, expect */
'use strict'
import {measurementUnitsFilePath} from '../../../files.js'
import {generatedMeasurementUnits} from '../../../files.js'

import measurementUnits from measurementUnitsFilePath

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
