/* global describe, it, expect */
'use strict'
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const { menuFilePath } = require('../files')
const menu = require(menuFilePath)

describe('menu data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of menu', () => {
    expect(menu).not.toBe('')
  })
})
const index = 7
const schema = {
  properties: {
    id: { type: 'string' },
    title: { type: 'string' },
    date: { type: 'string' },
    description: { type: 'string' },
    notes: { type: 'string' }
  },
  required: ['id', 'title', 'date', 'description', 'notes']
}

const example = { id: '4abba3e0-6106-11e9-9ffc-a3e52b2d927f', title: `Weekly menu #${index}`, date: '2019-04-17T11:45:26.302Z', description: `description for Weekly menu #${index}`, notes: `This is a chef notes for wm #${index}`
}
describe('types json schema testing', () => {
  it('validates type json schema', () => {
    expect(example).toMatchSchema(schema)
  })
})
