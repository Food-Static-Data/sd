/* global describe, it, expect */
const exampleFiles = require('./exampleFilesNames')
const { matchers } = require('jest-json-schema')
const {} = require('./examples')
expect.extend(matchers)


describe('tests for example file existance', () => {
  const doesFileExist = (type) =>{
  test(`validates that ${type} example file exists`, () => {
    expect(exampleFiles[type]).not.toBeUndefined()
  })}
})
