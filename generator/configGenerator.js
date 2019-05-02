const {
  usersGrocery,
  favorites,
  getMenuGenerator,
  items,
  getMeasurementSystem,
  getMeasurementUnits
} = require("./generateArray")

const config = [
  {
    name: "measurementSystem",
    data: getMeasurementSystem()
  },
  {
    name: "measurementUnits",
    data: getMeasurementUnits()
  },
  {
    name: "usersGrocery",
    data: usersGrocery()
  }
]

module.exports = { config }
