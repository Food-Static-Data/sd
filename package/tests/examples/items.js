const schema = {
  properties: {
    item_id: {
      type: 'number'
    },
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    quantity: {
      type: 'number'
    },
    purchase: {
      type: 'boolean'
    }
  },
  required: [
    'item_id',
    'name',
    'description',
    'quantity',
    'purchase'
  ]
}

const example = {
  item_id: 34,
  name: 'sugar',
  description: 'Sugar is the generic name for sweet-tasting, soluble carbohydrates, many of which are used in food.',
  quantity: 10,
  purchase: true
}

module.exports = {
  schema,
  example
}
