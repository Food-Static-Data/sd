const schema = {
  type: 'array',
  items: [{ type: 'string' }]
}
const example = [
  'Lacto vegetarian',
  'Ovo vegetarian',
  'Pescetarian',
  'Vegan',
  'Lacto-ovo vegetarian',
  'Paleo'
]

module.exports = {
  schema, example
}
