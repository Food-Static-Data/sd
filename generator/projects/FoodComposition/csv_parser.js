const fs = require('fs')
const csv = require('csv-parser') // @TODO does it work? I'm not sure
const path = require('path')

var { writeFile } = require('../../writeFile')

let results = []
let data = []
let writedCountries = []

const countries = [
  'Finland',
  'France',
  'Germany',
  'Italy',
  'Netherlands',
  'Sweden',
  'United Kingdom'
]

// @TODO here don't have methods as we have at USFA

countries.forEach(country => {
  // @TODO it's a very long path. we can use our aliases
  // in order to make it shorter. check readme https://github.com/GroceriStar/sd/tree/master/docs#babel-alias

  // @TODO this method is duplicate
  fs.createReadStream(
    path.join(
      __dirname,
      `../../../src/data/FoodComposition/Food_Composition - ${country}.csv`
    )
  )
    .pipe(
      csv({
        skipLines: 3,
        headers: [ // @TODO move headers out
          'Food class',
          'Food (FoodEx2 description)',
          'Microgram/100 gram',
          'Milligram/100 gram'
        ]
      })
    )
    .on('data', function (data) {
      results.push(data)
      // try {
      //   ;
      //   console.log(data[0])
      // } catch (err) {
      //   console.log(err)
      // }
    })
    .on('end', function () {
      let i

      // @TODO I don't  like this loops. Wahaj should solve it
      for (i = 0; i < 12; i++) {
        results[i]['Food class'] =
          'Additives, flavours, baking and processing aids'
      }
      for (i = 12; i < 51; i++) {
        results[i]['Food class'] = 'Alcoholic beverages'
      }
      for (i = 51; i < 109; i++) {
        results[i]['Food class'] = 'Animal and vegetable fats and oils'
      }
      for (i = 109; i < 158; i++) {
        results[i]['Food class'] = 'Coffee, cocoa, tea and infusions'
      }
      for (i = 158; i < 295; i++) {
        results[i]['Food class'] = 'Composite dishes'
      }
      for (i = 295; i < 313; i++) {
        results[i]['Food class'] = 'Eggs and egg products'
      }
      for (i = 313; i < 692; i++) {
        results[i]['Food class'] =
          'Fish, seafood, amphibians, reptiles and invertebrates'
      }
      for (i = 692; i < 708; i++) {
        results[i]['Food class'] = 'Food products for young population'
      }
      for (i = 708; i < 880; i++) {
        results[i]['Food class'] = 'Fruit and fruit products'
      }
      for (i = 880; i < 937; i++) {
        results[i]['Food class'] = 'Fruit and vegetable juices and nectars'
      }
      for (i = 937; i < 1203; i++) {
        results[i]['Food class'] = 'Grains and grain-based products'
      }
      for (i = 1203; i < 1204; i++) {
        results[i]['Food class'] = 'Human milk'
      }
      for (i = 1204; i < 1343; i++) {
        results[i]['Food class'] = 'Legumes, nuts, oilseeds and spices'
      }
      for (i = 1343; i < 1713; i++) {
        results[i]['Food class'] = 'Meat and meat products'
      }
      for (i = 1713; i < 1930; i++) {
        results[i]['Food class'] = 'Milk and dairy products'
      }
      for (i = 1930; i < 1949; i++) {
        results[i]['Food class'] =
          'Products for non-standard diets, food imitates and food supplements or fortifying agents'
      }
      for (i = 1949; i < 2019; i++) {
        results[i]['Food class'] = 'Seasoning, sauces and condiments'
      }
      for (i = 2019; i < 2064; i++) {
        results[i]['Food class'] =
          'Starchy roots or tubers and products thereof, sugar plants'
      }
      for (i = 2064; i < 2126; i++) {
        results[i]['Food class'] =
          'Sugar, confectionery and water-based sweet desserts'
      }
      for (i = 2126; i < 2463; i++) {
        results[i]['Food class'] = 'Vegetables and vegetable products'
      }
      for (i = 2463; i < results.length; i++) {
        results[i]['Food class'] = 'Water and water-based beverages'
      }

      results = results.map(obj => ({ ...obj, country }))

      for (i = 0; i < results.length; i++) {
        data.push(results[i])
      }

      writedCountries.push(country)

      writeFile(
        path.join(__dirname, `/FoodComposition - ${country}.json`),
        results
      )

      if (writedCountries.length === countries.length) {
        writeFile(
          path.join(__dirname, `/FoodComposition.json`),
          data
        )
      }
    })
})
