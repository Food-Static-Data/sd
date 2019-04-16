var writeInFile = require('./writeFile')
// var { chickenKyiv } = require('@groceristar/groceristar-fetch')
const uuidv1 = require('uuid/v1')
const dayjs = require('dayjs')
const _ = require('lodash')

const __generateId = () => {
  return uuidv1();
}

const __generateDate = () => {
  return dayjs().toDate()
}

const getMenuGenerator = (number_of_weeks) => {
  let 
  result = _.times(number_of_weeks, (index) => ({
    id: __generateId(), 
    title: 'Weekly menu #${index}',
    date: __generateDate(), 
    description: 'description for Weekly menu #${index}',
    notes: 'This is a chef notes for wm #${index}'
  }))
  return result
}

function generateFile () {
  var fileName = 'generatedMenu'
  var path = './output/' + fileName + '.json'
  var data = getMenuGenerator(2)

  writeInFile.writeFile(path, data)
}
generateFile()
