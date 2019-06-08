const measurementUnitsSchema = {
  'properties': {
    'type': {
      'type': 'string'
    },
    'name': {
      'type': 'string'
    },
    'singular': {
      'type': 'string'
    },
    'plural': {
      'type': 'string'
    },
    'short': {
      'type': 'string'
    },
    'pattern': {
      'type': 'string'
    }
  },
  'required': [
    'type',
    'name',
    'singular',
    'plural',
    'short',
    'pattern'
  ]
}

const measurementUnitsExample = {
  'type': 'Weight',
  'name': 'Pound',
  'singular': 'pound',
  'plural': 'pounds',
  'short': 'lb',
  'pattern': '[\\d]{1,2}'
}

const generatedMeasUnitsSchema = {
  'properties': {
    'id': {
      'type': 'string'
    },
    'system_id': {
      'type': 'string'
    },
    'type': {
      'type': 'string'
    },
    'name': {
      'type': 'string'
    },
    'singular': {
      'type': 'string'
    },
    'plural': {
      'type': 'string'
    },
    'short': {
      'type': 'string'
    },
    'pattern': {
      'type': 'string'
    },
    'error': {
      'type': 'string'
    }
  },
  'required': [
    'id',
    'system_id',
    'type',
    'name',
    'singular',
    'plural',
    'short',
    'pattern',
    'error'
  ]
}

const generatedMeasUnitsExample = {
  'id': 'fbe54b40-7a3e-11e9-8ec5-0d5ec94f7bcf',
  'system_id': 'fbe57235-7a3e-11e9-8ec5-0d5ec94f7bcf',
  'type': 'Weight',
  'name': 'Pound',
  'singular': 'pound',
  'plural': 'pounds',
  'short': 'lb',
  'pattern': '[\\d]{1,2}',
  'error': 'null'
}

module.exports = {
  measurementUnitsSchema,
  measurementUnitsExample,
  generatedMeasUnitsSchema,
  generatedMeasUnitsExample
}
