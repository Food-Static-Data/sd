const arr = require('../../filesObjects')

const obj = {
    showArr() {
        arr.forEach(function(arrs) {
            console.log(arrs);
        })
    }
};

obj.showArr();