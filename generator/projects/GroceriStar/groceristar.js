const _ = require('lodash')
const { __generateId } = require('../../../src/utils')

const { departments, ingredients, grocery } = require('../../../files')
/**
 * @returns {array} of keys for departments and ingredients
 */

const getKeyArrayDepAndIng = () => {
  let keys = []

  let departments = getAllDepartmentsWithId()
  let ingredients = getAllIngredientsWithId()

  _.forEach(departments, (department) => {
    _.forEach(ingredients, (ingredient) => {
      // @TODO can be redo later with lodash methods
      if (ingredient.department === department.name) {
        keys.push({
          [department.key]: ingredient.key
        })
      }
    })
  })

  return keys
}



//get ultimate grocery list for each grocery store
const ultimateGroceryList = () => {
  const ultimategroceries = []
  const groceries = getAllGroceryWithId();

  _.map(groceries, grocery => {
    const ultimategrocery = {}
    
    ultimategrocery.name = grocery.name;
    ultimategrocery.groceryId = grocery.key;
    ultimategroceries.messages = {};
    ultimategrocery.departments = getGroceryDepartmentsWithIngredients(grocery.departments, grocery.key);
    ultimategrocery.ultimate = { name:grocery.name, id:grocery.key }
    
    ultimategroceries.push(ultimategrocery)
  })  

  return ultimategroceries
}

//get all departments with their ingredients in a grocery
const getGroceryDepartmentsWithIngredients = (grocerydept, key) => {
  const departs = []
  let departments = getAllDepartmentsWithId()
  _.map(grocerydept, dept => {
    //search for a particular grocery department in the department json to get the obj
    const deptObj = departments.filter(depart=>{
        return depart.name === dept;
      })

      if (deptObj){
        const obj = { id: deptObj.key, name: deptObj.name, type: deptObj.type}

        obj.ingredients = getDepartmentIngredients(dept, key) //add all the ingredients in this department to the obj
        departs.push(deptObj)
      }     
    })
   
    return departs;
  }


//get all ingredients in a department
const getDepartmentIngredients = (department, key) => {
  const ingredients = [];
  let ingreds = getAllIngredientsWithId()
  _.map(ingreds,ingredient => {
      if(ingredient.department === department){
        const ingred = [
          ingredient.key,
          ingredient.name,
          `/del/ing/${ingredient.key}/${key}`
        ]
        ingredients.push(ingred);
      }

  })

  return ingredients;
}


//get grocery with key
const getAllGroceryWithId = () => {
  let result = getResult(grocery)

  return result
}

const getAllDepartmentsWithId = () => {
  let result = getResult(departments)

  return result
}
//
const getAllIngredientsWithId = () => {
  let result = getResult(ingredients)

  return result
}

const getResult = (property) => _.map(property, (p) => ({
  key: __generateId(),
  ...p
}))

module.exports = { getKeyArrayDepAndIng, ultimateGroceryList }
