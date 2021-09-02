<<<<<<< Updated upstream
const colors = ['white','light_gray','gray','black','red','orange','yellow','lime','green','light_blue','cyan','blue','purple','magenta','pink','brown']
=======
//priority: 1
const colors = ['white', 'light_gray', 'gray', 'black', 'red', 'orange', 'yellow', 'lime', 'green', 'light_blue', 'cyan', 'blue', 'purple', 'magenta', 'pink', 'brown']
const energize = function (ingredient, result, power) {
  onEvent('recipes', e => {
    e.recipes.powah.energizing({
      ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
      energy: power,
      result: Item.of(result).toResultJson()
    })
  })
}
const modifyShaped = function (result, count, pattern, ingredients) {
  onEvent('recipes', e => {
    e.remove({ output: result, type: 'minecraft:crafting_shaped' })
    e.shaped(item.of(result, count), pattern, ingredients).id(`kubejs_${result}`)
  })
}
const modifyShapeless = function (result, count, ingredients) {
  onEvent('recipes', e => {
    e.remove({ output: result, type: 'minecraft:crafting_shapeless' })
    e.shapeless(item.of(result, count), ingredients).id(`kubejs_${result}`)
  })
}
const modifySmelt = function (result, ingredients) {
  onEvent('recipes', e => {
    e.remove({ output: result, type: 'minecraft:smelting' })
    e.smelting(result, ingredients).id(`kubejs_${result}`)
  })
}
const removeRecipeByID = function (recipes) {
  onEvent('recipes', e => {
    recipes.forEach(recipe => {
      e.remove({ id: recipe })
    })
  })
}
const removeRecipeByOutput = function (recipes) {
  onEvent('recipes', e => {
    recipes.forEach(recipe => {
      if (Array.isArray(recipe)) {
        e.remove({ type: recipe[1], output: recipe[0] })
      } else {
        e.remove({ output: recipe })
      }
    })
  })
}
>>>>>>> Stashed changes
