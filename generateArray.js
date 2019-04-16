

var users = ["2"];
var grocery = [];
var i = 1;
var favorites = users.map(user =>{
    var id = i++;
    return {
        "ingredient_id": id,
        "userId": id,
        "favs": "desc for department"+ id,
        "grocery_id": id
    }
})
console.log(favorites);
