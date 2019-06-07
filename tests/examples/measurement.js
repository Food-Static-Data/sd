const schema = {
  properties: {
    singular: {
      type: 'string'
    },
    plural: {
      type: 'string'
    },
    abbreviation: {
      type: 'string'
    }
  },
  required: [
    'singular',
    'plural']
}

const example = {
  'singular': 'gram',
  'plural': 'grams',
  'abbreviation': 'g'
}

module.exports = {
  schema,
  example
}
