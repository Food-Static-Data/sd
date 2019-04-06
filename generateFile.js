var writeInFile = require('./writeFile')

function generateFile(){
    var fileName = "testing"
    var path = './output/' + fileName + '.json';
    data = ["test"]
    writeInFile.writeFile(path, data);
}
generateFile();
