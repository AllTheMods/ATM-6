onEvent('recipes', e => {
  e.shaped('apotheosis:boss_summoner', ['CVC', 'AEA', 'CUC'], {
    C: 'atmadditions:allthecatalystium',
    E: ['minecraft:enderman_spawn_egg', 'minecraft:skeleton_spawn_egg', 'minecraft:zombie_spawn_egg', 'minecraft:zombified_piglin_spawn_egg'],
    A: 'allthemodium:allthemodium_ingot',
    V: 'allthemodium:vibranium_ingot',
    U: 'allthemodium:unobtainium_ingot'
  }).id(`kubejs:apotheosis/boss_summoner`)

  removeRecipeByID(e, [
    'apotheosis:fletching/iron_mining_arrow',
    'apotheosis:fletching/diamond_mining_arrow'
  ])
})
