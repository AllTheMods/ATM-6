onEvent('recipes', e => {
  e.remove({
      type: 'xreliquary:alkahestry_charging'
  })

  e.shaped('xreliquary:fertile_lily_pad', ['ESE', 'FLF', 'ESE'], {
      E: 'xreliquary:fertile_essence',
      S: 'mysticalagriculture:supremium_growth_accelerator',
      L: 'minecraft:lily_pad',
      F: 'mysticalagriculture:mystical_fertilizer'
  }).id(`kubejs:xreliquary/fertile_lily_pad`)

  e.replaceInput('xreliquary:bat_wing', ['ars_nouveau:wilden_wing', 'forbidden_arcanus:bat_wing', 'xreliquary:bat_wing'])

  removeRecipeByOutput([
      'xreliquary:alkahestry_tome',
      'xreliquary:fertile_lily_pad'
  ])
})