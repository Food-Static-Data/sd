const fs = require('fs');
var expect = require('chai').expect;
var list = [];
var src = ".././src/data/Grocery/elements/";
var files = fs.readdirSync(src);
files.forEach(file => {
    let fileStat = fs.statSync(src + file).isDirectory();
    if (!fileStat) {
        list.push(file);
    }
});
var test = require('./index');
var comp = test.data;
describe('index()', () => {
    it('should return list of elements', function() {

        expect(comp).to.have.all.members(list);

    });

});