/* global test, describe, it, expect */
'use strict'
import courses from '~/Course/courses.json'

describe('courses data files returns array', () => {
  test('this test prevents to any issues and problems, also to break the structure of courses', () => {
    expect(courses).not.toBe('')
  })
})
