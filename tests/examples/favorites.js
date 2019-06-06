const schema = {
  properties: {
    ingredient_id: {
      type: 'string'
    },
    user_id: {
      type: 'string'
    },
    favs: {
      type: 'string'
    },
    grocery_id: {
      type: 'string'
    }
  },
  required: ['ingredient_id', 'user_id', 'favs', 'grocery_id']
}
const example = { 'ingredient_id': '4aacafd5-6106-11e9-9ffc-a3e52b2d927f',
  'user_id': '4aacafd2-6106-11e9-9ffc-a3e52b2d927f',
  'favs': 'desc for department1',
  'grocery_id': '4aac88cf-6106-11e9-9ffc-a3e52b2d927f'
}
module.exports = {
  schema, example
}
