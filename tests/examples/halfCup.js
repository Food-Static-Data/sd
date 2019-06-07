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
  'name': 'cup1_2',
  'americanStandart': '8 tablespoons',
  'americanStandartOunces': '4 ounces',
  'volume': '120 milliliters',
  'weight': '113.4 grams, 1/4 pound'
}

module.exports = {
  schema,
  example
}
