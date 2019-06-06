
const schema = {
  type: 'array', items: [{ type: 'array' }]
}

const example = [
  [
    'Health',
    'Alcohol',
    'alcohol-free',
    'No alcohol used or contained in the recipe'
  ],
  [
    'Health',
    'Alcohol-free',
    'alcohol-free',
    'No alcohol used or contained'
  ]
]
module.exports = {
  schema, example
}
