var { resolve } = require('path')

const dataPath = './'

const pathResolver = (path) => {
  return resolve(__dirname, dataPath + path)
}

// Food composition
const FinlandDataSet = pathResolver('FoodComposition - Finland.json')
const FranceDataSet = pathResolver('FoodComposition - France.json')
const GermanyDataSet = pathResolver('FoodComposition - Germany.json')
const ItalyDataSet = pathResolver('FoodComposition - Italy.json')
const NetherlandsDataSet = pathResolver('FoodComposition - Netherlands.json')
const SwedenDataSet = pathResolver('FoodComposition - Sweden.json')
const UnitedKingdomDataSet = pathResolver('FoodComposition - United Kingdom.json')
const FullDataSet = pathResolver('FoodComposition.json')

module.exports = {
  FinlandDataSet,
  FranceDataSet,
  GermanyDataSet,
  ItalyDataSet,
  NetherlandsDataSet,
  SwedenDataSet,
  UnitedKingdomDataSet,
  FullDataSet
}

// it wouldn't work at this point of time
// export {
//  FinlandDataSet,
//  FranceDataSet,
//  GermanyDataSet,
//  ItalyDataSet,
//  NetherlandsDataSet,
//  SwedenDataSet,
//  UnitedKingdomDataSet,
//  FullDataSet
// }
