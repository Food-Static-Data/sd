const schema = {
  properties: {
    name: {
      type: 'string'
    },
    type: {
      type: 'string'
    }

  },
  required: ['name', 'type']
}
const example = {
  name: 'Fresh vegetables',
  type: 'food'
}

module.exports = {
  schema, example
}
