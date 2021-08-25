onEvent('recipes', e => {
  //#region FUNCTIONS
  function energize(ingredient, result, power) {
    e.recipes.powah.energizing({
      ingredients: ingredient.map(i => Ingredient.of(i).toJson()),
      energy: power,
      result: Item.of(result).toResultJson()
    })
  }

  energize(['refinedstorage:wireless_grid'], 'refinedstorage:creative_wireless_grid', '2147483647')
  energize(['refinedstorage:wireless_fluid_grid'], 'refinedstorage:creative_wireless_fluid_grid', '2147483647')
  energize(['refinedstorage:wireless_crafting_monitor'], 'refinedstorage:creative_wireless_crafting_monitor', '2147483647')
  energize(['refinedstorageaddons:wireless_crafting_grid'], 'refinedstorageaddons:creative_wireless_crafting_grid', '2147483647')
  energize(['refinedstorage:portable_grid'], 'refinedstorage:creative_portable_grid', '2147483647')
  energize(['refinedstorage:controller', 'atmadditions:atm_star'], 'refinedstorage:creative_controller', '2147483647')
})