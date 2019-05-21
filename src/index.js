// import {
//   // allergies,
//   course,
//   cuisine,
//   departments,
//   diet,
//   grocery,
//   holiday,
//   ingredients,
//   ingredients1,
//   ingredients3,
//   favorites,
//   items,
//   mealCalendar,
//   firstVeganGLMC,
//   measurements,
//   menu,
//   recipes,
//   nutritions,
//   nutritions2,
//   users,
//   userGrocery,
//   ultimateGroceryList,
//   groceryListWithUserRelations,
//   dbIngredients,
//   cookingTimes,
//   cup1
// } from './files'

import {
    cookingTimes, 
    cup1
} from './files.js'

const cooking = cookingTimes.map(function(value) {
    return value;
});

console.log(cooking);




const cup = cup1.map(function(value) {
    return value;
});

console.log(cup);



export default {
    cooking,
    cup
}

// export default {
//   allergies,
//   course,
//   cuisine,
//   departments,
//   diet,
//   grocery,
//   holiday,
//   ingredients,
//   ingredients1,
//   ingredients3,
//   favorites,
//   items,
//   mealCalendar,
//   firstVeganGLMC,
//   measurements,
//   menu,
//   recipes,
//   nutritions,
//   nutritions2,
//   users,
//   userGrocery,
//   ultimateGroceryList,
//   groceryListWithUserRelations,
//   dbIngredients,
//   cooking,
//   cup
// }
