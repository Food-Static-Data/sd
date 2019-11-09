const schema = {
  properties: {
    NDB_Number: {
      type: 'string'
    },
    long_name: {
      type: 'string'
    },
    data_source: {
      type: 'string'
    },
    gtin_upc: {
      type: 'string'
    },
    manufacturer: {
      type: 'string'
    },
    date_modified: {
      type: 'string'
    },
    date_available: {
      type: 'string'
    },
    ingredients_english: {
      type: 'string'
    }
  },
  required: [
    'NDB_Number',
    'long_name',
    'data_source',
    'gtin_upc',
    'manufacturer',
    'date_modified',
    'date_available',
    'ingredients_english'
  ]
}

const example = {
  NDB_Number: '45001524',
  long_name: 'MOCHI ICE CREAM BONBONS',
  data_source: 'LI',
  gtin_upc: '019022128593',
  manufacturer: 'G. T. Japan, Inc.',
  date_modified: '11/15/2017',
  date_available: '11/15/2017',
  ingredients_english: 'ICE CREAM INGREDIENTS: MILK, CREAM, SUGAR, STRAWBERRIES (STRAWBERRIES, SUGAR), CORN SYRUP SOLIDS, SKIM MILK, WHEY, NATURAL FLAVOR, GUAR GUM, MONO & DIGLYCERIDES, BEET JUICE AND BEET POWDER (FOR COLOR), CELLULOSE GUM, LOCUST BEAN GUM, CARRAGEENAN. COATING INGREDIENTS: SUGAR, WATER, RICE FLOUR, TREHALOSE, EGG WHITES, BEET JUICE AND BEET POWDER (FOR COLOR), DUSTED WITH CORN & POTATO STARCH'
}

module.exports = {
  schema,
  example
}
