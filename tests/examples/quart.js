const schema = {
  properties: {
    name: { type: 'string' },
    americanStandart: { type: 'string' },
    americanStandartOunces: { type: 'string' },
    volume: { type: 'string' },
    weight: { type: 'null' }
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
  americanStandart: '4 cups,  2 pints',
  americanStandartOunces: '32 ounces',
  volume: '2 milliliters',
  weight: null
}

module.exports = {
  schema,
  example
}
