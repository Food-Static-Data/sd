const { __generateId } = require('../../../utils');


/**
 * @returns {array} of keys for departments and ingredients
 */

const getKeyArrayDepAndIng = () => {
  let keys = []

  let departments = getAllDepartmentsWithId()
  let ingredients = getAllIngredientsWithId()


  _.forEach(departments,  (department) => {
    _.forEach(ingredients,  (ingredient) => {
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

const getAllDepartmentsWithId = () => {
  let result = getResult(departments)

  return result
}

const getAllIngredientsWithId = () => {
  let result = getResult(ingredients)

  return result
}

const getResult = (property) => _.map(property, (p) => ({
  key: __generateId(),
  ...p
}))


module.exports = { getKeyArrayDepAndIng }