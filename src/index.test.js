/* global test, describe, it, expect, jest */

import { existsSync, access } from 'fs'
import path from 'path'

const file = path.resolve(__dirname, './data/Allergy/allergies.json')

describe('testing if allergies file are exists', () => {
  // @TODO update this explanation
  test('xxx', () => {
    // var stream = chickenKyiv.getIngredients3()
    // expect(stream).not.toBe('')

    expect(existsSync(file)).toBe(true)
  })
})

//
// try {
//   if (fs.existsSync(file)) {
//     //file exists
//   }
// } catch(err) {
//   console.error(err)
// }
//
// fs.access(file, fs.F_OK, (err) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//
//   //file exists
// })
