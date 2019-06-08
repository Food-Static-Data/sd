/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { nutritions2FilePath } = require('@files')
const nutritionalAttributes = require(nutritions2FilePath)

const { schema, example } = require('./examples/nutritionalAttributes')

describe('nutritionalAttributes data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of nutritionalAttributes', () => {
    expect(nutritionalAttributes).not.toBe('')
  })
})

describe('testng for nutritionalAttribute json data schema', () => {
  it('validates nutritionalAttribute json schema', () => {
    expect(example).toMatchSchema(schema)
  })
})
