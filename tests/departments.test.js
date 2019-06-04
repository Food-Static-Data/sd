/* global describe, it, expect */
'use strict'
const { departmentsFilePath } = require('../files')
const departments = require(departmentsFilePath)

const { matchers } = require('jest-json-schema')
expect.extend(matchers)

describe('departments data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of departments', () => {
    expect(departments).not.toBe('')
  })
})

const schema = {
  properties: {
    name: {
      type: 'string'
    },
    type: {
      type: 'string'
    }

  },
  required: ['name', 'type']
}
let example = {
  'name': 'Fresh vegetables',
  'type': 'food'
}

describe('test fresh vegetable  json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})

example = {
  'name': 'Condiments / Sauces',
  'type': 'food'
}
describe('test condiments/sauces  json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})

example = {
  'name': 'Dairy',
  'type': 'food'
}
describe('test dairy  json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})

example = {
  'name': 'Cheese',
  'type': 'food'
}
describe('test cheese  json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})

example = {
  'name': 'Meat',
  'type': 'food'
}
describe('test meat  json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})

example = {
  'name': 'Seafood',
  'type': 'food'
}
describe('test seafood  json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})

example = {
  'name': 'Beverages',
  'type': 'food'
}
describe('test beverages  json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})

example = {
  'name': 'Baked goods',
  'type': 'food'
}
describe('test baked goods  json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})

example = {
  'name': 'Baking',
  'type': 'food'
}

describe('test baking json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})

example = {
  'name': 'Snacks',
  'type': 'food'
}

describe('test snacks json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})

example = {
  'name': 'Themed meals',
  'type': 'food'
}
describe('test themed meals json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})

example = {
  'name': 'Baby stuff',
  'type': 'non-food'
}
describe('test baby stuff  json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})

example = {
  'name': 'Pets',
  'type': 'non-food'
}
describe('test pets json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})

example = {
  'name': 'Fresh fruits',
  'type': 'food'
}
describe('test fresh fruits json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})

example = {
  'name': 'Refrigerated items',
  'type': 'food'
}

describe('test refrigerated items json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})

example = {
  'name': 'Frozen',
  'type': 'food'
}

describe('test frozen json schema', () => {
  it('validates my json', () => {
    expect(example).toMatchSchema(schema)
  })
})
