/* global test, describe, it, expect, jest */
const groceristar = require('../groceristar.js')

const files = {
  departments, ingredients, users, groceries
} = require('../files')

// @TODO separate methods, related to different datasets.
// So methods related to ingredients should have a
// separated describe, with departments methods
//
const INGREDIENT_COUNT = 13634
const DEPARTMENT_COUNT = 58
const GROCERY_COUNT = 28
const USER_COUNT = 3

describe('testing objects inside groceries', () => {
  const groceryHaveProperty = property => {
    test(`Grocery have property ${property}`, () => {
      groceries.forEach(obj => {
        expect(obj).toHaveProperty(property)
      })
    })
  }

  groceryHaveProperty('id')
  groceryHaveProperty('departments')
  groceryHaveProperty('name')
  groceryHaveProperty('img')
  groceryHaveProperty('desc')
  groceryHaveProperty('slug')

  const groceryPropertyContain = (property, type) => {
    test(`Grocery property ${property} contain as data ${type}`, () => {
      grocery.forEach( obj => {
        expect(obj[property]).any(type)
      })
    })
  }

  groceryPropertyContain('departments', Array)
  groceryPropertyContain('id', Number)
  groceryPropertyContain('name', String)
  groceryPropertyContain('img', Boolean)
  groceryPropertyContain('desc', Boolean)
  groceryPropertyContain('slug', Boolean)
})

describe('testing objects inside ingredients', () => {

  const ingridientsHaveProperty = property => {
    test(`Each ingridient have property ${property}`, () => {
      ingridients.forEach( obj => {
        expect(obj).toHaveProperty(property)
      })
    })
  }

  ingridientsHaveProperty('name')
  ingridientsHaveProperty('department')

  const ingridientsPropertyContain = (property, type) => {
    test(`Ingridients property ${property} contain as data ${type}`, () => {
      ingridients.forEach( obj => {
        expect(obj[property]).any(type)
      })
    })
  }

  ingridientsPropertyContain('name', String)
  ingridientsPropertyContain('department', String)
})

describe('Groceristar project methods should return data', () => {

  const notEmptyMethodOutput = (method, parameter) => {
    test(`Groceristar ${method} with input value \'${parameter}\' return non empty string`, () => {
      const result = groceristar[method](parameter)
      expect(result).not.toBe('')
    })
  }

  notEmptyMethodOutput('getGroceryByName', 'Clean Fatiring')
  notEmptyMethodOutput('getGroceryByNameWithDepAndIng', 'Clean Fatiring')
  notEmptyMethodOutput('getAllDepartments')
  notEmptyMethodOutput('getAllIngredientsByOneDepartment', 'Fresh vegetables')
  notEmptyMethodOutput('getGroceryListsWithCountDepartments')
  notEmptyMethodOutput('getAllDepartmentList')
  notEmptyMethodOutput('getAllIngredientsList', 'Fresh vegetables')
  notEmptyMethodOutput('getAllGrocery')
  notEmptyMethodOutput('getGroceryListsByDepartment')

  const notCaseSensetiveMethod = (method, parameter) => {
    test(`Method \'${method}\' is not case sensetive with parameter \'${parameter}\'`, () => {
      const params = [];

      params.push(parameter.toUpperCase())
      params.push(parameter.toLowerCase())
      params.push(parameter.charAt(0).toUpperCase() + string.slice(1).toLowerCase())

      params.forEach( param => {
        const result = groceristar[method](param)
        expect(result.length).toBeGreaterThan(1)
      })
    })
  }

  test('getGroceryById()', () => {
    for (let i = 1; i <= GROCERY_COUNT; i++) {
      var result = groceristar.getGroceryById(i)
      expect(result).not.toBe('')
    }
  })
})
