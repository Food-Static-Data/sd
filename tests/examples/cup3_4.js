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
const example = { name: 'cup3_4',
  americanStandart: '12 tablespoons',
  americanStandartOunces: '6 ounces',
  volume: '180 milliliters',
  weight: 'null'
}
module.exports = {
  schema, example
}
