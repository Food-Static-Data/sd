/* global describe, it, expect */
'use strict'
const { holiday } = require('../files')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('holidays data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of holiday', () => {
    expect(holiday).not.toBe('')
  })
})

const schema = {
  type: 'array', items: [{ type: 'string' }]
}
const example = [
  'Christmas',
  'Thanksgiving',
  'Summer',
  'Fall',
  'New Year',
  'Game Day',
  'Winter',
  'Spring',
  'Halloween',
  'Hanukkah',
  'Passover',
  'Easter',
  'Chinese New Year',
  '4th of July'
]

describe('tests holiday json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
