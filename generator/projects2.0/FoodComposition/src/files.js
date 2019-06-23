// here we'll connect separated json files, that related to food composition of different countries
import {
  FinlandDataSet,
  FranceDataSet,
  GermanyDataSet,
  ItalyDataSet,
  NetherlandsDataSet,
  SwedenDataSet,
  UnitedKingdomDataSet,
  FullDataSet
} from '@groceristar/sd-wrapper'

export {
  FinlandDataSet,
  FranceDataSet,
  GermanyDataSet,
  ItalyDataSet,
  NetherlandsDataSet,
  SwedenDataSet,
  UnitedKingdomDataSet,
  FullDataSet
}


// Next step, when all data maybe came not from SD but from data folder.

// const { resolve } from 'path'
//
// const dataPath = './data/'
//
// const pathResolver = (path) => {
//   return resolve(__dirname, dataPath + path)
// }
//
// //Food composition
// const FinlandDataSet = pathResolver('FoodComposition - Finland.json')
// const FranceDataSet = pathResolver('FoodComposition - France.json')
// const GermanyDataSet = pathResolver('FoodComposition - Germany.json')
// const ItalyDataSet = pathResolver('FoodComposition - Italy.json')
// const NetherlandsDataSet = pathResolver('FoodComposition - Netherlands.json')
// const SwedenDataSet = pathResolver('FoodComposition - Sweden.json')
// const UnitedKingdomDataSet = pathResolver('FoodComposition - United Kingdom.json')
// const FullDataSet = pathResolver('FoodComposition.json')
