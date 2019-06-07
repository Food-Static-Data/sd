
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
  required: ['name', 'americanStandart', 'americanStandartOunces', 'volume', 'weight']
}

const example = {
  name: 'cup1_8',
  americanStandart: '2 tablespoons',
  americanStandartOunces: '1 ounce',
  volume: '30 milliliters',
  weight: '28.3 grams'
}
module.exports = {
  schema, example
}
