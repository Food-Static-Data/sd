/* global describe, it, expect */
'use strict'
const { courseFilePath } = require('../../../files.js')
const courses = require(courseFilePath)

describe('courses data files returns array', () => {
  it('this test prevents to any issues and problems, also to break the structure of courses', () => {
    expect(courses).not.toBe('')
  })
})
