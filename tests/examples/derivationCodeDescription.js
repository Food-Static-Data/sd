const schema = {
  properties: {
    derivation_code: {
      type: 'string',
    },
    Derivation_Descript: {
      type: 'string'
    }
  }
}

const example = {
  "derivation_code":"LCSL",
  "Derivation_Descript":"Calculated from a 'less than' value per serving size measure"
}

module.exports = {
  schema,
  example
}
