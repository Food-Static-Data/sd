/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)
const { schema, example } = require('./examples/nutritionalAttributes')
const { nutritions2FilePath } = require('@files')
const nutritionalAttributes = require(nutritions2FilePath)
const { readAllFiles } = require('./../src/utils')
const path = './../generator/projects/USFA/Nutrition'
const content = readAllFiles(path)
// console.log(content)

describe('nutritionalAttributes data files returns array',
  () => {
    const doesFileExist = (element) => {
      it('these tests prevent any issues and problems, also to break the structure of nutritionalAttributes', () => {
        expect(element).not.toBe('')
      })
    }
    content.forEach(element => {
      doesFileExist(element)
      // schemaMatches(element)
    })
  }
)
describe('testng for nutritionalAttribute json data schema',
  () => {
    const schemaMatches = (element) => {
      it('validates nutritionalAttribute json schema', () => {
        expect(element).toMatchSchema(schema)
      })
    }
    content.forEach(element => {
      schemaMatches(element)
    })
  }
)
