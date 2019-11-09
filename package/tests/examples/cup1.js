
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
  name: 'cup',
  americanStandart: '16 tablespoons',
  americanStandartOunces: '8 ounces',
  volume: '240 milliliters',
  weight: '225 grams,  1/2 pound'
}

module.exports = {
  example, schema
}
