/* global describe, it, expect */
'use strict'
const { firstVeganGLMCFilePath } = require('@files')
const firstVeganGLMC = require(firstVeganGLMCFilePath)
const { matchers } = require('jest-json-schema')
const { schema, example } = require('./examples/firstVeganGLMC')
expect.extend(matchers)

describe('firstVeganGLMC data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of firstVeganGLMC', () => {
    expect(firstVeganGLMC).not.toBe('')
  })
})

try {
  describe('test firstVeganGLMC json', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
