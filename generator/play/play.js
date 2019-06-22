const arr = require('../../src/filesObjects')
// const arr = require('@filesObjects')

// @TODO lodash and move forward with this assessment

var _ = require('lodash')

// arr.cup1.forEach(function (value) {
//   console.log(value)
// })

// arr.halfCup.forEach(function (value) {
//   console.log(value)
// })

_.forEach(arr, function (value) {
  console.log(value)
})
