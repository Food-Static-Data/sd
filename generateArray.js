const uuidv1 = require('uuid/v1')
const dayjs = require('dayjs')
const _ = require('lodash')

const filePath = require('./files')

var users = require(filePath['usersFilePath'])
var grocery = require(filePath['groceryFilePath'])
var ingredients = require(filePath['ingredientsFilePath'])
var measurementSystem = require(filePath['measurementSystemFilePath'])
var measurementUnits = require(filePath['measurementUnitsFilePath'])

const __generateId = () => {
    return uuidv1();
}

const __generateDate = () => {
    return dayjs().toDate()
}

const getMenuGenerator = (number_of_weeks) => {
    let
        result = _.times(number_of_weeks, (index) => ({
            id: __generateId(),
            title: 'Weekly menu #${index}',
            date: __generateDate(),
            description: 'description for Weekly menu #${index}',
            notes: 'This is a chef notes for wm #${index}'
        }))
    return result
}

function generateArrWithId(data, idName) {

    return data.map(elem => {
        return {
            ...elem,
            [idName]: __generateId()
        }
    })
}
function favorites() {
    var groceryId = generateArrWithId(grocery, "grocery_id");
    var usersId = generateArrWithId(users, "user_id");
    var ingredientsId = generateArrWithId(ingredients, "ingredient_id");

    var result = []

    usersId.map((user, index) => {
        result.push({
            "ingredient_id": ingredientsId[index++]['ingredient_id'],
            "user_id": user['user_id'],
            "favs": "desc for department" + index,
            // one grocery id for all users
            "grocery_id": groceryId[index++]['grocery_id']
        })
        result.push({
            "ingredient_id": ingredientsId[index++]['ingredient_id'],
            "user_id": user['user_id'],
            "favs": "desc for department" + index,
            // one grocery id for all users
            "grocery_id": groceryId[index++]['grocery_id']
        })
    })

    return result
}


function usersGrocery() {
    var groceryId = generateArrWithId(grocery, "grocery_id");
    var usersId = generateArrWithId(users, "user_id");
    // return object for three users
    var result = []
    usersId.map((user, index) => {

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
}

function items(){
    var ingredientsId = generateArrWithId(ingredients, "ingredient_id");
    var items = [1,2,3]
    var result = []

    items.map( (item, index) => {
        result.push({
            "item_id": item,
            "name": ingredientsId[index++]["name"],
            "description": "something about the item",
            "quantity": 50,
            "purchase": false
        })
        result.push({
            "item_id": item,
            "name": ingredientsId[index++]["name"],
            "description": "something about the item",
            "quantity": 50,
            "purchase": false
        })
    })

    return result
}

function getMeasurementSystem(){
    var result = []
    var measurementSystemId = generateArrWithId(measurementSystem, "id")
    measurementSystemId.map( system => {
        result.push({
            "id": system.id,
            "alias": system.alias,
            "title": _.capitalize(system.alias)
        })
    })
    return result
}

function getMeasurementUnits(){
    var result = []
    var measurementUnitsId = generateArrWithId(measurementUnits, "id")
    measurementUnitsId = generateArrWithId(measurementUnitsId, "system_id")
    measurementUnitsId.map( unit => {
        result.push({
            "id": unit.id,
            "system_id": unit.system_id,
            "type": unit.type,
            "name": unit.name,
            "singular": unit.singular,
            "plural": unit.plural,
            "short": unit.short,
            "pattern": unit.pattern,
            "error": "null"
        })
    })
    return result
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
// console.log(usersGrocery());
// console.log(generateArrWithId(users));
module.exports = {
    usersGrocery,
    favorites,
    getMenuGenerator,
    items,
    getMeasurementSystem,
    getMeasurementUnits
}