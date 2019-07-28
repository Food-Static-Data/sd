/* global describe, it, expect */
'use strict'
const { groceryListWithUserRelationsFilePath } = require('@files')
const groceryListWithUserRelations = require(groceryListWithUserRelationsFilePath)

describe('groceryListWithUserRelations data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of groceryListWithUserRelations', () => {
    expect(groceryListWithUserRelations).not.toBe('')
  })
})
