const schema = {
  properties: {
    name: { type: 'string' },
    email: { type: 'string' },
    password: { type: 'string' }
  },
  required: ['name', 'email', 'password']
}
const example = {
  name: 'page',
  email: 'page@gmail.com',
  password: 'pagethesdwrapper'
}
module.exports = {
  schema, example
}
