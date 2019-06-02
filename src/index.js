const fs = require('fs');
var list = [];

function index() {

    var src = ".././src/data/Grocery/elements/";

    var files = fs.readdirSync(src);

    files.forEach(file => {
        let fileStat = fs.statSync(src + file).isDirectory();
        if (!fileStat) {
            list.push(file);
        }
    });
    return (list);
}
index();
module.exports = { data: list };