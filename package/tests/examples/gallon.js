const schema = {
  properties: {
    name: {
      type: 'string'
    },
    americanStandart: {
      type: 'string'
    },
    americanStandartOunces: {
      type: 'string'
    },
    volume: {
      type: 'string'
    },
    weight: {
      type: 'string'
    }
  },
  required: [
    'name',
    'americanStandart',
    'americanStandartOunces',
    'volume',
    'weight'
  ]
}

const example = {
  name: 'gallon',
  americanStandart: '16 cups, 4 quarts',
  americanStandartOunces: '128 ounces',
  volume: '3.79 liters',
  weight: 'null'
}

module.exports = {
  schema,
  example
}
