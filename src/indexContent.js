const fs = require('fs');

function indexContent() {
    var src = ".././src/data/Grocery/elements/";
    var content = [];
    var files = fs.readdirSync(src);
    files.forEach(file => {
        let fileStat = fs.statSync(src + file).isDirectory();
        if (!fileStat) {
            let data = fs.readFileSync(src + file);
            data = JSON.parse(data);
            content.push(data);
        }
    });
    console.log(content);
    module.exports = content;
}

indexContent();