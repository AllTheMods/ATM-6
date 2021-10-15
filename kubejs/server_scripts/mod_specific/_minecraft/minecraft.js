onEvent('recipes', e => {
  e.replaceInput('minecraft:glass_pane', '#forge:glass_panes')

  modifySmelt(e, 'minecraft:glass', '#forge:sand')
  e.smoking('minecraft:leather', 'forbidden_arcanus:rotten_leather').xp(.5).id('kubejs:minecraft/smoking/leather')

  e.recipes.immersiveengineering.crusher(`4x minecraft:nether_wart`, `minecraft:nether_wart_block`).id('kubejs:minecraft/immersiveengineering_crusher/nether_wart')
  e.recipes.mekanism.crushing('4x minecraft:blaze_powder', '#forge:rods/blaze')
  e.recipes.mekanism.sawing(`6x minecraft:oak_planks`, `byg:withering_oak_log`, Item.of('thermal:sawdust').withChance(0.25)).id(`kubejs:saw/byg_log_withering_oak`)
  e.recipes.mekanism.sawing(`6x minecraft:birch_planks`, [`byg:stripped_palo_verde_log`, `byg:palo_verde_log`], Item.of('thermal:sawdust').withChance(0.25)).id(`kubejs:saw/byg_log_palo_verde`)
  e.recipes.mekanism.enriching('4x minecraft:blaze_powder', 'minecraft:blaze_rod').id('kubejs:minecraft/enriching/blaze_powder')

  e.shapeless('4x minecraft:clay_ball', 'minecraft:clay').id(`kubejs:minecraft/clay`)
  e.shapeless('4x minecraft:quartz', 'minecraft:quartz_block').id(`kubejs:minecraft/quartz`)
  e.shapeless('minecraft:chest', '#forge:chests/wooden').id(`kubejs:minecraft/quartz`)
  e.shapeless('minecraft:crafting_table', /byg:.+_crafting_table/).id(`kubejs:byg_crafter_convert`)
  e.shapeless('9x minecraft:honeycomb', 'minecraft:honeycomb_block').id('kubejs:minecraft/honeycomb')

  e.shaped('minecraft:totem_of_undying', [' E ', 'GVG', ' G '], {
    E: 'compressium:emerald_3',
    G: '#forge:storage_blocks/gold',
    V: 'minecraft:villager_spawn_egg'
  }).id(`kubejs:minecraft/totem_of_undying`)
  e.shaped('4x minecraft:ladder', ['S S', 'SPS', 'S S'], {
    S: '#forge:rods',
    P: '#minecraft:planks'
  }).id(`kubejs:minecraft/ladder`)
  e.shaped('minecraft:hopper', ['ILI', 'ILI', ' I '], {
    L: '#minecraft:logs',
    I: '#forge:ingots/iron'
  }).id(`kubejs:minecraft/hopper`)
  e.shaped('16x minecraft:stick', ['L', 'L'], { 'L': '#minecraft:logs' }).id(`kubejs:minecraft/sticks`)
  e.shaped('12x minecraft:grass', [' E ', 'E E'], { 'E': 'mysticalagriculture:nature_essence' }).id('kubejs:minecraft/grass')
  e.shaped('minecraft:dragon_egg', ['SSS', 'SDS', 'SSS'], {
    S: 'mysticalagradditions:dragon_egg_chunk',
    D: 'atmadditions:dragon_soul'
  }).id('kubejs:minecraft/dragon_egg')
  e.shaped('minecraft:white_wool', ['SS', 'SS'], { S: '#forge:string' })
  e.shaped('3x minecraft:glass', ['GGG', 'G G', 'GGG',], { G: 'minecraft:glass_pane' })

  colors.forEach(color => {
    e.remove({ output: `minecraft:${color}_bed` })
    e.remove({ output: `minecraft:${color}_wool` })
    e.remove({ output: `minecraft:${color}_carpet` })

    e.replaceInput(`minecraft:${color}_dye`, `#forge:dyes/${color}`)
    e.shaped(`minecraft:${color}_bed`, ['WWW', 'PPP'], {
      P: '#minecraft:planks',
      W: `minecraft:${color}_wool`
    })
    e.shaped(`8x minecraft:${color}_wool`, ['WWW', 'WCW', 'WWW'], {
      C: `#forge:dyes/${color}`,
      W: '#minecraft:wool'
    })
    e.shaped(item.of(`minecraft:${color}_carpet`, 8), ['WWW', 'WCW', 'WWW'], {
      C: `#forge:dyes/${color}`,
      W: '#minecraft:carpets'
    })
    e.shaped(item.of(`minecraft:${color}_carpet`, 3), ['WW'], { W: `minecraft:${color}_wool` })
    e.shaped(item.of(`minecraft:${color}_stained_glass`, 3), ['GGG', 'G G', 'GGG',], { G: `minecraft:${color}_stained_glass_pane` })
    e.shaped(item.of(`minecraft:${color}_concrete`, 8), ['PPP', 'PWP', 'PPP',], {
      P: `minecraft:${color}_concrete_powder`,
      W: ['resourcefulbees:water_honeycomb', 'mysticalagriculture:water_essence', 'minecraft:water_bucket']
    })
    e.shaped(`2x minecraft:${color}_wool`, ['C', 'C', 'C',], { C: `minecraft:${color}_carpet` })
    e.shaped(item.of(`minecraft:${color}_wool`, 1), ['W', 'W'], { W: `absentbydesign:slab_wool_${color == 'light_gray' ? 'silver' : color}` })
    e.shapeless(`minecraft:${color}_bed`, ['#minecraft:beds', `#forge:dyes/${color}`])
    e.shapeless(`minecraft:${color}_carpet`, ['#minecraft:carpets', `#forge:dyes/${color}`])

    if (color != 'gray') {
      e.recipes.mekanism.enriching(`2x minecraft:${color}_dye`, `#byg:${color}_dye`)
      e.recipes.pedestals.pedestal_crushing({
        ingredient: { tag: `byg:${color}_dye` },
        result: { item: `minecraft:${color}_dye`, count: 2 }
      })
    }
  })

  removeRecipeByID(e, ['minecraft:comparator', 'minecraft:glass'])
  removeRecipeByOutput(e, [
    'minecraft:dragon_egg',
    ['#minecraft:signs', 'pedestals:pedestal_sawing'],
    ['#minecraft:wooden_stairs', 'pedestals:pedestal_sawing'],
    ['#minecraft:wooden_slabs', 'pedestals:pedestal_sawing'],
    ['#minecraft:wooden_trapdoors', 'pedestals:pedestal_sawing'],
    ['#minecraft:wooden_pressure_plates', 'pedestals:pedestal_sawing'],
    ['#minecraft:stick', 'pedestals:pedestal_sawing']
  ])

  modifyShaped(e, 'minecraft:honeycomb_block', 1, ['CCC', 'CCC', 'CCC'], { C: 'minecraft:honeycomb' })
  modifyShaped(e, 'minecraft:sticky_piston', 1, ['B', 'P'], {
    B: '#forge:slimeballs',
    P: 'minecraft:piston'
  })
  modifyShaped(e, 'minecraft:daylight_detector', 1, ['GGG', 'QQQ', 'SSS'], {
    G: '#forge:glass',
    Q: '#forge:gems/quartz',
    S: '#minecraft:wooden_slabs'
  })
  modifyShaped(e, 'minecraft:beehive', 1, ['PPP', 'CCC', 'PPP'], {
    P: '#minecraft:planks',
    C: '#resourcefulbees:resourceful_honeycomb'
  })
})
