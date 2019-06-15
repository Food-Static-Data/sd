/* global describe, it, expect */
const exampleFiles = require('./exampleFilesNames')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('tests for example file existance', (type) => {

  it(`validates that ${type} example file exists`, () => {
    expect(exampleFiles.type).not.toBeUndefined()
  })
})
