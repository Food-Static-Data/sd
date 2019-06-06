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
let example = {
  'name': 'Fresh vegetables',
  'type': 'food'
}

module.exports = {
  schema, example
}
