/* global describe, test, expect */
const exampleFiles = require('./exampleFilesNames')
const {
  matchers
} = require('jest-json-schema')
expect.extend(matchers)

describe('tests for example file existance', () => {
  const doesFileExist = (type) => {
    test(`validates that ${type} example file exists`, () => {
      expect(exampleFiles[type]).not.toBeUndefined()
    })
  }
  
  doesFileExist('allergy')
  doesFileExist('course')
  doesFileExist('attribute')
  doesFileExist('cookingTimes')
  doesFileExist('cuisine')
  doesFileExist('cup1_8')
  doesFileExist('cup1')
  doesFileExist('cup3_4')
  doesFileExist('diet')
  doesFileExist('department')
  doesFileExist('dash')
  doesFileExist('favorites')
  doesFileExist('firstVeganGLMC')
  doesFileExist('gallon')
  doesFileExist('grocery')
  doesFileExist('halfCup')
  doesFileExist('holiday')
  doesFileExist('ingredients')
  doesFileExist('mealCalendar')
  doesFileExist('measurement')
  doesFileExist('measurementSystems')
  doesFileExist('measurementUnits')
  doesFileExist('menu')
  doesFileExist('nutrition')
  doesFileExist('nutritionalAttributes')
  doesFileExist('pinch')
  doesFileExist('pint')
  doesFileExist('quart')
  doesFileExist('quarterCup')
  doesFileExist('userGrocery')
  doesFileExist('types')
  doesFileExist('tablespoon')
  doesFileExist('recipe4')
  doesFileExist('users')
})
