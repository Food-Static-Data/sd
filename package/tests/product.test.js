/* global describe, it, expect */
'use strict'
const path = require('path')
const { getFileInfo } = require('../src/utils')
const { schema, example } = require('./examples/product')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

const pathJson = '../generator/projects/USFA/Product'
const files = getFileInfo(pathJson)

describe('product data files returns a path', () => {
  files.forEach((file) => {
    if (path.extname(file) !== '.js') {
      const filePath = path.resolve(__dirname, pathJson, file)
      it(`prevents any issues and problems product file: ${file}`, () => {
        expect(filePath).not.toBe('')
      })
    }
  })
})

try {
  describe('test product json', () => {
    it('validates my json', () => {
      expect(example).toMatchSchema(schema)
    })
  })
} catch (e) {
  console.log(`${e.name}: ${e.message}`)
}
