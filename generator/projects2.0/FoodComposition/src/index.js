import _ from 'lodash'


const { resolve } from 'path'

const dataPath = './'

const pathResolver = (path) => {
  return resolve(__dirname, dataPath + path)
}

import {
  FinlandDataSet,
  FranceDataSet,
  GermanyDataSet,
  ItalyDataSet,
  NetherlandsDataSet,
  SwedenDataSet,
  UnitedKingdomDataSet,
  FullDataSet
} from '@files'

import { __generateId } from '@utils'

const displayFoodCompositionData = () => {
  return ''
}




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
