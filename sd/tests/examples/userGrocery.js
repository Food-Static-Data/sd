const schema = {
  properties: {
    user_id: { type: 'string' },
    grocery_id: { type: 'string' }
  },
  required: ['user_id', 'grocery_id']
}
const example = {
  user_id: 'fbe57252-7a3e-11e9-8ec5-0d5ec94f7bcf',
  grocery_id: 'fbe57236-7a3e-11e9-8ec5-0d5ec94f7bcf'
}

module.exports = {
  schema, example
}
