/* global describe, it, expect */
'use strict'
const { getFileInfo } = require('../src/utils')
const { matchers } = require('jest-json-schema')
const path = require('path')
var location = './../tests/sampleFile'
location = path.resolve(location)
expect.extend(matchers)
describe('getFileInfo with only 1 argument', () => {
    it('should return the list of files in the folder', () => {
        const location = './sampleFile'
        const result = getFileInfo(location)
        const expected = ['basic-grocery-list.json']
        expect(result.values).toEqual(expected.values)
    })
})

describe('getFileInfo with all 3 arguments', () => {
    it('should return the content of given file', () => {
        const result = getFileInfo(location, 1, 'basic-grocery-list.json')
        const expected = { "departments": ["staples", "tinnedFood", "vegetables"], "name": "basic-grocery-list", "img": false, "desc": false, "slug": false }
        expect(result.values).toEqual(expected.values)
    })
})
