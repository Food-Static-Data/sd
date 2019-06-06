
const schema = {
  properties: {
    name: { type: 'string' },
    boil: { type: 'string' },
    microwave: { type: 'string' },
    steam: { type: 'string' },
    roast: { type: 'string' }
  },
  required: [ 'name', 'boil', 'microwave', 'steam', 'roast' ]
}

const example = {
  name: 'frenchBeans',
  boil: '6 - 10 mins',
  microwave: '4 - 6 mins',
  steam: '8 - 12 mins',
  roast: '25 - 30 mins'
}
module.exports = {
  example, schema
}
