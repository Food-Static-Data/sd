const { __generateId } = require('../../src/utils')

const schema = {
  properties: {
    ingredient_id: {
      type: 'string'
    },
    user_id: {
      type: 'string'
    },
    favs: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    grocery_id: {
      type: 'string'
    }
  },
  required: ['ingredient_id', 'user_id', 'favs', 'grocery_id']
}

const testId = __generateId()
const testArr = [testId]

const example = {
  'ingredient_id': testId,
  'user_id': testId,
  'favs': testArr,
  'grocery_id': testId
}
module.exports = {
  schema, example
}
