const schema = {
  properties: {
    id: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    imageURL: {
      type: 'string'
    },
    title: {
      type: 'string'
    },
    ingredients: {
      type: 'array',
      items: [{ type: 'object' }]
    }
  },
  required: [
    'id',
    'name',
    'imageURL',
    'title',
    'ingredients'
  ]
}

const example = {
  'id': '2',
  'name': 'Montreal Style Poutine',
  'imageURL': 'http://img.sndimg.com/food/image/upload/h_479,w_639,c_fit/v1/img/recipes/51/78/46/BKN9rVETnqVjW3zddIJ1_0S9A4664.jpg',
  'originalURL': 'http://www.food.com/recipe/to-die-for-crock-pot-roast-27208',
  'title': 'Baked Chicken Chimichangas, Borracho Beans',
  'ingredients': [
    {
      'unit_type': 'simple',
      'quantity': '3',
      'unit_name': 'medium russet potatoes, sliced into sticks',
      'category': {
        'id': '2',
        'name': 'Baking'
      }
    }
  ]
}

module.exports = {
  schema,
  example
}
