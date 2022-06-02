onEvent('recipes', e => {
  e.recipes.bloodmagic.altar('explorerscompass:explorerscompass', 'minecraft:compass').upgradeLevel(2).altarSyphon(25000)

  removeRecipeByID(e, [
    'explorerscompass:explorers_compass'
  ])
})
