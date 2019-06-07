const schema = {
  properties: {
    name: {
      type: 'string'
    },
    americanStandart: {
      type: 'string'
    },
    americanStandartOunces: {
      type: 'null'
    },
    volume: {
      type: 'null'
    },
    weight: {
      type: 'null'
    }
  },
  required: [
    'name',
    'americanStandart',
    'americanStandartOunces',
    'volume', 'weight'
  ]
}

const example = {
  name: 'teaspoon',
  americanStandart: '1/16 teaspoon',
  americanStandartOunces: null,
  volume: null,
  weight: null
}

module.exports = {
  schema,
  example
}
