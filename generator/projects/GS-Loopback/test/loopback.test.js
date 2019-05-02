/* global test, describe, it, expect, jest */
const loopback = require('../loopback.js')

describe('testing static data files returns array', () => {
  const nonEmptyMethodOutput = method => {
    test(`${method} method should not return empty string`, () => {
      var result = loopback[method]()
      expect(result).not.toBe('')
    })
  }
  nonEmptyMethodOutput('getUltimateGrocery')
  nonEmptyMethodOutput('getGLwithUserRelations')
  nonEmptyMethodOutput('getIngredientsSampleFromDB')
  nonEmptyMethodOutput('getUserObject')
})
