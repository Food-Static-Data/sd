const measurementSystemsSchema = {
  'properties': {
    'alias': {
      'type': 'string'
    }
  },
  'required': [ 'alias' ]
}

const measurementSystemsExample = {
  'alias': 'universal'
}

const generatedMeasSystemSchema = {
  'properties': {
    'id': {
      'type': 'string'
    },
    'alias': {
      'type': 'string'
    },
    'title': {
      'type': 'string'
    }
  },
  'required': [
    'id',
    'alias',
    'title'
  ]
}

const generatedMeasSystemExample = {
  'id': 'fbe4fd00-7a3e-11e9-8ec5-0d5ec94f7bcf',
  'alias': 'universal',
  'title': 'Universal'
}

module.exports = {
  measurementSystemsSchema,
  measurementSystemsExample,
  generatedMeasSystemSchema,
  generatedMeasSystemExample
}
