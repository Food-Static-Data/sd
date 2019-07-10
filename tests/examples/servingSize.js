const schema = {
  properties: {
    NDB_No: {
      type: 'string'
    },
    Serving_Size: {
      type: 'string'
    },
    Serving_Size_UOM: {
      type: 'string'
    },
    Household_Serving_Size: {
      type: 'string'
    },
    Household_Serving_Size_UOM: {
      type: 'string'
    }
  },
  required: [
    'NDB_No',
    'Serving_Size',
    'Serving_Size_UOM',
    'Household_Serving_Size',
    'Household_Serving_Size_UOM'
  ]
}

const example = {
  'NDB_No': '45001524',
  'Serving_Size': '40.0',
  'Serving_Size_UOM': 'g',
  'Household_Serving_Size': '1.0',
  'Household_Serving_Size_UOM': 'PIECE'
}

module.exports = {
  schema,
  example
}
