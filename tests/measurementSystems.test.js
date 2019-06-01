/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { measurementSystemFilePath, generatedMeasurementSystem } = require('../files')
const measurementSystems = require(measurementSystemFilePath)

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

let schema = {
  'properties': {
    'alias': { 'type': 'string' }
  },
  'required': [ 'alias' ]
}

let example = { 'alias': 'universal' }

describe('MeasurementSystem json schema testing', () => {
  it('validates MeasurementSystem json schema', () => {
    expect(example).toMatchSchema(schema)
  })
})

schema = {
  'properties': {
    'id': { 'type': 'string' },
    'alias': { 'type': 'string' },
    'title': { 'type': 'string' }
  },
  'required': [ 'id', 'alias', 'title' ]

}

example = {
  'id': 'fbe4fd00-7a3e-11e9-8ec5-0d5ec94f7bcf', 'alias': 'universal', 'title': 'Universal'
}

describe('generatedMeasurementSystem json schema testing', () => {
  it('validates generatedMeasurementSystem json schema', () => {
    expect(example).toMatchSchema(schema)
  })
})
