/* global describe, it, expect */
const uuidv1 = require('uuid/v1')
const dayjs = require('dayjs')
const fs = require('fs')

/**
 * For readAllFiles()
 * @param {String} path
 */
function readAllFiles (path) {
  var content = []
  var files = fs.readdirSync(path)
  files.forEach(file => {
    let fileStat = fs.statSync(path + file).isDirectory()
    if (!fileStat) {
      let data = fs.readFileSync(path + file)
      data = JSON.parse(data)
      content.push(data)
    }
  })
  return content
}

/**
 * For getListContent()
 * @param {String} path
 * @param {String} fileName
 */
function getListContent (path, fileName = 'undefined') {
  if (fileName === 'undefined') {
    // read all files
    return readAllFiles(path)
  }
  // read specified file
  let data = fs.readFileSync(path + fileName)
  data = JSON.parse(data)
  return data
}

/**
 * fixPath()
 * @param {String} path
 */
function fixPath (path) {
  if (path.charAt(path.length - 1) !== '/') path = path + '/'
  return path
}

/**
 * For getList()
 * @param {String} path
 */
function getList (path) {
  var list = []
  var files = fs.readdirSync(path)
  files.forEach(file => {
    let fileStat = fs.statSync(path + file).isDirectory()
    if (!fileStat) {
      list.push(file)
    }
  })
  return list
}

/**
 * For getFileInfo()
 * @param {String} path
 * @param {var} flag
 * @param {String} fileName
 */
function getFileInfo (path, flag = 0, fileName = 'undefined') {
  /*
    flag = 1 --> means return content
    if file name is given then content of that file else return content of all files.
    only path is given( flag=0 )--> give list of all files in directory.
  */
  path = fixPath(path)
  if (flag === 1) {
    // get content from file
    return getListContent(path, fileName)
  }
  // return list of files
  return getList(path)
}

const __generateId = () => {
  return uuidv1()
}

const __generateDate = () => {
  return dayjs().toDate()
}

// @TODO WTF tests are doing there? bad bad bad coder did it!
// test expecting json file not to be empty
const jsonFileNotEmptyTest = (file) => {
  describe(`tests for ${file}`, () => {
    it(`${file} data files returns array`, () => {
      expect(file).not.toBe('')
    })
  })
}

const jsonSchemaTest = (file, example, schema) => {
  describe(`test ${file} json schema`, () => {
    it(`validates ${file} json-schema`, () => {
      expect(example).toMatchSchema(schema)
    })
  })
}
module.exports = {
  __generateId,
  __generateDate,
  jsonFileNotEmptyTest,
  jsonSchemaTest,
  getFileInfo
}
