/* global describe, it, expect */
const exampleFiles = require('./exampleFilesNames')
const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('tests for example file existance', () => {
  it('validates that allergy example file exists', () => {
    expect(exampleFiles.allergy).not.toBeUndefined()
  })

  it('validates that attribute example file exists', () => {
    expect(exampleFiles.attribute).not.toBeUndefined()
  })

  it('validates that cookingTimes example file exists', () => {
    expect(exampleFiles.cookingTimes).not.toBeUndefined()
  })

  it('validates that course example file exists', () => {
    expect(exampleFiles.course).not.toBeUndefined()
  })

  it('validates that cuisine example file exists', () => {
    expect(exampleFiles.cuisine).not.toBeUndefined()
  })

  it('validates that cup1_8 example file exists', () => {
    expect(exampleFiles.cup1_8).not.toBeUndefined()
  })

  it('validates that cup1 example file exists', () => {
    expect(exampleFiles.cup1).not.toBeUndefined()
  })

  it('validates that cup3_4 example file exists', () => {
    expect(exampleFiles.cup3_4).not.toBeUndefined()
  })

  it('validates that dash example file exists', () => {
    expect(exampleFiles.dash).not.toBeUndefined()
  })

  it('validates that department example file exists', () => {
    expect(exampleFiles.department).not.toBeUndefined()
  })

  it('validates that diet example file exists', () => {
    expect(exampleFiles.diet).not.toBeUndefined()
  })

  it('validates that favorites example file exists', () => {
    expect(exampleFiles.favorites).not.toBeUndefined()
  })

  it('validates that firstVeganGLMC example file exists', () => {
    expect(exampleFiles.firstVeganGLMC).not.toBeUndefined()
  })

  it('validates that gallon example file exists', () => {
    expect(exampleFiles.gallon).not.toBeUndefined()
  })

  it('validates that grocery example file exists', () => {
    expect(exampleFiles.grocery).not.toBeUndefined()
  })

  it('validates that halfCup example file exists', () => {
    expect(exampleFiles.halfCup).not.toBeUndefined()
  })

  it('validates that holiday example file exists', () => {
    expect(exampleFiles.holiday).not.toBeUndefined()
  })

  it('validates that ingredients example file exists', () => {
    expect(exampleFiles.ingredients).not.toBeUndefined()
  })

  it('validates that items example file exists', () => {
    expect(exampleFiles.items).not.toBeUndefined()
  })

  it('validates that mealCalendar example file exists', () => {
    expect(exampleFiles.mealCalendar).not.toBeUndefined()
  })

  it('validates that measurement example file exists', () => {
    expect(exampleFiles.measurement).not.toBeUndefined()
  })

  it('validates that measurementSystems example file exists', () => {
    expect(exampleFiles.measurementSystems).not.toBeUndefined()
  })

  it('validates that measurementUnits example file exists', () => {
    expect(exampleFiles.measurementUnits).not.toBeUndefined()
  })

  it('validates that menu example file exists', () => {
    expect(exampleFiles.menu).not.toBeUndefined()
  })

  it('validates that nutrition example file exists', () => {
    expect(exampleFiles.nutrition).not.toBeUndefined()
  })

  it('validates that nutritionalAttributes example file exists', () => {
    expect(exampleFiles.nutritionalAttributes).not.toBeUndefined()
  })

  it('validates that pinch example file exists', () => {
    expect(exampleFiles.pinch).not.toBeUndefined()
  })

  it('validates that pint example file exists', () => {
    expect(exampleFiles.pint).not.toBeUndefined()
  })

  it('validates that quart example file exists', () => {
    expect(exampleFiles.quart).not.toBeUndefined()
  })

  it('validates that quarterCup example file exists', () => {
    expect(exampleFiles.quarterCup).not.toBeUndefined()
  })

  it('validates that recipe4 example file exists', () => {
    expect(exampleFiles.recipe4).not.toBeUndefined()
  })

  it('validates that tablespoon example file exists', () => {
    expect(exampleFiles.tablespoon).not.toBeUndefined()
  })

  it('validates that teaspoon example file exists', () => {
    expect(exampleFiles.teaspoon).not.toBeUndefined()
  })

  it('validates that types example file exists', () => {
    expect(exampleFiles.types).not.toBeUndefined()
  })

  it('validates that userGrocery example file exists', () => {
    expect(exampleFiles.userGrocery).not.toBeUndefined()
  })

  it('validates that users example file exists', () => {
    expect(exampleFiles.users).not.toBeUndefined()
  })
})
