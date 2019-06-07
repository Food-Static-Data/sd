const schema = {
  properties: {
    id: {
      type: 'string'
    },
    recipes: {
      type: 'array'
    }
  },
  required: [
    'id',
    'recipes'
  ]
}

const example = {
  'id': 'week1',
  'recipes': [
    [{
      'tag': 'breakfast',
      'text': 'Grilled Honey & Ginger Marinated Flank Steaks with Mashed Potatoes, Tossed Salad and Rolls',
      'day': 'Sunday',
      'time': '7:00-8:30'
    }]
  ]
}

module.exports = {
  schema,
  example
}
