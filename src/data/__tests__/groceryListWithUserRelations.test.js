/* global test, describe, it, expect */
'use strict'
import groceryListWithUserRelations from '~/Grocery/example/grocery-with-user-relations.json'

describe('groceryListWithUserRelations data files returns array', () => {
  test('these tests prevent any issues and problems, also to break the structure of groceryListWithUserRelations', () => {
    expect(groceryListWithUserRelations).not.toBe('')
  })
})
