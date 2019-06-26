import _ from 'lodash'
import { __generateId } from '@utils'

import { departments, ingredients, grocery, users } from '@files'





/**
 * @returns {array} of keys for departments and ingredients
 */

const getKeyArrayDepAndIng = () => {
  let keys = []

  let departments = getAllDepartmentsWithId()
  let ingredients = getAllIngredientsWithId()

  _.forEach(departments, (department) => {
    _.forEach(ingredients, (ingredient) => {
      if (_.includes(ingredient, department.name)) {
        keys.push({
          [department.key]: ingredient.key
        })
      }
    })
  })

  return keys
}








// get ultimate grocery list for each grocery store
// @TODO is this method for GSLoopback structure?
// if yes - we should move it to GSLoopbackBackend
const ultimateGroceryList = () => {
  const ultimategroceries = []
  const groceries = getAllGroceryWithId()

  _.map(groceries, grocery => {
    // @TODO can be updated
    const ultimategrocery = {}

    ultimategrocery.name = grocery.name
    ultimategrocery.groceryId = grocery.key
    ultimategroceries.messages = {}
    ultimategrocery.departments = getGroceryDepartmentsWithIngredients(grocery.departments, grocery.key)
    ultimategrocery.ultimate = { name: grocery.name, id: grocery.key }

    ultimategroceries.push(ultimategrocery)
  })

  return ultimategroceries
}







// get all departments with their ingredients in a grocery
const getGroceryDepartmentsWithIngredients = (
  grocerydepartments,
  key
) => {
  const results = []
  let departments = getAllDepartmentsWithId()
  _.map(grocerydepartments, grocerydepartment => {
    // search for a particular grocery department in the department json to get the department object
    const department = _.filter(departments, department => {
      return department.name === grocerydepartment
    })

    if (department) {
      const departmentIngredients = {
        id: department.key,
        name: department.name,
        type: department.type
      }

      // @TODO long line.....
      departmentIngredients.ingredients = getDepartmentIngredients(grocerydepartment, key) // add all the ingredients in this department to the obj
      results.push(departmentIngredients)
    }
  })

  return results
}







// get all ingredients in a department
const getDepartmentIngredients = (department, key) => {
  const results = []
  let ingredients = getAllIngredientsWithId()
  _.map(ingredients, ingredient => {
    if (_.includes(ingredient, department)) {
      const ingredientItem = [
        ingredient.key,
        ingredient.name,
        `/del/ing/${ingredient.key}/${key}`
      ]
      results.push(ingredientItem)
    }
  })

  return results
}





// get grocery with key
const getAllGroceryWithId = () => {
  let result = getResult(grocery)

  return result
}




const getAllDepartmentsWithId = () => {
  let result = getResult(departments)

  return result
}




const getAllIngredientsWithId = () => {
  let result = getResult(ingredients)

  return result
}

// @TODO should we move it into utils to all of our separated projects as well?
const getResult = (property) => _.map(property, (p) => ({
  key: __generateId(),
  ...p
}))



export {
  getKeyArrayDepAndIng,
  ultimateGroceryList,
  getDepartmentIngredients,
  getGroceryDepartmentsWithIngredients,

  departments, ingredients, grocery, users //@TODO i don't like that we're exporting methods and raw files as well. handle it later

}
