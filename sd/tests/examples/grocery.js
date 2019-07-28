const schema = {
  properties: {
    departments: {
      type: 'array'
    },
    id: {
      type: 'number'
    },
    name: {
      type: 'string'
    },
    img: {
      type: 'boolean'
    },
    desc: {
      type: 'boolean'
    },
    slug: {
      type: 'boolean'
    }
  },
  required: [
    'departments',
    'id',
    'name',
    'img',
    'desc',
    'slug'
  ]
}

const example = {
  'departments': [
    'Other'
  ],
  'id': 14,
  'name': 'number-four9',
  'img': false,
  'desc': false,
  'slug': false
}

module.exports = {
  schema,
  example
}
