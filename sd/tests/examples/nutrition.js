const nutrition1Schema = {
  properties: {
    calories: { type: 'number' },
    fat_calories: { type: 'number' },
    sat_fat: { type: 'number' },
    trans_fat: { type: 'number' },
    cholesterol: { type: 'number' },
    sodium: { type: 'number' },
    total_carb: { type: 'number' },
    fibers: { type: 'number' },
    sugars: { type: 'number' },
    proteins: { type: 'number' },
    vitamins: {
      type: 'object',
      items: [{ type: 'number' }] },
    calcium: { type: 'number' },
    iron: { type: 'number' }
  },
  required: [
    'calories',
    'fat_calories',
    'sat_fat',
    'trans_fat',
    'cholesterol',
    'sodium',
    'total_carb',
    'fibers',
    'sugars',
    'proteins',
    'vitamins',
    'calcium',
    'iron'
  ]
}

const nutrition1Example = {
  calories: 673,
  fat_calories: 213,
  total_fat: 23.7,
  sat_fat: 5.9,
  trans_fat: 0,
  cholesterol: 168,
  sodium: 780,
  total_carb: 80.9,
  fibers: 0,
  sugars: 3,
  proteins: 38.3,
  vitamins: {
    a: 1.099,
    c: 4.0,
    b6: 1
  },
  calcium: 404,
  iron: 7
}

const nutrition2Schema = {
  'properties': {
    type: { type: 'string' },
    items: {
      type: 'array',
      items: [{ type: 'string' }]
    }
  },
  'required': ['type', 'items']
}
const nutrition2Example = {
  'type': 'Fatty acids',
  'items': [
    'Alpha-linolenic acid (ALA)',
    'Linoleic acid'
  ]
}

module.exports = {
  nutrition1Schema,
  nutrition1Example,
  nutrition2Schema,
  nutrition2Example
}
