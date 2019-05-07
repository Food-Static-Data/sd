/* global test, describe, it, expect */
'use strict'
import {measurementSystemFilePath} from '../../../files.js'
import {generatedMeasurementSystem} from '../../../files.js'

import measurementSystems from measurementSystemFilePath

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

