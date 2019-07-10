const schema = {
  properties: {
    'Food class': {
      type: 'string'
    },
    'Food (FoodEx2 description)': {
      type: 'string'
    },
    'Microgram/100 gram': {
      type: 'string'
    },
    'Milligram/100 gram': {
      type: 'string'
    },
    'country': {
      type: 'string'
    }
  },
  required: [
    'Food class',
    'Food (FoodEx2 description)',
    'Microgram/100 gram',
    'Milligram/100 gram',
    'country'
  ]
}

const example = {
  'Food class': 'Additives, flavours, baking and processing aids',
  'Food (FoodEx2 description)': 'Artificial sweeteners (e.g., aspartam, saccharine)',
  'Microgram/100 gram': '',
  'Milligram/100 gram': '',
  'country': 'Netherlands'
}

module.exports = {
  schema,
  example
}
