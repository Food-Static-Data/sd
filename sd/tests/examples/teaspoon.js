const schema = {
  properties: {
    name: { type: 'string' },
    americanStandart: { type: 'null' },
    americanStandartOunces: { type: 'null' },
    volume: { type: 'string' },
    weight: { type: 'null' }
  },
  required: [ 'name', 'americanStandart', 'americanStandartOunces', 'volume', 'weight' ]
}

const example = {
  name: 'teaspoon',
  americanStandart: null,
  americanStandartOunces: null,
  volume: '2 milliliters',
  weight: null
}

module.exports = {
  schema, example
}
