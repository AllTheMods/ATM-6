onEvent('recipes', e => {
  e.recipes.bloodmagic.altar('explorerscompass:explorerscompass', 'minecraft:compass').upgradeLevel(3).altarSyphon(40000)

  removeRecipeByID(e, [
    'explorerscompass:explorers_compass'
  ])
})
