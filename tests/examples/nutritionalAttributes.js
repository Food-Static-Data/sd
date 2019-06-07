const schema = {
  properties: {
    Nutrition: {
      type: 'string'
    },
    Description: {
      type: 'string'
    },
    ImpliedUnits: {
      type: 'string'
    }
  },

  required: ['Nutrition', 'Description', 'ImpliedUnits']
}

const example = {
  Nutrition: 'K',
  Description: 'Potassium, K',
  ImpliedUnits: 'gram'
}

module.exports = {
  schema,
  example
}
