const schema = {
  properties: {
    name: { type: 'string' },
    americanStandart: { type: 'string' },
    americanStandartOunces: { type: 'string' },
    volume: { type: 'string' },
    weight: { type: 'string' }
  },
  required: [ 'name', 'americanStandart', 'americanStandartOunces', 'volume', 'weight' ]
}

const example = {
  name: 'teaspoon',
  americanStandart: '4 tablespoons',
  americanStandartOunces: '2 ounces',
  volume: '2 milliliters',
  weight: '56.7 grams'
}

module.exports = {
  schema,
  example
}
