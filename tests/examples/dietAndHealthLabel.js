const schema = {
  properties: {
    Type: {
      type: 'string'
    },
    'Web Label': {
      type: 'string'
    },
    'API Parameter': {
      type: 'string'
    },
    Definition: {
      type: 'string'
    }
  },
  required: [
    'Type',
    'Web Label',
    'API Parameter',
    'Definition'
  ]
}

const example = {
  Type: 'Diet',
  'Web Label': 'Balanced',
  'API Parameter': 'balanced',
  Definition: 'Protein/Fat/Carb values in 15/35/50 ratio'
}

module.exports = {
  schema,
  example
}
