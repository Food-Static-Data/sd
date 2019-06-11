/* global describe, it, expect */
const exampleFiles = require('./exampleFilesNames')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('tests for example file existance', () => {
  it('validates that allergy example file exists', () => {
    expect(exampleFiles.allergy).not.toBeUndefined()
  })
})
