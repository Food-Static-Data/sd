/* global test, describe, it, expect, jest */
const graphQL = require('../graphQL.js')

describe('graphQL methods should return data', () => {
  const nonEmptyMethodOutput = method => {
    test(`${method} is returning non empty string`, () => {
      const result = graphQL[method](parameter)
      expect(result).not.toBe('')
    })
  }

  nonEmptyMethodOutput('getDepartmentsGraphQLKey')
  nonEmptyMethodOutput('getGroceryGraphQL')
  nonEmptyMethodOutput('getGroceryGraphQLKey')
  nonEmptyMethodOutput('getIngredientsGraphQL')
  nonEmptyMethodOutput('getIngredientsGraphQLKey')
  nonEmptyMethodOutput('getUsersGraphQL')
  nonEmptyMethodOutput('getUsersGraphQLKey')
})
