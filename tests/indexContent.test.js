const fs = require('fs');
var expect = require('chai').expect;

var content = [];
var src = ".././src/data/Grocery/elements/";
var files = fs.readdirSync(src);
files.forEach(file => {
    let fileStat = fs.statSync(src + file).isDirectory();
    if (!fileStat) {
        let data = fs.readFileSync(src + file);
        data = JSON.parse(data);
        content.push(data);
    }
});
var test = require('./indexContent');
var comp = JSON.stringify(test.cont);
content = JSON.stringify(content);
describe('indexContent()', () => {
    it('should return value of elements', function() {

        expect(comp).equal(content);

    });

});