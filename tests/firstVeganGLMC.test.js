/* global describe, it, expect */
'use strict'
const { firstVeganGLMCFilePath } = require('../files')
const firstVeganGLMC = require(firstVeganGLMCFilePath)
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const schema = require('./examples/firstVeganGLMC').schema
const example = require('./examples/firstVeganGLMC').example

describe('firstVeganGLMC data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of firstVeganGLMC', () => {
    expect(firstVeganGLMC).not.toBe('')
  })
})

describe('test firstVeganGLMC json', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
