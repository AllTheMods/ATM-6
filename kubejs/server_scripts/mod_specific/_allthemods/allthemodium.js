onEvent('recipes', e => {
  function upgrade(material, previous, next) {
    e.recipes.allthemodium.atmshaped_crafting({
      pattern: ['XXX', 'XYX'],
      key: {
        X: { tag: `forge:${material}` },
        Y: { item: `${previous}_helmet` }
      },
      result: { item: `${next}_helmet` }
    }).id(`kubejs:allthemodium/${previous.replace(`:`, `_`)}_helmet_upgrade`)

    e.recipes.allthemodium.atmshaped_crafting({
      pattern: ['XYX', 'XXX', 'XXX'],
      key: {
        X: { tag: `forge:${material}` },
        Y: { item: `${previous}_chestplate` }
      },
      result: { item: `${next}_chestplate` }
    }).id(`kubejs:allthemodium/${previous.replace(`:`, `_`)}_chestplate_upgrade`)

    e.recipes.allthemodium.atmshaped_crafting({
      pattern: ['XXX', 'XYX', 'X X'],
      key: {
        X: { tag: `forge:${material}` },
        Y: { item: `${previous}_leggings` }
      },
      result: { item: `${next}_leggings` }
    }).id(`kubejs:allthemodium/${previous.replace(`:`, `_`)}_leggings_upgrade`)

    e.recipes.allthemodium.atmshaped_crafting({
      pattern: ['XYX', 'X X'],
      key: {
        X: { tag: `forge:${material}` },
        Y: { item: `${previous}_boots` }
      },
      result: { item: `${next}_boots` }
    }).id(`kubejs:allthemodium/${previous.replace(`:`, `_`)}_boots_upgrade`)
  }

  upgrade('ingots/iron', 'minecraft:leather', 'minecraft:iron')
  upgrade('gems/diamond', 'minecraft:iron', 'minecraft:diamond')
  upgrade('ingots/allthemodium', 'minecraft:netherite', 'allthemodium:allthemodium')

  e.smelting('alltheores:platinum_ingot', 'create:crushed_platinum_ore').xp(1).id('kubejs:smelting/create_platinum')
  e.smelting('allthemodium:vibranium_allthemodium_alloy_ingot', 'allthemodium:vibranium_allthemodium_alloy_dust').xp(.5).id('kubejs:smelting/vibranium_allthemodium_alloy_dust')
  e.smelting('allthemodium:unobtainium_allthemodium_alloy_ingot', 'allthemodium:unobtainium_allthemodium_alloy_dust').xp(.5).id('kubejs:smelting/unobtainium_allthemodium_alloy_dust')
  e.smelting('allthemodium:unobtainium_vibranium_alloy_ingot', 'allthemodium:unobtainium_vibranium_alloy_dust').xp(.5).id('kubejs:smelting/unobtainium_vibranium_alloy_dust')
})
