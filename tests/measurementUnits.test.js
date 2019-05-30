/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { measurementUnitsFilePath, generatedMeasurementUnits } = require('../files')
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

describe(' MeasurementUnits schema testing', () => {
  it('validates  MeasurementUnits json schema', () => {
    const schema = {
      'properties': {
        'type': { 'type': 'string' },
        'name': { 'type': 'string' },
        'singular': { 'type': 'string' },
        'plural': { 'type': 'string' },
        'short': { 'type': 'string' },
        'pattern': { 'type': 'string' }
      },
      'required': [ 'type', 'name', 'singular', 'plural', 'short', 'pattern' ]

    }
    expect({ 'type': 'Weight', 'name': 'Pound', 'singular': 'pound', 'plural': 'pounds', 'short': 'lb', 'pattern': '[\\d]{1,2}' }).toMatchSchema(schema)
  })
})

describe(' generatedMeasurementUnits schema testing', () => {
  it('validates  generatedMeasurementUnits json schema', () => {
    const schema = {
      'properties': {
        'id': { 'type': 'string' },
        'system_id': { 'type': 'string' },
        'type': { 'type': 'string' },
        'name': { 'type': 'string' },
        'singular': { 'type': 'string' },
        'plural': { 'type': 'string' },
        'short': { 'type': 'string' },
        'pattern': { 'type': 'string' },
        'error': { 'type': 'string' }

      },
      'required': [ 'id', 'system_id', 'type', 'name', 'singular', 'plural', 'short', 'pattern', 'error' ]

    }
    expect({ 'id': 'fbe54b40-7a3e-11e9-8ec5-0d5ec94f7bcf', 'system_id': 'fbe57235-7a3e-11e9-8ec5-0d5ec94f7bcf', 'type': 'Weight', 'name': 'Pound', 'singular': 'pound', 'plural': 'pounds', 'short': 'lb', 'pattern': '[\\d]{1,2}', 'error': 'null' }).toMatchSchema(schema)
  })
})
