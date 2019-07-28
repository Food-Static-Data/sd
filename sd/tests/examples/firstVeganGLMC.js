const schema = {
  properties: {
    id: {
      type: 'string'
    },
    recipes: {
      type: 'array'
    }
  },
  required: ['id', 'recipes']
}
const example = {
  'id': 'First-Vegan-Grocery-List',
  'recipes': [
    [{
      'tag': 'breakfast',
      'text': 'Oatmeal with Dried Fruit, Flax Meal, and Cinnamon',
      'day': 'Day First',
      'time': '7:00-8:30'
    }
    ]
  ]
}

module.exports = {
  schema, example
}
