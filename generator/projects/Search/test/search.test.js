/* global test, describe, it, expect, jest */
const search = require('../search.js')

describe('testing search getAttribute method', () => {
  const testAttributes = attribute => {
    test(`getAttribute ${attribute}`, () => {
      var stream = search.getAttribute(attribute)
      expect(stream).not.toBe('')
    })
  }

  testAttributes('allergies')
  testAttributes('cuisines')
  testAttributes('courses')

  testAttributes('holidays')
  testAttributes('diets')
})

describe('testing search getPlaceholder method', () => {

  const testPlaceholders = attribute => {
    test(`getPlaceholder ${attribute}`, () => {
      var stream = search.getPlaceholder(attribute)
      expect(stream).not.toBe('')
    })
  }

  testPlaceholders('Allergy')
  testPlaceholders('Diets')
  testPlaceholders('Cuisine')

  testPlaceholders('Course')
  testPlaceholders('Holidays')
})

describe('testing search getData method', () => {

 const testGetData = (value, type = 'attribute') => {

  test(`getData ${value}`, () => {

    if (type == 'attribute') {
      if(typeof value === 'undefined'){
        expect(search.getData()).toEqual('Incorrect attribute or empty argument')
      }
      expect(search.getData(value)).not.toEqual([]);
    }
  
     if (type == 'ingredient') {
      expect(search.getData()).not.toEqual([]);
    }
  
   })
 }
 
  testGetData('allergies')
  testGetData('cuisines')
  testGetData('courses')
  testGetData('holidays')
  testGetData('diets')
  testGetData(null,'ingredient')
  testGetData()
  
});
