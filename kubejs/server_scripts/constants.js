//priority: 1
const colors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black']

const draconicFusion = function (output, craftingTier, energy, middleItem, ingredientList) {
  //crafting tier: 1.draconium, 2.wyvern, 3.draconic, 4.chaotic
  onEvent('recipes', e => {
    let tiers = ['WYVERN', 'DRACONIC', 'CHAOTIC']
    e.custom({
      type: 'draconicevolution:fusion_crafting',
      result: { item: output },
      catalyst: { item: middleItem },
      total_energy: energy,
      tier: (craftingTier > 4 && craftingTier <= 1) ? 'DRACONIUM' : tiers[craftingTier - 2],
      ingredients: ingredientList.map(item => (item.charAt(0) === '#') ? { tag: item.substring(1) } : { item: item })
    }).id(`kubejs:atmadditions/fusion_crafting/${output.split(':')[1]}`)
  })
}

const energize = function (ingredient, result, power, count) {
  onEvent('recipes', e => {
    e.recipes.powah.energizing({
      ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
      energy: power,
      result: Item.of(result, count ? count : 1).toResultJson()
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