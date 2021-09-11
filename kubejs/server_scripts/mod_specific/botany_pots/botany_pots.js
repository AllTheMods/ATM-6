onEvent('recipes', e => {
  const pots = [
    'botanypots:botany_pot',
    'botanypots:white_botany_pot',
    'botanypots:orange_botany_pot',
    'botanypots:magenta_botany_pot',
    'botanypots:light_blue_botany_pot',
    'botanypots:yellow_botany_pot',
    'botanypots:lime_botany_pot',
    'botanypots:pink_botany_pot',
    'botanypots:gray_botany_pot',
    'botanypots:light_gray_botany_pot',
    'botanypots:cyan_botany_pot',
    'botanypots:purple_botany_pot',
    'botanypots:blue_botany_pot',
    'botanypots:brown_botany_pot',
    'botanypots:green_botany_pot',
    'botanypots:red_botany_pot',
    'botanypots:black_botany_pot',
  ]
  //#region FUNCTIONS
  //Soils
  function makeFarmland(input, name, categories, growthModifier) {
    e.recipes.botanypots.soil({
      input: { item: input },
      display: {
        block: input,
        properties: { moisture: 7 }
      },
      categories: categories,
      growthModifier: growthModifier
    }).id(`kubejs:botany_pots/soil/${name}`)
  }
  function makeSoil(input, name, categories, growthModifier) {
    e.recipes.botanypots.soil({
      input: { item: input },
      display: { block: input },
      categories: categories,
      growthModifier: growthModifier
    }).id(`kubejs:botany_pots/soil/${name}`)
  }
  //Crops
  function tier(types, time, soil) {
    types.forEach(type => {
      let rItem = `mysticalagriculture:${type}_essence`
      let inItem = `mysticalagriculture:${type}_seeds`
      let renBlock = `mysticalagriculture:${type}_crop`

      e.remove({ id: `mysticalagriculture:crops/${type}` })
      e.recipes.botanypots.crop({
        seed: Ingredient.of(inItem).toJson(),
        categories: [soil],
        growthTicks: time,
        display: {
          block: renBlock,
          properties: { age: 7 }
        },
        results: [{
          chance: 0.75,
          output: Item.of(rItem).toResultJson(),
          minRolls: 1,
          maxRolls: 3
        },
        {
          chance: 0.05,
          output: Item.of(inItem).toResultJson(),
          minRolls: 1,
          maxRolls: 1
        },
        {
          chance: 0.01,
          output: Item.of('mysticalagriculture:fertilized_essence').toResultJson(),
          minRolls: 1,
          maxRolls: 1
        }]
      }).id(`kubejs:botany_pots/crop/mystical_agriculture/${type}`)
    })
  }
  //#endregion
  makeFarmland('mysticalagradditions:insanium_farmland', 'insanium_farmland', ['dirt', 'farmland', 'inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium'], 0.50)
  makeSoil('kubejs:magical_soil', 'magical_soil', ['dirt', 'farmland', 'inferium', 'prudentium', 'tertium', 'imperium', 'supremium', 'insanium', 'magical'], 0.75)
  //#region CROPS
  //Tier 1 Crops
  tier([
    'inferium',
    'air',
    'earth',
    'fire',
    'water',
    'dirt',
    'wood',
    'ice',
    'stone'
  ], 1000, 'inferium')
  //Tier 2 Crops
  tier([
    'aluminum',
    'chicken',
    'coal',
    'copper',
    'coral',
    'cow',
    'dye',
    'fish',
    'honey',
    'iridium',
    'mystical_flower',
    'nature',
    'nether',
    'pig',
    'rubber',
    'saltpeter',
    'sheep',
    'silicon',
    'slime',
    'squid',
    'sulfur',
    'turtle',
    'sky_stone',
    'apatite'
  ], 1750, 'prudentium')
  //Tier 3 Crops
  tier([
    'azure_silver',
    'brass',
    'bronze',
    'certus_quartz',
    'creeper',
    'crimson_iron',
    'ender_biotite',
    'glowstone',
    'graphite',
    'iron',
    'lead',
    'manasteel',
    'nether_quartz',
    'obsidian',
    'prismarine',
    'quartz_enriched_iron',
    'rabbit',
    'redstone',
    'silver',
    'skeleton',
    'spider',
    'tin',
    'zinc',
    'zombie',
    'lumium',
    'fluorite',
    'tinkers_bronze',
    'slimesteel',
    'pig_iron',
    'steeleaf',
    'ironwood'
  ], 2500, 'tertium')
  //Tier 4 Crops
  tier([
    'azure_electrum',
    'blaze',
    'chrome',
    'constantan',
    'crimson_steel',
    'electrum',
    'elementium',
    'end',
    'enderman',
    'experience',
    'fluix',
    'ghast',
    'gold',
    'invar',
    'lapis_lazuli',
    'mithril',
    'nickel',
    'oratchalcum',
    'osmium',
    'refined_glowstone',
    'refined_obsidian',
    'steel',
    'titanium',
    'tungsten',
    'enderium',
    'compressed_iron',
    'hop_graphite',
    'cobalt',
    'rose_gold',
    'knightmetal',
    'fiery_ingot'
  ], 3250, 'imperium')
  //Tier 5 Crops
  tier([
    'diamond',
    'emerald',
    'netherite',
    'terrasteel',
    'uraninite',
    'wither_skeleton',
    'platinum',
    'uranium',
    'manyullyn',
    'queens_slime',
    'hepatizon'
  ], 4000, 'supremium')
  //Tier 6 Crops
  tier([
    'dragon_egg',
    'nether_star',
    'nitro_crystal',
  ], 4750, 'insanium')
  //Magical Crops
  tier([
    'allthemodium',
    'vibranium',
    'unobtainium'
  ], 5500, 'magical')

  e.recipes.botanypots.crop([
    Item.of('ars_nouveau:mana_bloom').chance(0.75),
    { item: Item.of('ars_nouveau:mana_bloom_crop').chance(0.05), maxRolls: 2 }
  ], 'ars_nouveau:mana_bloom_crop').categories(['dirt'])
  //#endregion
  utils.listOf(['transformation', 'sorting', 'mining', 'time']).forEach(tree => {
    e.recipes.botanypots.crop({
      seed: Item.of(`twilightforest:${tree}_sapling`).toJson(),
      categories: ['dirt'],
      growthTicks: 2400,
      display: { block: `twilightforest:${tree}_sapling` },
      results: [{
        chance: 0.25,
        output: Item.of(`twilightforest:${tree}_log`).toResultJson(),
        minRolls: 1,
        maxRolls: 1
      }]
    }).id(`kubejs:botany_pots/botanytrees/${tree}_tree`)
  })

  colors.forEach(color => {
    e.shaped(item.of(`botanypots:hopper_${color}_botany_pot`), ['MPM', ' H '], {
      M: '#forge:nuggets/terrasteel',
      P: `botanypots:${color}_botany_pot`,
      H: ['botania:hopperhock', 'botania:hopperhock_chibi']
    })
    e.shapeless(`botanypots:${color}_botany_pot`, [pots, `#forge:dyes/${color}`])
    e.shapeless(`botanypots:hopper_${color}_botany_pot`, ['#botanypots:hopper_botany_pots', `#forge:dyes/${color}`])
  })

  modifyShaped('botanypots:botany_pot', 1, ['T T', 'TPT', ' T '], {
    T: 'minecraft:terracotta',
    P: 'minecraft:flower_pot'
  })
  modifyShaped('botanypots:hopper_botany_pot', 1, ['MPM', ' H '], {
    M: '#forge:nuggets/terrasteel',
    P: 'botanypots:botany_pot',
    H: ['botania:hopperhock', 'botania:hopperhock_chibi']
  })
})