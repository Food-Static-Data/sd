import departments from '~/Departments/departments.json'

import grocery from '~/Grocery/grocery.json'

// will crash here, because we have a few ingredients packs...
import ingredients from '~/Ingredients/ingredients.json'
import ingredients1 from '~/Ingredients/ingredients1.json'
import ingredients3 from '~/Ingredients/ingredients3.json'

// will crash here, because we need to import another file as well
import mealCalendar from '~/MealCalendar/mealcalendar.json'
import firstVeganGLMC from '~/MealCalendar/First-Vegan-Grocery-List-MC.json'

import users from '~/users.json'
import nutritions1 from '~/nutritions1.json'
import nutritions2 from '~/nutritions2.json'

export default {

  departments,
  grocery,

  ingredients,
  ingredients1,
  ingredients3,

  mealCalendar,
  firstVeganGLMC,


  users, nutritions1, nutritions2
}
