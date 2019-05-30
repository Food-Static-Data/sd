const groceryUsers = require('./grocery-with-user-relations.json');
const ultimateGl = require('./ultimate-gl-from-loopback-server-example.json');

console.log("Name of User: " + groceryUsers["name"]);
// console.log(ultimateGl["departments"][0]);

for (let i = 0; i < ultimateGl["departments"].length; i++) {
    console.log(ultimateGl["departments"][i]["name"]);
    
}