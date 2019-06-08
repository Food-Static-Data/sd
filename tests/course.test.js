/* global describe, it, expect */
'use strict'
const { courseFilePath } = require('@files')
const courses = require(courseFilePath)
const schema = require('./examples/course').schema
const example = require('./examples/course').example
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('courses data files returns array', () => {
  it('this test prevents to any issues and problems, also to break the structure of courses', () => {
    expect(courses).not.toBe('')
  })
})

describe('tests for course schema', () => {
  it('validates course json', () => {
    expect(example).toMatchSchema(schema)
  })
})
