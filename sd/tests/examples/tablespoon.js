const schema = {
  properties: {
    name: { type: 'string' },
    americanStandart: { type: 'string' },
    americanStandartOunces: { type: 'string' },
    volume: { type: 'string' },
    weight: { type: 'string' }
  },
  required: ['name', 'americanStandart', 'americanStandartOunces', 'volume', 'weight']
}

const example = {
  name: 'world',
  americanStandart: '3 teaspoons',
  americanStandartOunces: '1/2 ounce',
  volume: '15 milliliters',
  weight: '14.3 grams'
}
module.exports = {
  schema, example
}
