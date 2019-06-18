const utils = require('../src/utils');
assert = require('chai').assert;
console.log(utils.getFileInfo('./sampleFile'))
describe('getFileInfo', () => {
    it('should return the list of files in the folder', () => {
        const result = utils.getFileInfo('./sampleFile')
        const expected = ['basic-grocery-list.json']
        assert.equal(result.values, expected.values)
    })
})

describe('getFileInfo', () => {
    it('should return the content of given file', () => {
        const result = utils.getFileInfo('./sampleFile', 1, 'basic-grocery-list.json')
        const expected = { "departments": ["staples", "tinnedFood", "vegetables"], "name": "basic-grocery-list", "img": false, "desc": false, "slug": false }
        assert.equal(result.values, expected.values)
    })
})