onEvent('recipes', e => {
  e.remove({ type: 'xreliquary:alkahestry_charging' })

  modifyShaped(e, 'xreliquary:fertile_lily_pad', 1, ['ESE', 'FLF', 'ESE'], {
    E: 'xreliquary:fertile_essence',
    S: 'mysticalagriculture:supremium_growth_accelerator',
    L: 'minecraft:lily_pad',
    F: 'mysticalagriculture:mystical_fertilizer'
  })

  removeRecipeByOutput(e, [
    'xreliquary:alkahestry_tome'
  ])
})
