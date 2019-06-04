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
  required: [ 'name', 'americanStandart', 'americanStandartOunces', 'volume', 'weight' ]

}
const example = {
  name: 'sugar',
  americanStandart: '2 tablespoons',
  americanStandartOunces: '1 ounce',
  volume: '2 milliters',
  weight: '50 gm'
}

module.exports = {
  schema,
  example
}
