const arr = require('../../filesObjects')

const obj = {
    showArr() {
        arr.forEach(function() {
            console.log(this.arr);
        })
    }
};

obj.showArr();