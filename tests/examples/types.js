const schema = {
  properties: {
    Field: { type: 'string' },
    Type: { type: 'string' },
    Description: { type: 'string' }
  },
  required: ['Field', 'Type', 'Description']
}

const example = {
  Field: 'from',
  Type: 'integer',
  Description: 'First result index as submitted'
}

module.exports = {
  schema, example
}
