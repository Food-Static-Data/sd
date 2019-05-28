/* global describe, it, expect */
'use strict'

const { matchers } = require('jest-json-schema');
expect.extend(matchers);

const { usersFilePath } = require('../files')
const users = require(usersFilePath)

describe('users data files returns array', () => {
  it('these tests prevent any issues and problems, also to break the structure of users', () => {
    expect(users).not.toBe('')
  })

})


describe('testing for user json schema', () => {
  it('validates users json', () => {
    const schema = {
      properties: {
        name: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' },
      },
      required: ['name','email','password'],
    };
  expect({ name: 'page', email:'page@gmail.com', password:'pagethesdwrapper' }).toMatchSchema(schema);
});
})
