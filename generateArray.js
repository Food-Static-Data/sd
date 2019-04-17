const uuidv1 = require('uuid/v1')

const filePath = require('./files')

var users = require(filePath['usersFilePath'])
var grocery = require(filePath['groceryFilePath'])

var i = 1;
const __generateId = () => {
    return uuidv1();
}

function generateArrWithId(data, idName) {

    return data.map(elem =>{
        return {
            ...elem,
            [idName]: __generateId()
        }
    })
}


function usersGrocery(){
    var groceryId = generateArrWithId(grocery,"grocery_id");
    var usersId = generateArrWithId(users,"user_id");
    // return object for three users
    var result = []
    usersId.map( (user, index) => {
        
        result.push({
            "user_id": user['user_id'],
            // one grocery id for all users
            "grocery_id": groceryId[index++]['grocery_id']
        })

        result.push({
            "user_id": user['user_id'],
            // one grocery id for all users
            "grocery_id": groceryId[index++]['grocery_id']
        })
    })
    return result
    // return usersId.map(user => {
    //     return ({
    //         "user_id": user['user_id'],
    //         // one grocery id for all users
    //         "grocery_id": groceryId[0]['grocery_id']
    //     }
    //     )
    // })
}
// var favorites = users.map(user => {
    

//     return {
//         "ingredient_id": id,
//         "userId": id,
//         "favs": "desc for department" + id,
//         "grocery_id": id
//     }
// })
// console.log(favorites);
// var usersWithId = 
console.log(usersGrocery());
// console.log(generateArrWithId(users));
