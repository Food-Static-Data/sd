/* global describe, it, expect */
const uuidv1 = require('uuid/v1')
const dayjs = require('dayjs')

const __generateId = () => {
  return uuidv1()
}

const __generateDate = () => {
  return dayjs().toDate()
}

const testFile = (file) => {
    describe(`tests for ${file}`, () => {
        it(`${file} data files returns array`, () => {
          expect(file).not.toBe('')
        })
      })    
}


const jsonSchemaTest = ( file, example, schema) => {
    describe(`test ${file} json schema`, () => {
    it(`validates ${file} json-schema`, () => {
      expect(example).toMatchSchema(schema)
    })
  })

}

module.exports = { __generateId, __generateDate, testFile, jsonSchemaTest }
