const uuidv1 = require('uuid/v1')
const dayjs = require('dayjs')

const __generateId = () => {
  return uuidv1();
}

const __generateDate = () => {
  return dayjs().toDate()
}

module.exports = { __generateId, __generateDate }