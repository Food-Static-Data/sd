/* global describe, it, expect */
'use strict'
const { courseFilePath } = require('@files')
const courses = require(courseFilePath)
const { matchers } = require('jest-json-schema')
const { schema, example } = require('./examples/course')
expect.extend(matchers)

describe('courses data files returns array', () => {
  it('this test prevents to any issues and problems, also to break the structure of courses', () => {
    expect(courses).not.toBe('')
  })
})

try {
  describe('tests for course schema', () => {
    it('validates course json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
