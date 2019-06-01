const fs = require('fs');
var src = ".././src/data/Grocery/elements/";
var list = [];
var files = fs.readdirSync(src);

files.forEach(file => {
    let fileStat = fs.statSync(src + file).isDirectory();
    if (!fileStat) {
        list.push(file);
    }
});
console.log(list);
module.exports = list;
